import React, { useRef, useEffect, useState, useCallback } from 'react'
import GameCanvas from './GameCanvas'


export default function GameLogic() {

    const [player_x, setPlayer_x] = useState(85);
    const [player_y, setPlayer_y] = useState(75);
    const [allEntities, setAllEntities] = useState(null);

    console.log("rendering game canvas");

    const handleKeyPress = useCallback((event) => {
        console.log(`Key pressed: ${event.key}`);
        handleKey(event);
        console.log({ player_x, player_y });
    }, []);


    // controls start

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
                setPlayer_x((currentX) => currentX - 20);
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


    return <GameCanvas player_x={player_x} player_y={player_y} />


}