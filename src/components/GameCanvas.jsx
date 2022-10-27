import React, { useRef, useEffect, useState, useCallback } from 'react'
import { gameEntityCanvasItem } from './GameEntityComponent'

const GameCanvas = ({ canvasSize, movementStep, player_x, player_y, entities }) => {
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

        //experimentalmoji
        //TODO: replace ninja with player's entity emoji
        //make func to draw with f(item, x_coord, y_coord)
        entities.forEach((item) => {
            ctx.fillText(item, player_x, player_y);
        })
        // ctx.fillText('🥷', player_x, player_y);


        ctx.fillText(`Canvas Height: ${ctx.canvas.height}`, 10, 10)
        ctx.fillText(`Canvas Width: ${ctx.canvas.width}`, movementStep, movementStep)
    }

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        //Our draw come here
        draw(context)
    }, [draw])


    return <canvas height={canvasSize + 'px'} width={canvasSize + 'px'} ref={canvasRef} />
}

export default GameCanvas;