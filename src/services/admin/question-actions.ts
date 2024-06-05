import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { backUrl } from '@/datas/variable';
import { uploadImage } from '@/firebase/fireBaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import useSWR from 'swr';
import { QuestionsData, QuestionPage, Question } from '@/lib/types';
import { fetcher } from '@/lib/fetcher';
import { processedQuestions } from '@/helper/optionMap';

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

export const usePageCount = (subject: string) => {
  const [size, setSize] = useState(30);

  const { data, error } = useSWR<QuestionPage>(
    `${backUrl}/api/v1/manageQuestion/totalPage/${subject}?size=${size}`,
    fetcher,
    {
      refreshInterval: 60 * 60 * 1000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return {
    totalPages: data?.totalPage || 0,
    size,
    setSize,
  };
};

export const useQuestions = (subject: string, size: number) => {
  const [page, setPage] = useState(1);

  const { data, error, isValidating } = useSWR<QuestionsData>(
    `${backUrl}/api/v1/manageQuestion/getQuestions/${subject}?page=${page}&size=${size}`,
    fetcher,
    {
      refreshInterval: 10 * 60 * 1000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  const questionCount = data?.totalQuestions || 0;
  const currentPage = data?.currentPage || 0;
  const questionsData = processedQuestions(data?.questions!);

  const handlePageChange = (newPage: number) => setPage(newPage);

  // const changePageSize = (newSize: number) => {
  //   setSize(newSize);
  //   setPage(1);
  // };

  return {
    questionsData,
    questionCount,
    isFetching: isValidating,
    page,
    size,
    currentPage,
    handlePageChange,
    // changePageSize,
    // setSize,
  };
};
