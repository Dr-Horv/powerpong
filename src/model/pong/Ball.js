
import Entity from './Entity';

class Ball extends Entity {
    constructor(color, stroke, width, height) {
        super(color, stroke, width, height);
        this.velocityVector = {x: 10, y: 0};
    }

    setVelocityVector(vector) {
        this.velocityVector = vector;
    }
}

export default Ball;