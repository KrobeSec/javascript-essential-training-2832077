/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class HockeyStick {
  constructor(
    // defines parameters
    brand,
    model,
    flex,
    curve,
    taped
  ) {
    // define properties
    this.brand = brand;
    this.model = model;
    this.flex = flex;
    this.curve = curve;
    this.taped = taped;
  }
  // add methods like normal functions
  toggleTaped(isTaped) {
    this.taped = isTaped;
  }
}

export default HockeyStick;
