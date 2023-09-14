import React from 'react';
import PropTypes from 'prop-types';
import style from './Title.module.css';

export default function Title ({ title }) {
  return (
    <>
      <h2 className={style.mainTitle}>{title}</h2>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

 
