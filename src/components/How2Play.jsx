import Card from "react-bootstrap/Card"

export default function HowToPlay() {
    return (
        <Card id="howToPlay" style={{ width: '2rem', margin: '1rem' }}>
            <Card.Body>
                <Card.Title>How To Play</Card.Title>
                <ol className="list-group list-group-flush" >
                    <li className="list-group-item">Check the Options first as they will interrupt your existing game.</li>
                    <li className="list-group-item">Start a new game or load an existing save.</li>
                    <li className="list-group-item">Use [WASD / arrow keys] to move and attack.</li>
                    <li className="list-group-item">Defeat any monsters and make it safely to your bed.</li>
                    <li className="list-group-item">Save your game if you want to come back later.</li>
                    <li className="list-group-item">Are you your own worst fear? Defeat your past selves!</li>
                </ol>
            </Card.Body>
        </Card>
    );
}