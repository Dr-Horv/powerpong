import React, {PropTypes} from 'react';

import ReactDOM from 'react-dom';

import Ball from '../../model/pong/Ball';
import Player from '../../model/pong/Player';
import GameModel from '../../model/pong/GameModel';

import Animator from 'react-mainloop';

const TIMESTEP = 1000 / 60,
    MAX_FPS = 60;

const animate = new Animator(TIMESTEP, MAX_FPS);

const canvas = document.createElement('canvas');
canvas.id     = "canvas";
canvas.width  = 578;
canvas.height = 200;
canvas.style.border   = "1px solid";

const paintCanvas = (canvas, model) => {
    const context = canvas.getContext('2d');
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle ='white';
    context.fill();
    context.stroke();


    for (let e of model.getEntities()) {
        context.beginPath();
        context.rect(e.x, e.y, e.width, e.height);
        context.fillStyle = e.color;
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = e.stroke;
        context.stroke();
    }

    context.font = "16pt serif";
    context.fillText(model.player1Score, model.player1.x, model.height/8);
    context.fillText(model.player2Score, model.player2.x, model.height/8);



};

const Pong = React.createClass({

    componentDidMount: function () {
        console.log(this.props);
        ReactDOM.findDOMNode(this).appendChild(canvas);
    },

    render() {
        return <div>
            <h1>Game</h1>
        </div>
    }


});


const getUpdateFor = (componentRef) => {



    const events = [];
    const model = new GameModel(canvas.width, canvas.height);
    model.addBall(new Ball('red', 'black', 10, 10));
    model.addPlayer1(new Player('One', 'green', 'black', 10, 40));
    model.addPlayer2(new Player('Two', 'violet', 'black', 10, 40));
    model.respawnBall();
    console.log(model.ball);

    const update = (delta) => {

        const ballVelocity = model.ball.velocityVector;

        const ballDX = ballVelocity.x * (delta/1000);
        const ballDY = ballVelocity.y * (delta/1000);

        model.moveBall(ballDX, ballDY);

        paintCanvas(canvas, model);

        return {
            props: {
                model,
                canvas
            }
        }
    };
    return update;
};

const AnimatedPong = animate(Pong, getUpdateFor(Pong));



export default AnimatedPong;