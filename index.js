var arr = [1, 2, 3, 4, 5, 6, 7];
var str = ['hey', 'hello', 'welcome'];

// IIFE
(function () {
    var oddValues = arr.filter((val) => val%2 !== 0);
    console.log('odd values ', oddValues);
})();

(function () {
    var sum = arr.reduce((result, val) => result + val, 0);
    console.log('sum ', sum);
}) ();

(function () {
    var result = str.map((val) => val.charAt(0).toUpperCase() + val.slice(1));
    console.log('result ', result);
}) ();

//Arrow functions
const oddNumbers = () => {
    var oddValues = arr.filter((val) => val%2 !== 0);
    console.log('odd values using arrow functions ', oddValues);
};

const sumOfElemeents = () => {
    var sum = arr.reduce((result, val) => result + val, 0);
    console.log('sum arrow functions ', sum);
};

const title = () => {
    var result = str.map((val) => val.charAt(0).toUpperCase() + val.slice(1));
    console.log('result arrow functions ', result);
};

oddNumbers();
sumOfElemeents();
title();
