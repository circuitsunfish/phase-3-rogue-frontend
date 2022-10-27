import Card from "react-bootstrap/Card";
import GameEntityListItem from "./GameEntityListItem";
export default function InventoryList({ gameInfo }) {

    function listEntities(gameInfo_e) {
        if (!gameInfo) {
            return null;
        }
        const entities = gameInfo_e.entities
        const entityListDisplay = [];
        Object.keys(entities).forEach((entity) => {
            entityListDisplay.push(entity);
        })

        return entityListDisplay.map((item) => {
            return (<GameEntityListItem key={`${item}`} entity={item} />);
        });
    }

    //entity information by looping over the whole entity list and using the key to access the entity information



    return (<div id="inventory-container">
        <Card id="entity-list" style={{ width: '12rem', margin: '1rem' }}>
            <Card.Title>Dungeon Population: </Card.Title>
            <ul className="list-group list-group-flush">
                {listEntities(gameInfo)}
            </ul>
        </Card>
        <Card id="inventory-list" style={{ width: '12rem', margin: '1rem' }}>
            <Card.Title>When items are implemented, this section will show our items in a list (example below): </Card.Title>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Axe</li>
                <li className="list-group-item">Sword</li>
                <li className="list-group-item">Potion</li>
            </ul>
        </Card></div>
    )
}