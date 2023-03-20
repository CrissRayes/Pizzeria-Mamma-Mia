import formatCurrency from '../helpers/formatCurrency'
import { useNavigate } from 'react-router-dom'
import CartContext from '../my_context'
import { useContext } from 'react'
import { AddToCartBtn } from './AddToCartBtn'

export const Card = ({ id, nombre, precio, ingredientes, imagen }) => {
  const { cart, setCart } = useContext(CartContext)

  const colors = ['verde', 'amarillo', 'naranjo', 'cafe', 'rojo']
  const navigate = useNavigate()

  const handleVerMas = () => {
    navigate(`/pizzas/${id}`)
  }

  const addToCart = () => {
    const pizzaCart = {
      id,
      nombre,
      precio,
      imagen,
      cantidad: 1,
    }

    const isInCart = cart.find(item => item.id === id)

    if (isInCart) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, cantidad: item.cantidad + 1 }
        }
        return item
      })
      setCart(newCart)
    } else {
      setCart([...cart, pizzaCart])
    }
  }

  return (
    <div className='col'>
      <div
        className='card h-100 shadow border-0'
        style={{ width: '18rem' }}
      >
        <img
          src={imagen}
          className='card-img-top'
          alt={nombre}
          onClick={handleVerMas}
        />
        <div className='card-body'>
          <div style={{ height: '50px', overflow: 'auto' }}>
            <ul className='lista-ingredientes'>
              {ingredientes.map((ingrediente, index) => (
                <li
                  className={`badge rounded-pill ${colors[index]} text-white me-1`}
                  key={index}
                >
                  {ingrediente}
                </li>
              ))}
            </ul>
          </div>
          <h3 className='card-title text-capitalize mb-3'>{nombre}</h3>

          <div className='mb-3 fw-bolder text-end'>
            {formatCurrency(precio)}
          </div>
          <div className='d-flex justify-content-end'>
            <AddToCartBtn addToCart={addToCart} />
          </div>
        </div>
      </div>
    </div>
  )
}
