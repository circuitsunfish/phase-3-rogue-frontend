import GameareaPlaceholder from "./GameareaPlaceholder"
import GameLogic from "./GameLogic";
import HowToPlay from "./How2Play"
import InventoryList from './inventory-list';
import Introduction from './introduction';

export default function Game({ gameInfo }) {



    return (
        <div id="Game_Container">
            This is our container for game components
            <GameLogic gameInfo={gameInfo} />
            <HowToPlay />
            <Introduction />
            <InventoryList gameInfo={gameInfo} />
        </div>
    )
}


