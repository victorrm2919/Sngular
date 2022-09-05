import React from 'react';
import { AppContext } from '../../App/App';
import './Button.css'

const Button = ({text, size='sm', color='primary', clickAction}) => {

  const { valueSerie, setClassError} = React.useContext(AppContext)

  const onClick = () => {
    const value = valueSerie > 0 ? valueSerie : 0

    !value ? setClassError(true) : setClassError(false)
    clickAction(value)
  }

  return (
    <button type='button' className={`Button Button--${size} Button--${color}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;