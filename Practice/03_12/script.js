/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import HockeyStick from "./HockeyStick.js";
import HockeyBag from "./HockeyBag.js";
import Backpack from "./Backpack.js";
import HockeyProGear from "./HockeyProGear.js";
import HockeyHelmet from "./HockeyHelmet.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const myHockeyStick = new HockeyStick("Bauer", "Nexus Sync", 87, "P92", true);

const myHockeyHelmet = new HockeyHelmet("Bauer", "Reakt 150", "White", true);

const myHockeyBag = new HockeyBag(
  "Conway & Banks",
  "XL",
  "Mighty Ducks Green",
  3
);

const myProtectiveGear = new HockeyProGear(
  "Shin Pads",
  "Bauer",
  "Hyperlite",
  "15 inch"
);

console.log("My everyday bag:", everydayPack);
console.log("My hockey stick spec:", myHockeyStick);
console.log("My awesome hockey bag:", myHockeyBag);
console.log("My protective gear", myProtectiveGear);
console.log("Is stick currently taped? ", myHockeyStick.taped);
console.log("My helmet spec:", myHockeyHelmet);
console.log("Does helmet currently have visor? ", myHockeyHelmet.visor);
myHockeyStick.toggleTaped(false);
console.log("Is stick NOW taped? ", myHockeyStick.taped);
myHockeyHelmet.toggleVisor(false);
console.log("Does helmet now have visor?", myHockeyHelmet.visor);
