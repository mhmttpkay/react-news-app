import React from 'react'
import { Navbar, Container} from 'react-bootstrap';

export default function Header() {
  return (
    <div>
      <Navbar expand="xxl" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Güncel Haberler</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
