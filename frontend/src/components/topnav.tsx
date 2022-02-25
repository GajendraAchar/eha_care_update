import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image'

export default function Topnav() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top" className="eha-topnav">
      <Navbar.Brand href="#home" className="mx-3">
        <Image src="/../public/img/EHACare-logo.svg"
          width="160"
          height="40"
          className="d-inline-block align-center pt-1"
          alt="EHA Care"></Image>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-3" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Clinics Dashboard</Nav.Link>
          <Nav.Link href="#link">Patients</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <NavDropdown title="Sabine Claassen" id="basic-nav-dropdown" className="user-name">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}