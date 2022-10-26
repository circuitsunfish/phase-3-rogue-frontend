import React, { useRef, useEffect, useState, useCallback } from 'react'

const GameCanvas = () => {
    const [player_x, setPlayer_x] = useState(85);
    const [player_y, setPlayer_y] = useState(75);

    console.log("rendering game canvas");

    const handleKeyPress = useCallback((event) => {
        console.log(`Key pressed: ${event.key}`);
        handleKey(event);
        console.log({ player_x, player_y });
    }, []);
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

        ctx.fillText('🥷', player_x, player_y);


        ctx.fillText(`Canvas Height: ${ctx.canvas.height}`, 10, 10)
        ctx.fillText(`Canvas Width: ${ctx.canvas.width}`, 20, 20)
    }

    // controls start

    const handleKey = (e) => {
        switch (e.keyCode) {
            case 38:
            case 87:
                // player_y = player_y - 20;
                setPlayer_y(player_y - 20);
                console.log("top")
                break;
            case 68:
            case 39:
                // player_x = player_x + 20;
                setPlayer_x(player_x + 20);
                console.log("right")
                break;
            case 83:
            case 40:
                // player_y = player_y + 20;
                setPlayer_y(player_y + 20);
                console.log("bottom")
                break;
            case 65:
            case 37:
                // player_x = player_x - 20;
                setPlayer_x(player_x - 20);
                console.log("left")
                break;
        }
    };

    useEffect(() => {
        // attach the event listener
        document.addEventListener('keydown', handleKeyPress);

        // remove the event listener
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    //controls end


    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        //Our draw come here
        draw(context)
    }, [draw])


    return <canvas height='600px' width='600px' ref={canvasRef} />
}

export default GameCanvas;