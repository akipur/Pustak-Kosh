import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import SearchBar from "../Search";
import NeedyCard from "./NeedyCard";

export default class NeedyDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    fetch(
      "http://127.0.0.1:5000/get_all_books?" +
        new URLSearchParams({
          donation_status: "PENDING",
        })
    )
      .then((res) => res.json())
      .then((res) => this.setState({ books: res }));
  }
  render() {
    return (
      <>
        <div className="container-fluid py-3">
          <div className="row">
            <h1 className="text-center">Needy Page</h1>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  margin: "15px",
                }}
              >
                <SearchBar />
              </div>
              <div></div>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="dark"
                >
                  Select Genre
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                    Fantasy & Science Fiction
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Biography & autobiography
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Young Adult</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Educational</Dropdown.Item>
                  <Dropdown.Item href="#/action-5">
                    Inspirational & Religious
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="container-fluid py-3">
              <div className="row">
                {this.state.books.map((book) => {
                  return (
                    <NeedyCard
                      key={book.book_id}
                      book_id={book.book_id}
                      name={book.book_name}
                      author={book.author}
                      genre={book.genre}
                      description={book.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
