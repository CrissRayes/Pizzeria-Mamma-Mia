import { Container } from 'react-bootstrap'
import { ItemCart } from '../components/ItemCart'
import { useContext } from 'react'
import CartContext from '../my_context'

export const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log(cart)

  return (
    <Container>
      <h1>Carrito</h1>
      {cart.map(item => {
        return (
          <ItemCart
            key={item.id}
            nombre={item.nombre}
            precio={item.precio}
            cantidad={item.cantidad}
            imagen={item.imagen}
          />
        )
      })}

      <div>
        <p>Total: $20.990</p>
        <button className='btn btn-success'>Comprar</button>
      </div>
    </Container>
  )
}
