import React, { useRef, useEffect, useState, useCallback } from 'react'
import GameCanvas from './GameCanvas'


export default function GameLogic() {

    const [player_x, setPlayer_x] = useState(85);
    const [player_y, setPlayer_y] = useState(75);
    const [allEntities, setAllEntities] = useState(null);

    const canvasSize = 600;
    const movementStep = 20;

    console.log("rendering game canvas");

    const handleKeyPress = useCallback((event) => {
        console.log(`Key pressed: ${event.key}`);
        handleKey(event);
        console.log({ player_x, player_y });
    }, []);


    // controls start

    /**
     * Speculates arithmatic to see if an entity wishes to leave the walls of the canvas. 
     * @param {boolean} x  - if true, we will check for boundary and move on x. if false, we will check and move on y.
     * @param {boolean} add - if true, we will check for positive movement. if false, we will check for negative movement.
     */
    function checkForCanvasBoundary(x, add) {

        //TODO: vertical bounding moves player off the nice alignment in the grid.
        const lowerbound = 0 + movementStep * 0.25;
        const upperbound = canvasSize - movementStep * 0.75;

        const arithmaticMovement = add ? movementStep : -movementStep;
        if (x) {
            setPlayer_x((currentX) => {
                return Math.min(Math.max(currentX + arithmaticMovement, lowerbound), upperbound)
            });
        }
        else {
            setPlayer_y((currentY) => {
                return Math.min(Math.max(currentY + arithmaticMovement, lowerbound), upperbound)
            });
        }


    }


    const handleKey = (e) => {
        switch (e.keyCode) {
            case 38:
            case 87:
                checkForCanvasBoundary(false, false);
                break;
            case 68:
            case 39:
                checkForCanvasBoundary(true, true);
                break;
            case 83:
            case 40:
                checkForCanvasBoundary(false, true);
                break;
            case 65:
            case 37:
                checkForCanvasBoundary(true, false);
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

    //get entities to load into the game

    useEffect(() => {
        fetch(`http://localhost:9292/get_entities`)
            .then((r) => {
                let responseJson = r.json();
                return responseJson;
            })
            .then((entities) => {
                setAllEntities(entities)
                console.log(entities)
            }
            );
    }, []);

    //end get entities


    return <GameCanvas canvasSize={canvasSize} movementStep={movementStep} player_x={player_x} player_y={player_y} />


}