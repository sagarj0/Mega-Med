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
    label: 'Q.',
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

const subjects = [
  {
    key: 'Physics',
    label: 'Physics',
  },
  {
    key: 'Chemistry',
    label: 'Chemistry',
  },
  {
    key: 'Botany',
    label: 'Botany',
  },
  {
    key: 'Zoology',
    label: 'Zoology',
  },
  {
    key: 'MAT',
    label: 'MAT',
  },
];

export { tabs, columns, subjects };
