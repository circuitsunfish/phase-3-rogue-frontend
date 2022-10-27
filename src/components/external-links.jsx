import Card from "react-bootstrap/Card"

export default function External() {
    return (
        <Card id="external-links" style={{ width: '12rem', margin: '1rem' }}>
            <Card.Body>
                <Card.Title>External Links</Card.Title>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><a href="https://github.com/pikeminnow/phase-3-rogue-frontend">Frontend GitHub Repo</a></li>
                    <li class="list-group-item"><a href="https://github.com/pikeminnow/phase-3-rogue-backend">Backend GitHub Repo</a></li>
                    <li class="list-group-item"><a href="https://github.com/pikeminnow/phase-3-rogue-planning-documents">Planning Documents GitHub Repo</a> </li>
                </ul>
                <Card.Title>Credits</Card.Title>
                <strong>Proudly Made By:</strong>
                <ul>
                    <li class="list-group-item"><a href="https://www.linkedin.com/in/seo-choi-dev/">Seo Choi</a></li>
                    <li class="list-group-item"><a href="https://ashtonmackenzie.com/">Ashton MacKenzie</a></li>
                </ul>
                <strong>Special Thanks To:</strong>
                <ul>
                    <li class="list-group-item"> <a href="https://www.linkedin.com/in/reiarmenia/">Rei</a>, for React support and encouragement</li>
                    <li class="list-group-item"> <a href="https://www.linkedin.com/in/mjsonofharry/"> Maddie</a>, for game design support and encouragement</li>
                </ul>
            </Card.Body>
        </Card>);
}