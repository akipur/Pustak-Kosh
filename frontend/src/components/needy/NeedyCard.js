import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function NeedyCard(props) {
  const { book_id, name, author, genre, description } = props;

  const handleRequestBook = (e) => {
    console.log(book_id);
    e.preventDefault();

    fetch("http://127.0.0.1:5000/update_request_for_book", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: 2, book_id }),
    })
      .then((res) => res.json())
      .then((res) => {
        const new_book = res["inserted_book"];
        this.setState((state) => {
          return {
            books: [...state.books, new_book],
          };
        });
      });
    console.log("data");
  };

  return (
    <div className="col-md-3 py-3">
      <Card
        style={{
          width: "18rem",
          backgroundColor: "#9fa6fe",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "10px 5px 2px #707BFB",
          marginRight: "18px",
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
          <Button
            variant="warning"
            style={{ marginRight: "10px" }}
            onClick={handleRequestBook}
          >
            Request
          </Button>
          <Button variant="dark">View Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
