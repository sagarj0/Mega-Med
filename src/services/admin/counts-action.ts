// hooks/useCardData.ts
import useSWR from 'swr';
import axios from 'axios';
import { backUrl } from '@/datas/variable';

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);

const useCardData = () => {
  const { data: totalQuestions, error: questionError } = useSWR(`${backUrl}/api/v1/manageQuestion/count`, fetcher, {
    refreshInterval: 60000,
  });
  const { data: totalAdmins, error: adminError } = useSWR(`${backUrl}/api/v1/admin/count`, fetcher, {
    refreshInterval: 60000 * 30,
  });
  const { data: totalMentors, error: mentorError } = useSWR(`${backUrl}/api/v1/mentor/count`, fetcher, {
    refreshInterval: 60000 * 30,
  });
  const { data: totalUsers, error: userError } = useSWR(`${backUrl}/api/v1/user/count`, fetcher, {
    refreshInterval: 60000 * 30,
  });

  return {
    totalQuestions,
    totalAdmins,
    totalMentors,
    totalUsers,
    error: questionError || adminError || mentorError || userError,
  };
};

export default useCardData;
