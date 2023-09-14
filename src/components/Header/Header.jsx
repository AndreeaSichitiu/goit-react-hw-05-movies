import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import style from "./Header.module.css"
 

 export default function Header() {
  return (
    <div>
      <header className={style.headerSection}>
         <nav className={style.headerList}>
          <NavLink to="/" className={style.headerItem}>Home</NavLink>
          <NavLink to="/movies" className={style.headerItem}>Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

 