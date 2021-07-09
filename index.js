"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
    }
}
const autonomousCar = new Car({ isRunning: true });
console.log(autonomousCar.isRunning);
