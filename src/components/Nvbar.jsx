import { Navbar, Container } from 'react-bootstrap'
import { FaPizzaSlice, FaShoppingCart } from 'react-icons/fa'

export const Nvbar = () => {
  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'
        className='sticky-top'
      >
        <Container className='justify-content-between text-white'>
          <Navbar.Brand href='/'>
            <div className='nav-icons-imgs'>
              <FaPizzaSlice size={40} /> Pizzería Mamma Mia!
            </div>
          </Navbar.Brand>

          <div className='carrito'>
            <FaShoppingCart className='carrito-icon' />
            <div className='cantidad-carrito'>1</div>
          </div>
        </Container>
      </Navbar>
    </>
  )
}
