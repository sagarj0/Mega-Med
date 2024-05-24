import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { backUrl } from '@/datas/variable';
import { uploadImage } from '@/firebase/fireBaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import useSWR from 'swr';
import { QuestionsData, Question } from '@/lib/types';

interface Props {
  e: React.FormEvent<HTMLFormElement>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  toast: typeof toast;
}

export const handleQuestionSubmit = async ({ e, setLoading, toast }: Props) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.target as HTMLFormElement);
  const formDataArray = Array.from(formData.entries());
  const questionCredential = formDataArray.reduce((acc: { [key: string]: any }, [key, value]) => {
    acc[key] = String(value);
    return acc;
  }, {});

  const images: {
    [key: string]: File;
  } = {
    qImage: formData.get('qImage') as File,
    aImage: formData.get('aImage') as File,
    bImage: formData.get('bImage') as File,
    cImage: formData.get('cImage') as File,
    dImage: formData.get('dImage') as File,
    eImage: formData.get('eImage') as File,
  };

  try {
    const uploadPromises = Object.entries(images).map(async ([key, image]: [string, File]) => {
      if (image.type.startsWith('image')) {
        const storageRef = ref(uploadImage, `Questions/${v4()}`);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        questionCredential[key] = downloadURL;
      } else {
        questionCredential[key] = null;
      }
    });

    await Promise.all(uploadPromises);

    const res = await axios.post(`${backUrl}/api/v1/manageQuestion/addQuestionManually`, questionCredential);
    if (res.status === 200) {
      setLoading(false);
      toast.success('Question added successfully');
      (e.target as HTMLFormElement).reset();
    } else {
      setLoading(false);
      toast.error('Failed to add question');
    }
  } catch (error) {
    setLoading(false);
    toast.error((error as Error).message || 'Error occured');
  }
};

const fetcher = (url: string): Promise<QuestionsData> => axios.get(url).then((res) => res.data.data);

export const useQuestions = (subject: string) => {
  const { data, error, isValidating } = useSWR<QuestionsData>(
    `${backUrl}/api/v1/manageQuestion/getQuestions/${subject}`,
    fetcher,
    {
      refreshInterval: 5 * 60 * 1000, // 5 min
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  useEffect(() => {
    if (error) {
      toast.error('Error occurred while fetching questions', { duration: 3000 });
    }
  }, [error]);

  const questionsData =
    data?.questions.map((question) => {
      question.correctAnswer =
        question.correctAnswer === 'a'
          ? question.optionA
          : question.correctAnswer === 'b'
            ? question.optionB
            : question.correctAnswer === 'c'
              ? question.optionC
              : question.optionD;
      return question;
    }) || [];

  const questionCount = data?.questionCount || 0;

  return { questionsData, questionCount, isValidating };
};
