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
        let tooCloseErr = "not true, too close";
        console.log({ x, add })
        if (add && x) {
            let addX = player_x + movementStep

            if (addX < canvasSize) {
                console.log(addX)
                setPlayer_x((currentX) => currentX + movementStep);
            }
            else {
                console.log({ tooCloseErr })
            }
        }
        else if (!add && x) {
            if (player_x > movementStep) {
                console.log({ player_x })
                setPlayer_x((currentX) => {
                    if (currentX > movementStep)
                        return currentX - movementStep
                });
            }
            else {
                console.log({ tooCloseErr })
            }
        }
        else {
            console.log("not true, can't move")
        }


    }


    const handleKey = (e) => {
        switch (e.keyCode) {
            case 38:
            case 87:
                // player_y = player_y - 20;
                setPlayer_y((currentY) => currentY - 20);
                console.log("top")
                break;
            case 68:
            case 39:
                // player_x = player_x + 20;
                setPlayer_x((currentX) => currentX + 20);
                // checkForCanvasBoundary(true, true);
                console.log("right")
                break;
            case 83:
            case 40:
                // player_y = player_y + 20;
                setPlayer_y((currentY) => currentY + 20);
                console.log("bottom")
                break;
            case 65:
            case 37:
                // player_x = player_x - 20;
                // setPlayer_x((currentX) => currentX - 20);
                checkForCanvasBoundary(true, false);
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