/* eslint-disable @typescript-eslint/lines-between-class-members */

enum State {
  on = 'On',
  off = 'Off',
}

export default class Engine {
  state: State;
  speed: number;

  constructor() {
    this.state = State.off;
    this.speed = 0;
  }

  turnOn() {
    this.state = State.on;
  }

  turnOff() {
    this.state = State.off;
  }

  speedUp() {
    if (this.state === State.on) this.speed += 10;
  }

  speedDown() {
    if (this.state === State.on && this.speed >= 10) this.speed -= 10;
  }
}
