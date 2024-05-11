import { icons } from 'lucide-react';
import { FaAtom, FaFlask, FaDna, FaMicroscope, FaBrain } from 'react-icons/fa';

const tabs = [
  {
    id: 'Physics',
    label: 'Physics',
    icon: FaAtom,
  },
  {
    id: 'Chemistry',
    label: 'Chemistry',
    icon: FaFlask,
  },
  {
    id: 'Botany',
    label: 'Botany',
    icon: FaDna,
  },
  {
    id: 'Zoology',
    label: 'Zoology',
    icon: FaMicroscope,
  },
  {
    id: 'MAT',
    label: 'MAT',
    icon: FaBrain,
  },
];

const columns = [
  {
    key: 'questionNo',
    label: 'Q.No.',
  },

  {
    key: 'unit',
    label: 'Unit',
  },
  {
    key: 'question',
    label: 'Question',
  },
  {
    key: 'correctAnswer',
    label: 'Answer',
  },
];

export { tabs, columns };
