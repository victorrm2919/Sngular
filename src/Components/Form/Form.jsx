import React from 'react';
import './Form.css';

import Button from '../Button/Button';
import Input from '../Input/Input';

const Form = ({ title, inputPlaceholder, errorAlert, btnText, onClick, onChangeInput, valueInput}) => {
  return (
    <form className='Form'>
      <p>{title}</p>
      <Input placeholder={inputPlaceholder} errorText={errorAlert} setValue={onChangeInput} value={valueInput}/>
      <Button text={btnText} size='md' color='gray' clickAction={onClick} />
    </form>
  );
};

export default Form;