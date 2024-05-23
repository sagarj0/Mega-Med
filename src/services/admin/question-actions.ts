import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { backUrl } from '@/datas/variable';
import { uploadImage } from '@/app/fireBaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

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

    const res = await axios.post(
      `${backUrl}/api/v1/manageQuestion/addQuestionManually`,
      questionCredential
    );
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
    toast.error((error as Error).message || 'Error occured'); // Show error message in toast
  }
};
