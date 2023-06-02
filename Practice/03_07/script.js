/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const hockeyStick = {
  brand: "Bauer",
  flex: 87,
  curve: "P92",
  kick: "Mid-kick",
  isTaped: true,
  toggleTaped: function (tapeStatus) {
    this.isTaped = tapeStatus;
  },
};

const hockeyBag = {
  brand: "Conway & Banks",
  size: "Adult",
  color: "Mighty Duck Green",
  pockets: 2,
  accessoryBag: {
    brand: "Conway & Banks",
    color: "Black",
    clearTape: true,
    tapeScissors: true,
    toggleClear: function (hasClear) {
      this.clearTape = hasClear;
    },
    toggleScissors: function (hasScissors) {
      this.tapeScissors = hasScissors;
    },
  },
};

console.log(hockeyStick);
console.log(hockeyBag);
