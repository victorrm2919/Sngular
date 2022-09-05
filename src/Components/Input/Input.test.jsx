import React from 'react';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import { AppContext } from '../../App/App';
import Input from './Input';

const mockHandler = jest.fn();

const data = {
  classError: true
};

function CustomComponent() {
  const [value, setValue] = React.useState('')
  return (
    <AppContext.Provider value={data}>
      <Input errorText={'Error Tooltip'} placeholder='Ingresa n' setValue={setValue} value={value} />
    </AppContext.Provider>
  );
}

describe('Valida funcionamiento de input', () => {
  it('Captura de placeholder', () => {
    render(
      <CustomComponent />
    );

    expect(screen.getByPlaceholderText('Ingresa n')).toBeInTheDocument();
  });

  it('Escritura', () => {
    render(
      <CustomComponent />
    );

    const input = screen.getByPlaceholderText('Ingresa n');
    fireEvent.change(input, { target: { value: 10 } });
    expect(input.value).toBe('10')
  });

  it('Enter', () => {
    render(
      <CustomComponent />
    );

    const input = screen.getByPlaceholderText('Ingresa n');
    fireEvent.change(input, { target: { value: 10 } }); 
    fireEvent.keyDown(input,{ target: { onKeyPress: mockHandler } })
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });

});