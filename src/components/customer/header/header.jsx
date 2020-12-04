import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import {
  BrowserRouter as Router,
  Redirect,
  Link
} from "react-router-dom";


class Header extends React.Component {
    render() {
      return <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Router>
      <Link to = "/"> <Navbar.Brand href="#home">Amaya Decors</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Link to = '/home'>  <Nav.Link href="#pricing">Home Decor</Nav.Link></Link>
          <Nav.Link href="#pricing">Kitchen Decor</Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Router>
    </Navbar>


    }
  }


export default Header;
