import React from 'react';
// import { Link } from 'react-router-dom'; 
import style from './Header.module.css';

export default function Header() {
  
  return (
    <div className={style.headerSection}>
      <nav>
        <ul className={style.headerList}>
          <li className={style.headerItem}>
          
              Home
            
          </li>
          <li className={style.headerItem}>
            
              Movies
             
          </li>
        </ul>
      </nav>
    </div>
  );
}
