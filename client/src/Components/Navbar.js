import React from "react";
import{Navbar,Container,Nav} from "react-bootstrap";

const Navbar=()=>{
    return( 
    <header>
 <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MERN APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>  
    )
}
export default Navbar;