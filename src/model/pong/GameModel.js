

class GameModel {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.player1Score = 0;
        this.player2Score = 0;
    }

    getEntities() {
        return [this.player1, this.player2, this.ball];
    }

    addPlayer1(player) {
        this.player1 = player;
        this.player1.setPosition({x: this.width/10, y: this.height/2 - player.height/2})
    }

    addPlayer2(player) {
        this.player2 = player;
        this.player2.setPosition({x: this.width - this.width/10, y: this.height/2 - player.height/2});
    }

    movePlayer1(dx, dy) {
        this.player1.moveX(dx);
        this.player1.moveY(dy);
    }

    movePlayer2(dx, dy) {
        this.player2.moveX(dx);
        this.player2.moveY(dy);
    }

    addBall(ball) {
        this.ball = ball;
        this.respawnBall();
    }

    moveBall(dx, dy) {
        this.ball.moveX(dx);
        this.ball.moveY(dy);
        if(this.ball.x < 0) {
            console.log('p1score');
            this.player1Goal();
            return;
        }
        if(this.ball.x > this.width) {
            console.log('p2score');
            this.player2Goal();
            return;
        }
        if(this.ball.y < 0 || this.ball.y > this.height) {
            console.log('wall');
            this.collideBallWithWall();
            return;
        }

        if(this.isCollidingWithPlayer()) {
            console.log('playerColission');
            this.collideBallWithPlayer();
            return
        }

    }

    collideBallWithPlayer() {
        const {x, y} = this.ball.velocityVector;
        this.ball.setVelocityVector({x: -x, y: y});
    }

    isCollidingWithPlayer() {
        const ballY = this.ball.y;
        const ballX = this.ball.x;
        const collidingWithPlayer = (p, offsetX=0) =>
            ballX+offsetX < (p.x + p.width)
            && ballX+offsetX > p.x
            && ballY < (p.y + p.height)
            && ballY > p.y;

        return collidingWithPlayer(this.player1) || collidingWithPlayer(this.player2, this.player2.width);
    }

    player2Goal() {
        this.player2Score++;
        this.respawnBall();
    }

    player1Goal() {
        this.player1Score++;
        this.respawnBall();
    }

    respawnBall() {
        this.ball.setPosition({
            x: this.width/2,
            y: this.height/2
        });
        this.ball.setVelocityVector({x: 60, y: 20});
    }
}

export default GameModel;