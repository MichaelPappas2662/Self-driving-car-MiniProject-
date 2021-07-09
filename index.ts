import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
    isRunning?: boolean;
    respond: (events: Events) => void;
}

interface AutonomousCarProps {
    isRunning?: boolean;
}

interface Events {
    [event:string]:boolean;
}



class Car implements AutonomousCar{
    isRunning;

    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning;
    }

    respond(events: Events) {
        if(!this.isRunning){
            return console.log('The car is off');
        }
    }
}

const autonomousCar = new Car({isRunning: true});

autonomousCar.respond(getObstacleEvents());