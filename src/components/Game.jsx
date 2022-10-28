import CardGroup from 'react-bootstrap/CardGroup';
import { Stack } from 'react-bootstrap';
import GameareaPlaceholder from "./GameareaPlaceholder"
import GameLogic from "./GameLogic";
import HowToPlay from "./How2Play"
import InventoryList from './inventory-list';
import Introduction from './introduction';
import { GameEntityListItem } from "./GameEntityListItem";

export default function Game({ gameInfo, gameStart, entities, saveInfo }) {


    //GETS EMOJI - needs interpolations on entities.____.inheritted_from_types_arr.[0].default_emoji
    // console.log(gameInfo.entities.bed.inherited_from_types_arr[0])
    // listEntities(gameInfo)
    // console.log(entityListDisplay)
    return (
        <div id="Game_Container">
            <CardGroup>
                <InventoryList gameInfo={gameInfo} />
                <GameLogic gameInfo={gameInfo} entities={entities} gameStart={gameStart} saveInfo={saveInfo} />
                <HowToPlay />
            </CardGroup>
            <Introduction />
        </div>
    )
}


