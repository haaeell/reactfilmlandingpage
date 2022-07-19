import {Navbar, Container, Nav} from "react-bootstrap" 
const NavigationBar = ()=> {
    return (
    <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">HAEL FILMS</Navbar.Brand>
             <Nav>
                <Nav.Link href="#Trending">TRENDING</Nav.Link>
                <Nav.Link href="#SuperHero">SUPERHERO</Nav.Link>
             </Nav>
                
                
            </Container>
        </Navbar>
    </div>
    )
}

export default NavigationBar