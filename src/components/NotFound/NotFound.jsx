import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import style from './NotFound.module.css';
import { IoReturnUpBack } from 'react-icons/io5';
 
 

export default function NotFound () {
  return (
    <><Header /><div>
       <Link to="/" ><button className={style.backButton}> <IoReturnUpBack />Back</button></Link>
       <div className={style.notFound}>
          <p>
          404
          <br />
          Page Not Found
        </p>
        </div>
      </div></>
  );
};

