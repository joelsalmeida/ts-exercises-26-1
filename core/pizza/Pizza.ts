/* eslint-disable @typescript-eslint/lines-between-class-members */

enum Flavor {
  pepperoni = 'Pepperoni',
  chicken = 'Chicken',
  cheese = 'Cheese',
}

enum Slices {
  four = 'Four',
  six = 'Six',
  nine = 'Nine',
}

class Pizza {
  flavor: Flavor;
  slices: Slices;

  constructor(flavor: Flavor, slices: Slices) {
    this.flavor = flavor;
    this.slices = slices;
  }
}

const pepperoniPizza = new Pizza(Flavor.pepperoni, Slices.six);
console.log(pepperoniPizza);
