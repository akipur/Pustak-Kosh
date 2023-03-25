import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import DonorCard from './DonorCard';

export default class Donor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/get_all_books?' + new URLSearchParams({
      user_id: 2,
      donation_status: 'PENDING',
    })).then(res => res.json()).then(res => this.setState({books:res}))
  }

  /*handleSubmit(formData) {
    fetch(post, body: JSON.stringify(formData))
    .then(res => res.json())
    .then(res => {
      const new_book = res['new_book'];
      this.setState((state) => {
        return {
          books: [...state, new_book];
        }
      })
    })
  }*/


  render() {
    return (
      <>
        <div className="container-fluid py-3">
          <div className="row">
            <h1 className='text-center'>Donor Page</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

              <Button variant="dark" onClick={this.addNewBook}> Submit</Button>

              <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
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
            <div>
              {
                this.state.books.map((book) => {
                  return (
                    <DonorCard
                      key={book.book_id}
                      name={book.book_name}
                      author={book.author}
                      genre={book.genre}
                      description={book.description}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>

      </>
    );
  }
}