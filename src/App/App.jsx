import React from 'react';

// Styles
import './App.css';

// Components
import Form from '../Components/Form/Form';
import Result from '../Components/Result/Result';
import Serie from '../Class/Series';

// Context
export const AppContext = React.createContext();


const App = () => {
  const versionSerie = 'v1'; /* v1 || v2 */
  const [repetitions, setRepetitions] = React.useState(0);
  const [valueSerie, setValueSerie] = React.useState('');
  const [classError, setClassError] = React.useState(false);

  // Obtención de datos para resultado
  const handleClick = React.useCallback(n => {
    if (n === 0) {
      return 'Captura un numero para iniciar la serie';
    } else {
      const serie = new Serie(n);
      return serie.serieNumber(versionSerie).join(', ');
    }
  }, []);

  return (
    <AppContext.Provider value={{ valueSerie, setValueSerie, classError, setClassError }}>
      <div className='App'>
        <h1>Ejercicio prueba técnica - Sngular</h1>
        <div className='content'>
          <div className='container'>
            <Form
              title='Ingresa la cantidad de repeticiones para la serie'
              inputPlaceholder='Cantidad n'
              errorAlert='Ingresa un numero'
              btnText='Calcular'
              onClick={setRepetitions}
              onChangeInput={setValueSerie}
              valueInput={valueSerie}
            />
          </div>
          <Result
            description='Serie:'
            dataResult={handleClick(repetitions)}
          />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;