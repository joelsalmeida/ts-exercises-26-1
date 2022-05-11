/* eslint-disable @typescript-eslint/lines-between-class-members */

import Engine from './Engine';

enum Colors {
  black = 'Black',
  white = 'White',
  red = 'Red',
  gray = 'Gray',
  blue = 'Blue',
}

enum Doors {
  two = 'Two',
  four = 'Four',
}

class Car extends Engine {
  brand: string;
  color: Colors;
  doors: Doors;

  constructor(brand: string, color: Colors, doors: Doors) {
    super();

    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }
}

const gol = new Car('Volkswagen', Colors.red, Doors.two);
console.log(gol);

gol.turnOn();
console.log(gol);

gol.speedUp();
console.log(gol);
