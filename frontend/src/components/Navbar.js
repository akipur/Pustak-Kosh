import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar style={{backgroundColor: '#707BFB', color:'#fff'}} expand="lg" >
      <Container fluid>
        <Navbar.Brand as={Link} to="#">PustakKosh</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Donor">Donor</Nav.Link>
            <Nav.Link as={Link} to="/Needy" >Needy</Nav.Link>
            <Nav.Link as={Link} to="/Learn" >Learn</Nav.Link>
            <Nav.Link as={Link} to="#" >Community</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/Login"><Button variant="light">Login</Button></Nav.Link>
            <Nav.Link as={Link} to="/Signup">
            <Button variant="light">Signup</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
