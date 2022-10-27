import Badge from 'react-bootstrap/Badge';

export default function TitleBar() {
    let badge = (<Badge bg="dark">&#x1F977; 🐱‍👤</Badge>);

    return (<div id="titlebar">
        <h1>
            {badge}<span className="fs-2"><span className="small">LET'S PLAY SOME </span> ROGUE, BABY!!</span>{badge}
        </h1>
    </div>);
}