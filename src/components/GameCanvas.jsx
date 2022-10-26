import React, { useRef, useEffect } from 'react'

const GameCanvas = props => {

    const canvasRef = useRef(null)

    const draw = ctx => {
        ctx.fillStyle = '#000000'

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

        ctx.fillText('🥷', 45, 35);
        ctx.fillText('🥷', 65, 55);
        ctx.fillText('🥷', 85, 75);

        ctx.fillText(`Canvas Height: ${ctx.canvas.height}`, 10, 10)
        ctx.fillText(`Canvas Width: ${ctx.canvas.width}`, 20, 20)
    }

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        //Our draw come here
        draw(context)
    }, [draw])

    return <canvas height='600px' width='600px' ref={canvasRef} {...props} />
}

export default GameCanvas;