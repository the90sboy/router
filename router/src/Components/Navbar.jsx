import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

const Navbars = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark"> 
				<Container>				
							<Navbar.Brand href="/">MARS_</Navbar.Brand>

							<Link to="/">Home</Link>
							<Nav className="me-auto">
								
								<Link to="/contact">Contact</Link>
								<Link to="/about">About</Link>
								<Link to="/service">Services</Link>
							</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Navbars;