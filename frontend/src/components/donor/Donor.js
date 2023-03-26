import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import DonorCard from "./DonorCard";
import AddNewModal from "../AddnewModal";

export default class Donor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
    };
  }

  openAddNewModal = () => {
    this.setState({ showModal: true });
  };

  closeAddNewModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    fetch(
      "http://127.0.0.1:5000/get_all_books?" +
        new URLSearchParams({
          user_id: 2,
          donation_status: "PENDING",
        })
    )
      .then((res) => res.json())
      .then((res) => this.setState({ books: res }));
  }

  handleSubmit = (e, formData) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/add_new_book", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
    this.closeAddNewModal();
  };

  render() {
    return (
      <>
        <div className="container-fluid py-3">
          <div className="row">
            <h1 className="text-center">Donor Page</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
              }}
            >
              <Button variant="dark" onClick={this.openAddNewModal}>
                + Add New Book
              </Button>
              <AddNewModal
                show={this.state.showModal}
                handleClose={this.closeAddNewModal}
                handleSubmit={this.handleSubmit}
              />

              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="dark"
                >
                  Check Status
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                    Active
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Sold</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Pending</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">Requested</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="container-fluid py-3">
              <div className="row">
                {this.state.books.map((book) => {
                  return (
                    <DonorCard
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
