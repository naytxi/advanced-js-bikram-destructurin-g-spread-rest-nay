//RESUELVE LOS EJERCICIOS AQUÍ
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const ana = empleados[1];

const emailLuis = empleados[0].email;

let a = 5;
let b = 3;

[a, b] = [b, a];

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
  
  const maximaHoy = HIGH_TEMPERATURES.today;
  const maximaManana = HIGH_TEMPERATURES.tomorrow;

  function sumEveryOther(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};
    /*let total = numbers.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    return total;*/

function addOnlyNums(...args) {
    return args.reduce(function(sum, current) {
        if (typeof current === 'number') {
            return sum + current;
        }
        return sum;
    }, 0);
};

function countTheArgs(...args) {
    return args.length;
}

function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
};

/*function onlyUniques(...args){
    return [...new Set(args)];
};*/

function onlyUniques(...args) {
    let result = [];
  
    for (let i = 0; i < args.length; i++) {
      if (!result.includes(args[i])) {
        result.push(args[i]);
      }
    }
  
    return result;
  }

  function combineAllArrays(...args) {
    let result = [];
  
    for (let i = 0; i < args.length; i++) {
      let currentArray = args[i];
      for (let j = 0; j < currentArray.length; j++) {
        result.push(currentArray[j]);
      }
    }
  
    return result;
  };

  function sumAndSquare(...args) {
    let squareSum = 0;
  
    for (let i = 0; i < args.length; i++) {
      squareSum += args[i] ** 2; 
    }
  
    return squareSum;
  }