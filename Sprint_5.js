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

// ___________________________________________________________________________________

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

function color(number) {
  if (typeof number === "number" || number >= 1 || number <= 30) {
  } else if (typeof number === "number" || number < 1) {
    console.log("Podałeś za małą liczbę, liczba nie może być mniejsza niż 1 ");
  } else if (typeof number === "number" || number > 30) {
    console.log("Podałeś za dużą liczbę, liczba nie może być większa niż 30 ");
  }
  if (typeof number !== "number") {
    number = 5;
  }

  return {};
}

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
