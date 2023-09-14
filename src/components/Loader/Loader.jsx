import React from 'react';
import { FallingLines } from 'react-loader-spinner';

 export default function Loader ({ isLoading }) {
  return (
    <FallingLines
      visible={isLoading}
      color="#4fa94d"
      width="100"
      ariaLabel='falling-lines-loading'      
    />
  );
};

 