import React from 'react';

import './Tooltip.css'

const Tooltip = ({text, type}) => {
  return (
    <div className={`Tooltip Tooltip--${type}`}>
      {text}
      <div className='Tooltip__arrow'></div>
    </div>
  );
}

export default Tooltip;