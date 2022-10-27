import React, { useRef, useEffect, useState, useCallback } from 'react'
import Card from "react-bootstrap/Card"
import { gameEntityCanvasItem } from './CanvasGameEntityComponent'


const GameCanvas = ({ bed_x, bed_y, canvasSize, clown_x, clown_y, entities, movementStep, player_x, player_y }) => {
    const canvasRef = useRef(null)

    const draw = ctx => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        //experimental grid

        //verticals
        for (let i = 0; i <= ctx.canvas.width / movementStep; i++) {
            ctx.beginPath();
            ctx.strokeStyle = 'blue';
            ctx.moveTo(i * movementStep, 0); //draw the grid width to allow one step
            ctx.lineTo(i * movementStep, ctx.canvas.height);
            ctx.stroke();
        }

        //horizontals
        for (let i = 0; i <= ctx.canvas.height / movementStep; i++) {
            ctx.beginPath();
            ctx.strokeStyle = 'green';
            ctx.moveTo(0, i * movementStep); //draw the grid height to allow one step
            ctx.lineTo(ctx.canvas.width, i * movementStep);
            ctx.stroke();
        }
        // end grid


        //make func to draw with f(item, x_coord, y_coord)
        entities.forEach((item) => {
            let pos_x = 0;
            let pos_y = 0;
            switch (item) {
                case "🛌":
                    pos_x = bed_x;
                    pos_y = bed_y;
                    break;
                case "🤡":
                    pos_x = clown_x;
                    pos_y = clown_y;
                    break;
                case "😎":
                    pos_x = player_x;
                    pos_y = player_y;
                    break;
                default:
                    console.log("What do you think you're doing??");
            }
            ctx.fillText(item, pos_x, pos_y);
        })

        ctx.fillText(`Canvas Height: ${ctx.canvas.height}`, 10, 10)
        ctx.fillText(`Canvas Width: ${ctx.canvas.width}`, movementStep, movementStep)
    }

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        //Our draw come here
        draw(context)
    }, [draw])


    return (
        <Card id="gameCanvasCard" style={{ width: '100%', margin: '1rem' }}>
            <Card.Body>
                <canvas height={canvasSize + 'px'} width={canvasSize + 'px'} ref={canvasRef} className="card-img" />
            </Card.Body>
        </Card>
    )
}

export default GameCanvas;