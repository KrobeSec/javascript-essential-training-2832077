/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

// Book param order: name, author, cover, isFiction, rating

const bookOne = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  "Hardback",
  true,
  "4.27"
);

const bookTwo = new Book(
  "The Fault in Our Stars",
  "John Green",
  "Softback",
  true,
  "4.15"
);
const bookThree = new Book(
  "The Alchemist",
  "Paulo Coelho",
  "Softback",
  true,
  "3.90"
);
const bookFour = new Book(
  "The Book Thief",
  "Markus Zusak",
  "Hardcover",
  true,
  "4.39"
);
const bookFive = new Book(
  "The Summer of 1867",
  "Chris Wimmer",
  "Hardcover",
  false,
  "3.94"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
console.log("First Book:", bookOne);
console.log("Second Book:", bookTwo);
console.log("Third Book:", bookThree);
console.log("Fourth Book:", bookFour);
console.log("Fiifth Book:", bookFive);
bookOne.changeGenre(false);
console.log("Is", bookOne.name, "fiction?:", bookOne.isFiction);
bookOne.changeGenre(true);
console.log("Is", bookOne.name, "fiction?:", bookOne.isFiction);
