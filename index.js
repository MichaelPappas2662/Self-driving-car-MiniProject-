"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute(`Turn ${direction}`);
    }
}
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        if (!this.isRunning) {
            return console.log('The car is off');
        }
        Object.keys(events).forEach(eventKey => {
            if (!events[eventKey]) {
                return;
            }
            if (eventKey === 'obstacleLeft') {
                this.steeringControl.turn('right');
            }
            if (eventKey === 'obstacleRight') {
                this.steeringControl.turn('left');
            }
        });
    }
}
const steering = new SteeringControl();
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond(computer_vision_1.getObstacleEvents());
