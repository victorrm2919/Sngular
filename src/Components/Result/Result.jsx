import React from 'react';
import './Result.css'

const Result = ({ description, dataResult }) => {
  return (
    <div className='Result flex-50 d-flex direction-column'>
      <h4 className='Result__title'>{description}</h4>
      <div className='Result__content flex-auto'>
        <span>{dataResult}</span>
      </div>
    </div>
  );
};

export default Result;