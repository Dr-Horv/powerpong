
import Entity from './Entity';

class Player extends Entity {
    constructor(name, color, stroke, width, height) {
        super(color, stroke, width, height);
        this.name = name;
    }
}

export default Player;