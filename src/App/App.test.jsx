import { render, screen } from '@testing-library/react';
import App from './App';

describe('Prueba de renderizado general', () => {
  it('Muestra Form con input', () => {
    render(<App />)
    expect(screen.getByText('Ingresa la cantidad de repeticiones para la serie')).toBeInTheDocument();
  })

  it('Valida texto de botón', () => {
    render(<App />)
    expect(screen.getByText('Calcular')).toBeInTheDocument();
  })
})