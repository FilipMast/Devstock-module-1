// // ZAD 1 //

// Dane wejściowe //
const people = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Halina",
    lastName: "Malina",
  },
];

const shortNick = (short) =>
  short.length < 2 ? short.slice(0, short.length - 1) : short;

const reversedLastLetters = (params) => {
  const lastLetters = params.slice(-3);
  const reverseLetters = lastLetters.split("").reverse().join("");
  return reverseLetters;
};

const reversedFirstLetters = (params) => {
  const firstLetters = params.slice(0, 3);
  const reverseLetters = firstLetters.split("").reverse().join("");
  return reverseLetters;
};

const people2 = people.map((person) => {
  const lastLetters = reversedLastLetters(person.firstName);
  const lastLetters2 = reversedFirstLetters(person.lastName);
  const nick = lastLetters + lastLetters2;
  const smallLetters = nick.toLowerCase();
  const firstBigLetter =
    smallLetters.charAt(0).toUpperCase() + smallLetters.slice(1);
  const finalText = shortNick(firstBigLetter);
  return {
    ...person,
    nickname: finalText,
  };
});

// // ZAD 2 //

const age = (person) => {
  const numName = person.firstName.length + person.lastName.length;
  const sumName =
    numName % 2 === 0
      ? Object.keys(person).reduce(
          (sum, key) => sum + key.length - person.firstName.length,
          0
        )
      : "nieparzyta";
  return sumName;
};

const people3 = people2.map((person) => {
  const calculateAge = age(person);
  return {
    ...person,
    age: calculateAge,
  };
});

// // Zad 3 //

// Dane Wejściowe
const people4 = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
    nickname: "Ajcwok",
    age: 19,
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
    nickname: "Najwon",
    age: 8,
  },
  {
    firstName: "Waldemar",
    lastName: "Malina",
    nickname: "Ramlam",
    age: 17,
  },
];

function introduceYourself() {
  console.log(
    `Cześć, jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}].`
  );
}

const introduce = people4.forEach((person) => {
  introduceYourself.call(person);
});

// ZAD 4.

//  // Dane wejściowe //

const people5 = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
    nickname: "Ajcwok",
    age: 19,
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
    nickname: "Najwon",
    age: 8,
  },
  {
    firstName: "Waldemar",
    lastName: "Malina",
    nickname: "Ramlam",
    age: 17,
  },
];

people5.forEach((person) => {
  person.introduceYourself = introduceYourself;
});
people5.forEach((person) => {
  person.introduceYourself();
});

//_______________________________________________________________________

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

function getColorByNumber(number) {
  if (typeof number === "number" && number < 1) {
    console.log("Podałeś za małą liczbę, liczba nie może być mniejsza niż 1 ");
    return;
  } else if (typeof number === "number" && number > 30) {
    console.log("Podałeś za dużą liczbę, liczba nie może być większa niż 30 ");
    return;
  } else if (typeof number !== "number") {
    return (number = 5);
  }

  const keyAndValue = people5.slice(0, 3).reduce((sum, person) => {
    for (const [key, value] of Object.entries(person)) {
      sum += key.length + String(value).length;
    }
    return sum;
  }, 0);

  const index = (keyAndValue - number) % colors.length;
  const selectedColor = colors[index];

  console.log(`Dla liczby ${number}, wybrany kolor to: ${selectedColor}`);
}

getColorByNumber(5);

// // ZAD 1 //

// Dane wejściowe //
// const people = [
//   {
//     firstName: "Alicja",
//     lastName: "Kowalska",
//   },
//   {
//     firstName: "Jan",
//     lastName: "Nowak",
//   }
//    {
//     firstName: "Halina",
//     lastName: "Malina",
//   }
// ];

