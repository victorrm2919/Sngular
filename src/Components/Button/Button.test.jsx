import { fireEvent, render, screen } from '@testing-library/react';
import { AppContext } from '../../App/App';
import Button from './Button';

const mockHandler = jest.fn();

function CustomComponent() {
  const data = {
    valueSerie: 0,
    setClassError: () => { }
  };
  return (
    <AppContext.Provider value={data}>
      <Button text='test' clickAction={mockHandler} />
    </AppContext.Provider>
  );
}


describe('Valida funcionamiento de boton', () => {
  it('Valida Context e información', () => {

    render(
      <CustomComponent />
    );

    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('Funcionamiento de click', () => {

    render(
      <CustomComponent />
    );

    const button = screen.getByText('test');
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);

  });
});