import Serie from './Series';

describe('Valida los primeros 10 numero de la secuencias', () => {
  it('Valida los números de la secuencia v1', () => {
    const know = [-3.4285714285714284, 4.285714285714286, 12, 20.571428571428573, 28.97142857142857, 30.535714285714285, 32.57142857142857, 29.142857142857142, 27.100840336134453, 25.605194805194806];

    for (let i = 0; i < know.length; i++) {
      let newKnow = know.slice(0, i + 1);
      expect(new Serie(i + 1).serieNumber()).toEqual(newKnow);
    }
  });

  it('Valida los números de la secuencia v2', () => {
    const know = [4.285714285714286, 6, 4.714285714285714, 11.142857142857142, 17.485714285714284, 20.357142857142858, 22.747252747252748, 24.857142857142858, 21.88235294117647, 20.758441558441557];

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