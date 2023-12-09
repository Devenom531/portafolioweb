import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Whatsapp from '../recursos/Whatsapp.png';
import Facebook from '../recursos/Facebook.png';
import Instagram from '../recursos/Instagram.png';
import Logohtc from '../recursos/fabricio1.png';
const Navegacion = () => {
    return (
       <> <div className='header'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><Image className="bg-light" width={60} height={60} src={Logohtc} /> HTC</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Tienda</Nav.Link>
            <Nav.Link href="#features">Tutoriales</Nav.Link>
            <Nav.Link href="#features">Proyectos</Nav.Link>
            
          </Nav>
          <Nav>
          <NavDropdown title="Contacto" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://api.whatsapp.com/send?phone=573207507083&text=%F0%9F%92%BB%20Servicios%20Tecnologicos"><Image width={20} height={20} src={Whatsapp} /> Whatsapp</NavDropdown.Item>
              <NavDropdown.Item href="https://www.facebook.com/faurovenom051316?mibextid=ZbWKwL"><Image width={20} height={20} src={Facebook} /> Facebook</NavDropdown.Item>
              <NavDropdown.Item href="https://instagram.com/agudelofabricio?igshid=MW9paW9wZ2pnNGNpcw=="><Image width={20} height={20} src={Instagram} /> Instagram</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </>
        
    )
}

export default Navegacion