import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { backUrl } from '@/datas/variable';
import { fetcher } from '@/lib/fetcher';
import { QuestionsData, QuestionPage } from '@/lib/types';
import { processedQuestions } from '@/helper/optionMap';
import { toast } from 'react-hot-toast';

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
    error,
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