// Napisz funkcję, która przetwarza każdą osobę w tablicy people w następujący sposób:
// a) Dla każdego imienia, weź ostatnie 3 litery, odwróć ich kolejność i zapisz do zmiennej.
// b) Dla każdego nazwiska, weź pierwsze 3 litery, zamień miejscami pierwszą i ostatnią literę, i dołącz do zmiennej utworzonej w punkcie a).
// c) Zmień wielkość liter w taki sposób, aby ostateczny pseudonim (nickname) zaczynał się wielką literą, a reszta liter była mała.
// d) Jeśli liczba znaków w imieniu lub nazwisku jest mniejsza niż 2, pseudonim będzie odpowiednio krótszy.

// // ZAD 2 //

// Dane wejściowe
// const people = [
//   {
//     firstName: "Alicja",
//     lastName: "Kowalska",
//     nickname: "Ajcwok"
//   },
//   {
//     firstName: "Jan",
//     lastName: "Nowak",
//     nickname:"Najwon",
//   },
//   {
//     firstName: "Halina",
//     lastName: "Malina",
//     nickname:"Anilam",
//   }
// ];

// Rozszerz funkcję z poprzedniego zadania:
// Dodaj pole age, które jest wyliczane na podstawie sumy liter w imieniu i nazwisku. Jeżeli ilość liter w imieniu i
// nazwisku jest parzysta to wiek będzie będzie wyliczany, na postawie długości kluczy znajdujących się w obiekcie pomniejszone o długość imienia.

// // Zad 3 //

// Dane Wejściowe
// const people = [
//   {
//     firstName: "Alicja",
//     lastName: "Kowalska",
//     nickname: "Ajcwok"
//     age:19
//   },
//   {
//     firstName: "Jan",
//     lastName: "Nowak",
//     nickname:"Najwon",
//     age:22
//   },
//   {
//     firstName: "Waldemar",
//     lastName: "Malina",
//     nickname:"Ramlam",
//     age:17
//   }
// ];

//     a) Do każdego obiektu dodaj funkcję introduceYourself, która za pomocą słówka this wyświetli w konsoli tekst powitalny.
//     Dla powyższego przykładu tekst powinien wyglądać w następujący sposób:
//     "Cześć jestem Alicja Kowalska, ale w szkole mówią na mnie [Ajcwok]."
//     b) za pomocą pętli forEach, wywołaj funkcję powitalną dla każdego elementu tablicy. W rezultacie na ekranie powinien
//     pojawić się tekst powitalny dla każdej osoby w tablicy

// ZAD 4.

//  // Dane wejściowe //
//  [{
//     firstName: "Alicja",
//     lastName: "Kowalska",
//     nickname: "Ajcwok",
//     age:19,
//     introduceYourself: // funkcja //
//     }
//     itd ... ]

// const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

// Napisz funkcję, która :
//     a) przyjmie parametr typu number z zakresu 1 - 30
//     b) funkcja ma przyjmować jeden parametr typu number z zakresu 1 - 30
//     c) jeżeli podany parametr jest poza zakresem, powinien wyświetlić się odpowiedni komunikat
//         - podałeś za małą liczbę, liczba nie może być mniejsza niż 1
//         - podałeś za dużą liczbę, liczba nie może być większa niż 30
//     d) w przypadku wywołania funkcji bez parametru, powinniśmy ustawić domyślną wartość na 5
//     e) funkcja powinna zsumować pary klucz + wartość trzech pierwszych pozycji w obiekcie (użyj do tego Object.entries)
//     odjąć od tej sumy liczbę wprowadzoną w parametrze, a następnie za pomocą działania modulo (%) względem długości tablicy kolorów
//     wyznaczyć index
//     f) za pomocą indexu funkcja powinna wyciągnąć odpowiedni kolor z tablicy i wyświetlić go w konsoli.
// ​
//     Dla powyższego przykładu i liczby 5 wprowadzonej w parametrze, powinniśmy uzyskać wynik:
//     (45 - 5) % 6 = 4
//     console.log(colors[4]) //pink
// ​
//     Hints
//     - jeżeli po odjęciu parametru funkcji od sumy liter uzyskacie wartośc ujemną, możecie użyć metody z biblioteki Math,
//     Math.abs(-20), która zamieni liczbę na wartość absolutną, czyli dodatnią
