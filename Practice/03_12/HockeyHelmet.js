class HockeyHelmet {
  constructor(brand, model, color, visor) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.visor = visor;
  }

  toggleVisor(hasVisor) {
    this.visor = hasVisor;
  }
}

export default HockeyHelmet;
