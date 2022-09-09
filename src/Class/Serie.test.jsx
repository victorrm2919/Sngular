import Serie from './Series';

describe('Valida los primeros 10 numero de la secuencias', () => {
  it('Valida los números de la secuencia v1', () => {
    const know = [ -3.43, 4.29, 12, 20.57, 28.97, 30.54, 32.57, 29.14, 27.1, 25.61 ]

    for (let i = 0; i < know.length; i++) {
      let newKnow = know.slice(0, i + 1);
      expect(new Serie(i + 1).serieNumber()).toEqual(newKnow);
    }
  });

  it('Valida los números de la secuencia v2', () => {
    const know = [ 4.29, 6, 4.71, 11.14, 17.49, 20.36, 22.75, 24.86, 21.88, 20.76 ]

    for (let i = 0; i < know.length; i++) {
      let newKnow = know.slice(0, i + 1);
      expect(new Serie(i + 1).serieNumber('v2')).toEqual(newKnow);
    }
  });


  it('Valida los números de la secuencia Fibonacci', () => {
    const know = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    for (let i = 0; i < know.length; i++) {
      let newKnow = know.slice(0, i + 1);
      expect(new Serie(i + 1).fibonacci()).toEqual(newKnow);
    }
  });


  it('Valida los números de la secuencia Triangular', () => {
    const know = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
    for (let i = 0; i < know.length; i++) {
      let newKnow = know.slice(0, i + 1);
      expect(new Serie(i + 1).triangularNumber()).toEqual(newKnow);
    }
  });

  it('Valida los números de la secuencia Primos', () => {
    const know = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
    for (let i = 0; i < know.length-3; i++) {
      let newKnow = know.slice(0, i+3);
      expect(new Serie(i + 1).primeNumbers()).toEqual(newKnow);
    }
  });

});