"use strict";

const arr = [2, 3, 4];
const [x, y, z] = arr; //destructuring , similiar to x=arr[0],y=arr[1],z=arr[2];
console.log(x, y, z);

//assignments
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

let [main, , , secondary] = restaurant.categories; //if skipped with blanks ,it will fetch the respective element from the array
[main, secondary] = [secondary, main]; //swapping
console.log(main, secondary);

//nested Destructuring

const nested = [3, 4, [5, 6]];
let [i, , [j, k]] = nested;
console.log(i, j, k);

//default values

const nest = [3, 4];
const [a = 1, b = 1, c = 1] = nested;
console.log(a, b, c);
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//challenge 1

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.

const [players1, players2] = game.players;
console.log(players1, players2);

//2.

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.

const allPlayers = [...players1, ...players2];

console.log(allPlayers);

//4.

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5.

const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

//6.

const printGoals = function (...players) {
  console.log(...players);
  console.log(`${players.length} goals were scored`);
};

printGoals("Pavard", "Gnarby", "Muller", "Davies");

//7.

team1 < team2 && console.log("Team1 more likely to win");
team2 < team1 && console.log("Team2 more likely to win");
