import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Nvbar = () => {
  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'
        className='sticky-top'
      >
        <Container className='justify-content-between'>
          <Navbar.Brand href='/'>
            <div className='nav-icons-imgs'>
              <img
                src=''
                alt='Logo Pizzería'
              />
            </div>
          </Navbar.Brand>
          <div>
            <NavLink to='/'>Carrito</NavLink>
          </div>
        </Container>
      </Navbar>
    </>
  )
}
