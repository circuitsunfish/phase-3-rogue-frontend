import React, { useRef, useEffect, useState, useCallback } from 'react'

const GameCanvas = ({ player_x, player_y }) => {
    console.log({ player_x })
    const canvasRef = useRef(null)

    const draw = ctx => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        //experimental grid

        //verticals
        for (let i = 0; i < ctx.canvas.width / 20; i++) {
            ctx.beginPath();
            ctx.strokeStyle = 'blue';
            ctx.moveTo(i * 20, 0); //iterator * 10 for x, 0 for y hopefully
            ctx.lineTo(i * 20, ctx.canvas.height);
            ctx.stroke();
        }
        //horizontals
        for (let i = 0; i < ctx.canvas.height / 20; i++) {
            ctx.beginPath();
            ctx.strokeStyle = 'green';
            ctx.moveTo(0, i * 20); //iterator * 10 for y, 0 for x hopefully
            ctx.lineTo(ctx.canvas.width, i * 20);
            ctx.stroke();
        }
        // end grid

        //experimentalmoji
        //TODO: replace ninja with player's entity emoji
        ctx.fillText('🥷', player_x, player_y);


        ctx.fillText(`Canvas Height: ${ctx.canvas.height}`, 10, 10)
        ctx.fillText(`Canvas Width: ${ctx.canvas.width}`, 20, 20)
    }

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        //Our draw come here
        draw(context)
    }, [draw])


    return <canvas height='600px' width='600px' ref={canvasRef} />
}

export default GameCanvas;