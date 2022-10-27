import GameareaPlaceholder from "./GameareaPlaceholder"
import GameLogic from "./GameLogic";
import HowToPlay from "./How2Play"
import InventoryList from './inventory-list';
import Introduction from './introduction';
import { GameEntityListItem } from "./GameEntityListItem";

export default function Game({ gameInfo }) {
    const entityInfoArr = [];
    function listEntities(gameInfo_e) {

        if (!gameInfo) {
            return null;
        }
        const entities = gameInfo_e.entities
        Object.keys(entities).map((entity) => {
            entityInfoArr.push(entities[entity].inherited_from_types_arr[0].default_emoji)
        })
    }


    listEntities(gameInfo)
    console.log(entityInfoArr)

    //GETS EMOJI - needs interpolations on entities.____.inheritted_from_types_arr.[0].default_emoji
    // console.log(gameInfo.entities.bed.inherited_from_types_arr[0])
    // listEntities(gameInfo)
    // console.log(entityListDisplay)
    return (
        <div id="Game_Container">
            This is our container for game components
            <GameLogic gameInfo={gameInfo} entities={entityInfoArr} />
            <HowToPlay />
            <Introduction />
            <InventoryList gameInfo={gameInfo} />
        </div>
    )
}


