import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            
            <Navbar bg="light" variant="light">
                <Container>
                    
                    <Nav className="me-auto">
                        <Nav.Link href="#pricing"><i className="fa fa-book" aria-hidden="true" style={{color:'blue'}}></i> Documentation</Nav.Link>
                        <Nav.Link href="#pricing"><i className="fa fa-comment" aria-hidden="true" style={{color:'blue'}}></i> Pre-sale Questions?</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
