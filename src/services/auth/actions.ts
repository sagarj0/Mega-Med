import React from 'react';
import toast from 'react-hot-toast';
import { endpoints } from './endpoints';
import api from '@/helper/axios';
interface FormEventProps {
  e: React.FormEvent<HTMLFormElement>;
  router: any;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const handleLogin = async ({ e, router, setLoading }: FormEventProps) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formData = new FormData(e.target as HTMLFormElement);
    const loginCredential = Object.fromEntries(formData); // Simplified from Array.from(formData.entries())

    console.log(loginCredential);

    const res = await api.post(endpoints.login, loginCredential);

    if (res.status === 200) {
      toast.success('Logged in Successfully');
      (e.target as HTMLFormElement).reset();
      router.push(`/${res.data.data.user.role}`);
    }
  } catch (error) {
    toast.error('Failed to login');
  } finally {
    setLoading(false);
  }
};

const handleSignup = async ({ e, router, setLoading }: FormEventProps) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formData = new FormData(e.target as HTMLFormElement);
    const signupCredential = Object.fromEntries(formData); // Simplified from Array.from(formData.entries())

    const res = await api.post(endpoints.register, signupCredential);

    if (res.status === 201) {
      toast.success('Registered Successfully');
      (e.target as HTMLFormElement).reset();
      router.push(`/${res.data.data.user.role}`);
    }
  } catch (error) {
    toast.error('Failed to register');
  } finally {
    setLoading(false);
  }
};

export { handleLogin, handleSignup };
