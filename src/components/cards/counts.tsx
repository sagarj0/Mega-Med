import { FaFileCircleQuestion } from 'react-icons/fa6';
import { FaPeopleArrows, FaRegUser } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';

const iconMap = {
  question: FaFileCircleQuestion,
  mentor: FaPeopleArrows,
  admin: RiAdminLine,
  user: FaRegUser,
};

interface CardProps {
  title: string;
  value: number | string;
  type: 'question' | 'admin' | 'mentor' | 'user';
}

export const Card: React.FC<CardProps> = ({ title, value, type }) => {
  const Icon = iconMap[type] || null;

  return (
    <div className="rounded-xl bg-gray-400 p-2 shadow-md md:w-1/5">
      <div className="flex items-center p-4">
        <Icon className="h-4 w-4 text-gray-800" />
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-white px-5 py-8 text-center text-2xl">{value}</p>
    </div>
  );
};
