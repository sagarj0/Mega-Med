import api from '@/helper/axios';
import { endpoints } from '@/services/admin/endpoints';

const useCardData = () => {
  const { data: totalQuestions, error: questionError } = api.useSWR<number>(endpoints.countQuestion, {
    refreshInterval: 60000 * 30,
  });
  const { data: totalAdmins, error: adminError } = api.useSWR<number>(endpoints.countAdmin, {
    refreshInterval: 60000 * 30,
  });
  const { data: totalMentors, error: mentorError } = api.useSWR<number>(endpoints.countMentor, {
    refreshInterval: 60000 * 30,
  });
  const { data: totalUsers, error: userError } = api.useSWR<number>(endpoints.countUser, {
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
