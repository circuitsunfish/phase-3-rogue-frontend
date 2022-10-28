import { CardGroup } from "react-bootstrap"
import { Stack } from "react-bootstrap"
import { Card } from "react-bootstrap"
import External from "./external-links"
export default function Introduction() {
    return (
        <CardGroup id="introduction" direction="horizontal">
            <External />
            <Card>
                <Card.Body>
                    <Card.Title>HISTORY</Card.Title>
                    Please take some time to learn about this awesome game!
                </Card.Body>
            </Card>

        </CardGroup>
    )
}