import React, {PropTypes} from 'react';

import Ball from '../../model/pong/Ball';
import Player from '../../model/pong/Player';
import GameModel from '../../model/pong/GameModel';

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

};

const Pong = React.createClass({

    componentDidMount: function () {
        const canvas = this.refs.canvas;
        const model = new GameModel(canvas.width, canvas.height);
        model.addBall(new Ball('red', 'black', 10, 10));
        model.addPlayer1(new Player('One', 'green', 'black', 10, 40));
        model.addPlayer2(new Player('Two', 'violet', 'black', 10, 40));

        this.setState({
            model: model
        }, () => paintCanvas(canvas, model));

    },

    render() {
        return <div>
            <canvas ref="canvas" width="578" height="200"></canvas>
        </div>
    }


});

export default Pong