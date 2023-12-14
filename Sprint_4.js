//Podstawy funkcji w JavaScript.

// Wyświetl wyniki w konsoli

//PODSTAWY FUNKCJI:

// 1. Napisz funkcję dodającą dwie liczby

function sum(a, b) {
  return a + b;
}

// 2. Napisz funkcję zwracającą długość tablicy
function array(argu) {
  return argu.length;
}

// 3. Napisz funkcję sprawdzającą, czy liczba jest parzysta
function evenNum(params) {
  if (params % 2 === 0) {
    return console.log("Liczba jest parzysta");
  } else {
    return console.log("liczba nie jest parzysta");
  }
}

// 4. Napisz funkcję obliczającą pole kwadratu
function square(a) {
  return Math.pow(a);
}

// 5. Napisz funkcję zwracającą odwrotność liczby
function inv(params) {
  let inve = 1 / params;
  return inve;
}

// 6. Napisz funkcję konwertującą stopnie Celsjusza na Fahrenheita
function temp(a) {
  let temperature = a * 1.8 + 32;
  return temperature;
}

// 7. Napisz funkcję zwracającą pierwszy element tablicy
function firstElem(params) {
  let element = params[0];
  return element;
}

// 8. Napisz funkcję łączącą dwa ciągi znaków, utwórz warunek który sprawdzi czy argumenty są typu string
function stringAdd(params) {
  let str = params.join("");
  if (str !== " ") {
    params.toString(params);
  }
  return str;
}

// 9. Napisz funkcję zwracającą typ zmiennej
function type(params) {
  const type2 = typeof params;
  return type2;
}

// 10. Napisz funkcję zwracającą absolutną wartość liczby
function absolut(params) {
  let abs = Math.abs(params);
  return abs;
}

//PODSTAWY PĘTLI:

// 1. Napisz funkcję, która będzie miała pętlę for, która wyświetli liczby od 1 do 10
function loop() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// 2. Napisz funkcję, która będzie używać pętli while do wyświetlenia liczb parzystych mniejszych od 20
function loopWhile(params) {
  while (params < 20) {
    if (params % 2 === 0) {
      console.log(params);
    }
    params++;
  }
}

// 3. Napisz funkcję, która użyje pętli do while do wyświetlenia liczb od 10 do 1
function doWhile() {
  let params = 10;
  do {
    console.log(params);
    params--;
  } while (params > 0);
}

// 4. Napisz funkcję, która użyje pętli while i break do przerwania pętli po osiągnięciu liczby 5
function four(params) {
  while (params < 10) {
    console.log(params);
    params++;
    if (params == 6) {
      break;
    }
  }
}

// 5. Napisz funkcję, która użyje pętli for in do iteracji po właściwościach obiektu
function exe5(params) {
  for (let key in params) {
    console.log(key + ":", params[key]);
  }
}

// 6. Napisz funkcję, która użyje pętli for of do iteracji po elementach tablicy
function exe6(params) {
  for (const i of params) {
    console.log(i);
  }
}

// 7. Napisz funkcję, która użyje pętli for do obliczania sumy elementów tablicy
function exe7(params) {
  let sum = 0;
  for (let i = 0; i < params.length; i++) {
    sum += params[i];
  }
  return sum;
}

// 8. Napisz funkcję, która użyje pętli while do odwrócenia ciągu znaków
function exe8(string) {
  let str = "";
  let i = string.length - 1;
  while (i >= 0) {
    str += string[i];
    i--;
  }
  return str;
}

// 9. Napisz funkcję, która użyje pętli for of do znalezienia największej liczby w tablicy
function exe9(arr) {
  let theBiggest = 0;
  for (const num of arr) {
    if (num > theBiggest) {
      theBiggest = num;
    }
  }
  return theBiggest;
}

// 10. Napisz funkcję, która użyje pętli for in do wyświetlenia par klucz-wartość tablicy obiektów
function exe10(params) {
  for (const obj of params) {
    for (const key in obj) {
      console.log(key, obj[key]);
    }
  }
}

//PODSTAWOWE METODY NA TABLICACH:

