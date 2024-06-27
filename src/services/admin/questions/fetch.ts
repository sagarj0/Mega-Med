import { useEffect, useState } from 'react';
import { QuestionsData, QuestionPage } from '@/lib/types';
import { processedQuestions } from '@/helper/optionMap';
import { toast } from 'react-hot-toast';
import { endpoints } from './endpoints';
import api from '@/helper/axios';

export const usePageCount = (subject: string) => {
  const [size, setSize] = useState(30);
  const { data, error } = api.useSWR<QuestionPage>(endpoints.fetchTotalPage + subject + '?size=' + size, {
    refreshInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
  });

  return {
    totalPages: data?.totalPage || 0,
    size,
    setSize,
    error,
  };
};

export const useFetchQuestions = (subject: string, size: number) => {
  const [page, setPage] = useState(1);

  const { data, error, isValidating } = api.useSWR<QuestionsData>(
    endpoints.fetchQuestions + subject + `?page=${page}&size=${size}`,
    {
      refreshInterval: 10 * 60 * 1000,
      revalidateOnFocus: false,
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

  return {
    questionsData,
    questionCount,
    isFetching: isValidating,
    page,
    size,
    currentPage,
    handlePageChange,
  };
};
