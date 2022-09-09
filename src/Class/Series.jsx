import React from 'react';

class Serie extends React.Component {
  repetitions;

  constructor(n) {
    super();
    this.repetitions = n;
  }

  primeNumbers() {
    //Obtención de números primos de acuerdo a valor nf
    const maxNumber = this.repetitions * (this.repetitions * 10);
    const primes = [];

    const isPrime = new Array(maxNumber + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let number = 2; number < maxNumber; number++) {
      if (isPrime[number]) {
        primes.push(number);

        let multiploNumber = number + number;

        while (multiploNumber <= maxNumber) {
          isPrime[multiploNumber] = false;
          multiploNumber += number;
        }
      }
    }

    return primes.slice(0, this.repetitions + 2);
  }

  fibonacci() {
    const fibonacciSequence = [1];
    let counter = this.repetitions - 1;

    let currentValue = 1;
    let previousValue = 0;

    while (counter) {
      currentValue += previousValue;
      previousValue = currentValue - previousValue;

      fibonacciSequence.push(currentValue);

      counter--;
    }

    return fibonacciSequence;
  }

  triangularNumber() {
    const triangularNumbers = [];
    for (let r = 1; r <= this.repetitions; r++) {
      let number = r === 1 ? 1 : (r * (r + 1)) / 2;
      triangularNumbers.push(number);
    }

    return triangularNumbers;
  }

  serieNumber(version = "v1") {
    const serie = [];
    const primes = this.primeNumbers();
    const fibonacci = this.fibonacci();
    const triangularNumbers = this.triangularNumber();

    for (let r = 0; r < this.repetitions; r++) {
      let number = 0;

      if (version === "v1") {
        number =
          (2 * (primes[r] + 2) * 3 * (triangularNumbers[r] - 2)) /
          (7 * fibonacci[r]);
      } else if (version === "v2") {

        let calNumberPrime = primes[r + 2];
        let calNumberTriangular =
          triangularNumbers[r - 2] === undefined ? 1 : triangularNumbers[r - 2];

        number =
          (2 * calNumberPrime * 3 * calNumberTriangular) / (7 * fibonacci[r]);
      } else {
        return "version does not exist";
      }
      
      let dataNumber = Math.trunc(number) === number ? number : parseFloat(number.toFixed(2));
      serie.push(dataNumber);
    }

    return serie;
  }
}

export default Serie;
