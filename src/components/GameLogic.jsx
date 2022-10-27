import React, { useRef, useEffect, useState, useCallback } from 'react'
import GameCanvas from './GameCanvas'
import { GameEntityListItem } from "./GameEntityListItem";


export default function GameLogic({ gameInfo, entities }) {

    const [player_x, setPlayer_x] = useState(85);
    const [player_y, setPlayer_y] = useState(75);

    const [clown_x, setClown_x] = useState(225);
    const [clown_y, setClown_y] = useState(275);

    const [bed_x, setBed_x] = useState(545);
    const [bed_y, setBed_y] = useState(555);

    const [allEntities, setAllEntities] = useState(null);

    const canvasSize = 600;
    const movementStep = 20;

    const handleKeyPress = useCallback((event) => {
        handleKey(event);
    }, []);

    useEffect(() => {
        let xComparisonBed = player_x === bed_x;
        let yComparisonBed = player_y === bed_y;
        let xComparisonClown = player_x === clown_x;
        let yComparisonClown = player_y === clown_y;

        if (xComparisonClown && yComparisonClown) {
            console.log("you got clowned");
        }
        else if (xComparisonBed && yComparisonBed) {
            console.log("escaped to neverland");
        }
    }, [bed_x, bed_y, clown_x, clown_y, player_x, player_y]);

    // console.log(allEntities)

    // controls start

    /**
     * Speculates arithmatic to see if an entity wishes to leave the walls of the canvas. 
     * @param {boolean} x  - if true, we will check for boundary and move on x. if false, we will check and move on y.
     * @param {boolean} add - if true, we will check for positive movement. if false, we will check for negative movement.
     */
    function checkForCanvasBoundary(x, add, entity) {
        //TODO: vertical bounding moves player off the nice alignment in the grid.
        const lowerbound = 0 + movementStep * 0.25;
        const upperbound = canvasSize - movementStep * 0.75;

        const arithmaticMovement = add ? movementStep : -movementStep;
        function xSetter(xSetterCurrentX) {
            return Math.min(Math.max(xSetterCurrentX + arithmaticMovement, lowerbound), upperbound)
        }
        function ySetter(ySetterCurrentY) {
            return Math.min(Math.max(ySetterCurrentY + arithmaticMovement, lowerbound), upperbound)
        }

        switch (entity) {
            case "🤡":
                x ? setClown_x((currentX) => xSetter(currentX)) : setClown_y((currentY) => ySetter(currentY));
                break;
            case "😎":
                x ? setPlayer_x((currentX) => xSetter(currentX)) : setPlayer_y((currentY) => ySetter(currentY));
                break;
        }

    }

    const handleKey = (e) => {
        switch (e.keyCode) {
            case 38:
            case 87:
                checkForCanvasBoundary(false, false, "😎");
                // checkForCanvasBoundary(false, false, "🤡");
                break;
            case 68:
            case 39:
                checkForCanvasBoundary(true, true, "😎");
                // checkForCanvasBoundary(true, true, "🤡");
                break;
            case 83:
            case 40:
                checkForCanvasBoundary(false, true, "😎");
                // checkForCanvasBoundary(false, true, "🤡");
                break;
            case 65:
            case 37:
                checkForCanvasBoundary(true, false, "😎");
                // checkForCanvasBoundary(true, false, "🤡");
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

    //grab this out of the start game json response
    // console.log(gameInfo.entities)

    //end get entities


    return <GameCanvas
        canvasSize={canvasSize}
        entities={entities}
        movementStep={movementStep}

        bed_x={bed_x} bed_y={bed_y}
        clown_x={clown_x} clown_y={clown_y}
        player_x={player_x} player_y={player_y}

    />


}