/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
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

const bookOne = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  "Hardback",
  true,
  "4.27"
);

console.log("The everydayPack object:", everydayPack);
console.log("Date acquired:", everydayPack.dateAcquired);
console.log("Days since acquired:", everydayPack.backpackAge()); // if you want to call something as a method, add the parenthesis
console.log("First book:", bookOne);
