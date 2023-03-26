import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const handleSubmitReq = (e, book_id) => {
  console.log(book_id);
  e.preventDefault();
  fetch(
    "http://127.0.0.1:5000/get_needy_info?" +
      new URLSearchParams({
        book_id: book_id,
      })
  )
    .then((res) => res.json())
    .then((res) => console.log(res));
};

export default function donorCard(props) {
  const { book_id, name, author, genre, description } = props;
 
  return (
    <div className="col-md-3 py-3">
      <Card
        style={{
          width: "18rem",
          backgroundColor: "#9fa6fe",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "10px 5px 2px #707BFB",
        }}
      >
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h5>
              <stong>{author}</stong>
            </h5>
            <h5>
              <stong>{genre}</stong>
            </h5>
            {description}
          </Card.Text>
          <Button variant="primary" onClick={(e) => handleSubmitReq(e, book_id)}>
            View Requests
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
