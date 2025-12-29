import { Navbar, Container, Nav } from "react-boostrap";

function() {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top shadow-sm">
        <Container>
            <Navbar.Brand href="/">BeritaOnline</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.link href="/">Home</Nav.link>
                <Nav.link href="/kategori/teknologi">Teknologi</Nav.link>
                <Nav.link href="/kategori/olahraga">Olahraga</Nav.link>
                <Nav.link href="/kategori/politik">Politik</Nav.link>
            </Nav>
        </Container>
    </Navbar>    
    );
}