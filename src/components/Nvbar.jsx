import { Navbar, Container } from 'react-bootstrap'
import { FaPizzaSlice } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../my_context'
import { BubbleAlert } from './BubbleAlert'

export const Nvbar = () => {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()
  const handleBackHome = () => {
    navigate('/')
  }

  const cantidad = cart.reduce((acc, item) => {
    return acc + item.cantidad
  }, 0)

  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'
        className='sticky-top'
      >
        <Container className='justify-content-between text-white'>
          <Navbar.Brand
            onClick={handleBackHome}
            style={{ cursor: 'pointer' }}
          >
            <div className='nav-icons-imgs'>
              <FaPizzaSlice size={40} /> Pizzería Mamma Mia!
            </div>
          </Navbar.Brand>
          <BubbleAlert cantidad={cantidad} />
        </Container>
      </Navbar>
    </>
  )
}
