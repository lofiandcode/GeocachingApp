import React from 'react';
import { Card, CardDeck, Accordion } from "react-bootstrap";
import "../App.css";

const UserCaches = (props) => {
    return (
        <div className="text-center">
            <Accordion defaultActiveKey="1">
            <CardDeck>
            <Card border="success" bg="light" style={{ width: '18rem' }}>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Card.Title>{props.cacheName}</Card.Title>
                    </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    {/* <Card.Title>{props.cacheName}</Card.Title> */}
                    {/* <Card.Img variant="top" src={props.cachePhoto}/> */}
                    <Card.Text>
                    Hint: {props.cacheHint}
                    </Card.Text>
                    <Card.Footer className="text-muted">{props.cacheSize}</Card.Footer>
                </Card.Body>
                </Accordion.Collapse>
                
            </Card>
            </CardDeck>
            </Accordion>
        </div>
    )
}
export default UserCaches;