// 1. Napisz funkcję, która doda element na koniec tablicy używając metody push
function ex11(arr, a) {
  arr.push(a);
  return arr;
}

// 2. Napisz funkcję, która usunie ostatni element tablicy używając metody pop
function ex12(arr) {
  arr.pop();
  return arr;
}

// 3. Napisz funkcję, która usunie pierwszy element tablicy używając metody shift
function ex13(arr) {
  arr.shift();
  return arr;
}

// 4. Napisz funkcję, która doda element na początek tablicy używając metody unshift
function ex14(arr, num) {
  arr.unshift(num);
  return arr;
}

// 5. Napisz funkcję, która użyje metody push, aby dodać dwa elementy na koniec tablicy
function ex15(arr, a, b) {
  arr.push(a, b);
  return arr;
}

// 6. Napisz funkcję, która dwukrotnie użyje metody pop, aby usunąć dwa ostatnie elementy tablicy
function ex16(arr) {
  arr.pop();
  arr.pop();
  return arr;
}

// 7. Napisz funkcję, która dwukrotnie użyje metody shift, aby usunąć dwa pierwsze elementy tablicy
function ex17(arr) {
  arr.shift();
  arr.shift();
  return arr;
}

// 8. Napisz funkcję, która dwukrotnie użyje metody unshift, aby dodać dwa elementy na początek tablicy
function ex18(arr, a) {
  arr.unshift(a);
  arr.unshift(a);
  return arr;
}
// 9. Napisz funkcję, która użyje metody push do dodania elementu, a następnie metody pop do usunięcia elementu z tablicy
function ex19(arr, a) {
  arr.push(a);
  arr.pop();
  return arr;
}

// 10. Napisz funkcję, która użyje metody unshift do dodania elementu, a następnie metody shift do usunięcia elementu z tablicy
function ex20(arr, a) {
  arr.unshift(a);
  arr.shift();
  return arr;
}

// 11. Napisz funkcję, która przy użyciu metody map zwiększy każdy element tablicy o 1
function ex21(arr) {
  const arr2 = arr.map((a) => a + 1);
  return arr2;
}

// 12. Napisz funkcję, która przy użyciu metody filter zwróci tylko parzyste liczby z tablicy
function ex22(arr) {
  const arr2 = arr.filter((a) => a % 2 === 0);
  return arr2;
}

// 13. Napisz funkcję, która przy użyciu metody map podwoi każdy element tablicy
function ex23(arr) {
  const arr2 = arr.map((a) => a * 2);
  return arr2;
}
// 14. Napisz funkcję, która przy użyciu metody filter zwróci elementy tablicy większe niż 10
function ex24(arr) {
  const arr2 = arr.filter((a) => a > 10);
  return arr2;
}

// 15. Napisz funkcję, która przy użyciu metody split podzieli podany ciąg znaków na słowa
function ex25(arr) {
  const arr2 = arr.split(" ");
  return arr2;
}

// 16. Napisz funkcję, która przy użyciu metody map zamieni każdy element tablicy na jego długość
function ex26(arr) {
  const arr2 = arr.map((a) => (a = a.length));
  return arr2;
}

// 17. Napisz funkcję, która przy użyciu metody filter zwróci tylko nieparzyste liczby z tablicy
function ex27(arr) {
  const arr2 = arr.filter((a) => a % 2 !== 0);
  return arr2;
}

// 18. Napisz funkcję, która przy użyciu metody map zwróci kwadraty każdego elementu tablicy
function ex28(arr) {
  const arr2 = arr.map((a) => a * a);
  return arr2;
}

// 19. Napisz funkcję, która przy użyciu metody filter zwróci tylko te słowa z ciągu znaków, które mają więcej niż 3 litery
function ex28(arr) {
  const arr2 = arr.filter((a) => a.length > 3);
  return arr2;
}

// 20. Napisz funkcję, która przy użyciu metody map zwróci każdy element tablicy zapisany wielkimi literami
function ex30(arr) {
  const arr2 = arr.map((a) => a.toUpperCase());
  return arr2;
}
