import { Container } from 'react-bootstrap'
import { ItemCart } from '../components/ItemCart'
import { useContext } from 'react'
import CartContext from '../my_context'
import formatCurrency from '../helpers/formatCurrency'

export const Cart = () => {
  const { cart } = useContext(CartContext)

  const cantidad = cart.reduce((acc, item) => {
    return acc + item.cantidad
  }, 0)

  const totalCarrito = cart.reduce((acc, item) => {
    return acc + item.precio * item.cantidad
  }, 0)

  return (
    <Container>
      <div className='row'>
        <div className='col-8'>
          <div>
            <div>
              <h3 className='d-inline'>Carrito</h3>
              <span>
                {cantidad === 0
                  ? ' (No hay productos)'
                  : ` (${cantidad} productos)`}

                {/* ({cantidad} productos) */}
              </span>
            </div>
          </div>
          {cart.map(item => {
            return (
              <ItemCart
                key={item.id}
                id={item.id}
                nombre={item.nombre}
                precio={item.precio}
                cantidad={item.cantidad}
                imagen={item.imagen}
                ingredientes={item.ingredientes}
              />
            )
          })}
        </div>
        <div className='col-4'>
          <h3 className='d-inline'>Resumen</h3>
          <div className='rounded shadow resumen-cart'>
            {cart.map(item => {
              return (
                <div
                  className='d-flex justify-content-between'
                  key={item.id}
                >
                  <p className='text-capitalize'>
                    {item.nombre} ({item.cantidad})
                  </p>
                  <p>{formatCurrency(item.precio * item.cantidad)}</p>
                </div>
              )
            })}
            <hr />
            <div className='d-flex justify-content-between'>
              <p>Total:</p>
              <p>{formatCurrency(totalCarrito)}</p>
            </div>
            <div>
              <button className='btn verde boton-comprar'>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
