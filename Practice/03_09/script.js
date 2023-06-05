/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  lidOpen: false,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newPocketNUmber: function (totalPockets) {
    this.pocketNum = totalPockets;
  },
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },
};

console.log("Current pockets:", backpack.pocketNum);
console.log("Current volume:", backpack.volume);

backpack.newPocketNUmber(18);
backpack.changeVolume(50);

console.log("New pocket number:", backpack.pocketNum);
console.log("New volume:", backpack.volume);
