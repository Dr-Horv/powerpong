
class Entity {
    constructor(color, stroke, width, height) {
        this.color = color;
        this.stroke = stroke;
        this.width = width;
        this.height = height;
        this.x = -1;
        this.y = -1;
    }

    setBoundingBox(x1, y1, x2, y2) {
        this.boundingBox = {
            x1, y1,
            x2, y2
        }
    }

    setPosition({x, y}) {
        this.setPositionByCordinates(x, y);
    }

    setPositionByCordinates(x, y) {
        this.x = x;
        this.y = y;
    }

    moveX(dx) {
        if(this.boundingBox) {
            if(dx > 0) {
                this.x = Math.max((this.x + dx), this.boundingBox.x2);
            } else if (dx < 0){
                this.x = Math.min((this.x + dx), this.boundingBox.x1);
            }
        } else {
            this.x = this.x + dx;
        }
    }

    moveY(dy) {
        if(dy > 0) {
            this.y = Math.max((this.y + dy), this.boundingBox.y2);
        } else if (dy < 0){
            this.y = Math.min((this.y + dy), this.boundingBox.y1);
        }
        this.y = this.y + dy;
    }


}

export default Entity;