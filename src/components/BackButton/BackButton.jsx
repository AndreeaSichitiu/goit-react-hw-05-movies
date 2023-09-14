import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function BackButton ({ to }) {
  return (
    <Link to={to}>
      <button>
        <FiArrowLeftCircle />Back
      </button>
    </Link>
  );
};

