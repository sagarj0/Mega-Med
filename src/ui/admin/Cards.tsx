import { FaFileCircleQuestion } from 'react-icons/fa6';
import { FaPeopleArrows, FaRegUser } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';
import axios from 'axios';
import { backUrl } from '@/datas/variable';

const iconMap = {
  question: FaFileCircleQuestion,
  mentor: FaPeopleArrows,
  admin: RiAdminLine,
  user: FaRegUser,
};

export default async function CardWrapper() {
  let totalQuestions = 0,
    totalAdmins = 0,
    totalMentors = 0,
    totalUsers = 0;

  try {
    const [Quesresponse, Admiresponse, Mentresponse, Userresponse] =
      await Promise.all([
        axios.get(`${backUrl}/api/v1/manageQuestion/count`),
        axios.get(`${backUrl}/api/v1/admin/count`),
        axios.get(`${backUrl}/api/v1/mentor/count`),
        axios.get(`${backUrl}/api/v1/user/count`),
      ]);

    totalQuestions = Quesresponse.data.data;
    totalAdmins = Admiresponse.data.data;
    totalMentors = Mentresponse.data.data;
    totalUsers = Userresponse.data.data;
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="w-full md:flex  grid grid-cols-2 gap-5  items-center justify-around">
      <Card title="Questions" value={totalQuestions} type="question" />
      <Card title="Admins" value={totalAdmins} type="admin" />
      <Card title="Mentors" value={totalMentors} type="mentor" />
      <Card title="Users" value={totalUsers} type="user" />
    </div>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'question' | 'admin' | 'mentor' | 'user';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-400 p-2  md:w-1/5 shadow-md">
      <div className="flex p-4">
        {Icon ? <Icon className="h-4 w-4 text-gray-800" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-white px-5 py-8 text-center text-2xl">
        {value}
      </p>
    </div>
  );
}

/// floowing code is to fetch then cache it and then revalidating it using swr

// import useSWR from 'swr';
// import { FaFileCircleQuestion } from 'react-icons/fa6';
// import { FaPeopleArrows, FaRegUser } from 'react-icons/fa';
// import { RiAdminLine } from 'react-icons/ri';
// import axios from 'axios';

// const fetcher = (url) => axios.get(url).then((res) => res.data.data);

// const iconMap = {
//   question: FaFileCircleQuestion,
//   mentor: FaPeopleArrows,
//   admin: RiAdminLine,
//   user: FaRegUser,
// };

// export default function CardWrapper() {
//   const { data: totalQuestions, error: questionError } = useSWR('http://localhost:3001/api/v1/manageQuestion/count', fetcher, { refreshInterval: 60000 });
//   const { data: totalAdmins, error: adminError } = useSWR('http://localhost:3001/api/v1/admin/count', fetcher, { refreshInterval: 60000 });
//   const { data: totalMentors, error: mentorError } = useSWR('http://localhost:3001/api/v1/mentor/count', fetcher, { refreshInterval: 60000 });
//   const { data: totalUsers, error: userError } = useSWR('http://localhost:3001/api/v1/user/count', fetcher, { refreshInterval: 60000 });

//   if (questionError || adminError || mentorError || userError) {
//     console.error(questionError || adminError || mentorError || userError);
//     return <div>Error loading data</div>;
//   }

//   if (!totalQuestions || !totalAdmins || !totalMentors || !totalUsers) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="w-full flex items-center justify-around">
//       <Card title="Questions" value={totalQuestions} type="question" />
//       <Card title="Admins" value={totalAdmins} type="admin" />
//       <Card title="Mentors" value={totalMentors} type="mentor" />
//       <Card title="Users" value={totalUsers} type="user" />
//     </div>
//   );
// }

// export function Card({
//   title,
//   value,
//   type,
// }: {
//   title: string;
//   value: number | string;
//   type: 'question' | 'admin' | 'mentor' | 'user';
// }) {
//   const Icon = iconMap[type];

//   return (
//     <div className="rounded-xl bg-gray-400 p-2 w-1/5 shadow-md">
//       <div className="flex p-4">
//         {Icon ? <Icon className="h-4 w-4 text-gray-800" /> : null}
//         <h3 className="ml-2 text-sm font-medium">{title}</h3>
//       </div>
//       <p className="truncate rounded-xl bg-white px-5 py-8 text-center text-2xl">
//         {value}
//       </p>
//     </div>
//   );
// }
