import api from '@/helper/axios';
import { endpoints } from '@/services/admin/endpoints';

const swrConfig = {
  refreshInterval: 60000 * 30,
};

const useCardData = () => {
  const { data: totalQuestions, error: questionError } = api.useSWR<number>(endpoints.countQuestion, swrConfig);
  const { data: totalAdmins, error: adminError } = api.useSWR<number>(endpoints.countAdmin, swrConfig);
  const { data: totalMentors, error: mentorError } = api.useSWR<number>(endpoints.countMentor, swrConfig);
  const { data: totalUsers, error: userError } = api.useSWR<number>(endpoints.countUser, swrConfig);

  return {
    totalQuestions,
    totalAdmins,
    totalMentors,
    totalUsers,
    error: questionError || adminError || mentorError || userError,
  };
};

export default useCardData;
