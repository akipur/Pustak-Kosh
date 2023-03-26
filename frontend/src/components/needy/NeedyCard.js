import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function NeedyCard(props){
    const { name, author, genre, description } = props;
    return (
        <div className="col-md-3 py-3">
            <Card style={{ width: '18rem', backgroundColor: '#9fa6fe', borderRadius:'20px', padding:'20px', boxShadow:'10px 5px 2px #707BFB', marginRight:'18px'}}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h5><stong>{author}</stong></h5>
                        <h5><stong>{genre}</stong></h5>
                        {description}
                    </Card.Text>
                    <Button variant="warning" style={{ marginRight: '10px' }}>Request </Button>
                    <Button variant="dark">View Details</Button>
                </Card.Body>
            </Card>
        </div>
    )
}