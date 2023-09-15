import { IoReturnUpBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import style from "./BackButton.module.css"

export default function BackButton ({ to }) {
  return (
    <Link className={style.buttonLink} to={to}>
      <button className={style.backButton}>
        <IoReturnUpBack />Back
      </button>
    </Link>
  );
};

