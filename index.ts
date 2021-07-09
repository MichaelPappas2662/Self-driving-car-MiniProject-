import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
    isRunning?: boolean;
}

interface AutonomousCarProps {
    isRunning?: boolean;
}
class Car implements AutonomousCar{
    isRunning;

    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning;
    }

}

const autonomousCar = new Car({isRunning: true});

console.log(autonomousCar.isRunning);