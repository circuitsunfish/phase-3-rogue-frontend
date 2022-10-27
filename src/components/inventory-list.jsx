import Card from "react-bootstrap/Card";

export default function InventoryList({ gameInfo }) {

    function listEntities(gameInfo_e) {
        if (!gameInfo) {
            return null;
        }
        const entities = gameInfo_e.entities
        debugger;
        Object.keys(entities).forEach((entity) => console.log(entities[entity]))

    }





    return (<div id="inventory-container">
        <Card id="entity-list" style={{ width: '12rem', margin: '1rem' }}>
            <Card.Title>Dungeon Population: </Card.Title>
            <ul class="list-group list-group-flush">
                {console.log(gameInfo)}
                {listEntities(gameInfo)}
            </ul>
        </Card>
        <Card id="inventory-list" style={{ width: '12rem', margin: '1rem' }}>
            <Card.Title>When items are implemented, this section will show our items in a list (example below): </Card.Title>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Axe</li>
                <li class="list-group-item">Sword</li>
                <li class="list-group-item">Potion</li>
            </ul>
        </Card></div>
    )
}