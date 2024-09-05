import Image from 'next/image';
import React from 'react';

const loading = () => {
    return (
      <div className='flex justify-center items-center'>
      <Image src='/loadingPage.gif' alt='Loading-Page' width={500}  height={500} placeholder='blur' blurDataURL='/loadingPage.gif'/>
              </div>
    );
};

export default loading;