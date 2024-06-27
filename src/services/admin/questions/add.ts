import toast from 'react-hot-toast';
import { uploadImage } from '@/firebase/fireBaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { endpoints } from './endpoints';
import api from '@/helper/axios';

interface Props {
  e: React.FormEvent<HTMLFormElement>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handleQuestionSubmit = async ({ e, setLoading }: Props) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formData = new FormData(e.target as HTMLFormElement);

    const questionCredential: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      questionCredential[key] = value;
    });

    const imageKeys = ['qImage', 'aImage', 'bImage', 'cImage', 'dImage', 'eImage'];
    const uploadPromises = imageKeys.map(async (key) => {
      const image = formData.get(key) as File | null;
      if (image?.type.startsWith('image')) {
        const storageRef = ref(uploadImage, `Questions/${v4()}`);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        questionCredential[key] = downloadURL;
      } else {
        questionCredential[key] = null;
      }
    });

    await Promise.all(uploadPromises);

    const res = await api.post(endpoints.addQuestion, questionCredential);

    if (res.status === 200) {
      toast.success('Question added successfully');
      (e.target as HTMLFormElement).reset();
    } else {
      toast.error('Failed to add question');
    }
  } catch (error) {
    toast.error((error as Error).message || 'Error occurred');
  } finally {
    setLoading(false);
  }
};
