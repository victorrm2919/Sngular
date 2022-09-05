import React from 'react';
import './Input.css'

import { AppContext } from '../../App/App';
import Tooltip from '../Tooltip/Tooltip';

const Input = ({ title, placeholder, errorText, value, setValue}) => {

  const {classError} = React.useContext(AppContext)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const keyDown= (e) => {
    if(e.keyCode === 13) {
      e.preventDefault();
    }
  }

  return (
    <div className={`Input d-flex ${classError && 'error'}`}>
      {title && (<label>{title}</label>)}
      <input type='text' placeholder={placeholder} value={value} onChange={onChange} onKeyDown={keyDown}/>
      {classError && (<Tooltip text={errorText} type='error' />)}
    </div>
  );
};

export default Input;