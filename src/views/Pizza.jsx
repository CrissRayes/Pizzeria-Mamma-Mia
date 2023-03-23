import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import formatCurrency from '../helpers/formatCurrency'
import CartContext from '../my_context'
import { useContext } from 'react'
import { AddToCartBtn } from '../components'
import { useNavigate } from 'react-router-dom'

export const Pizza = () => {
  const navigate = useNavigate()
  const { data, cart, setCart } = useContext(CartContext)
  const [pizza, setPizza] = useState({})
  const { id } = useParams()

  const pizzaMatch = data.find(pizza => pizza.id === id)

  useEffect(() => {
    setPizza(pizzaMatch)
  }, [pizzaMatch])

  const addToCart = () => {
    const pizzaCart = {
      id,
      nombre: pizza.nombre,
      precio: pizza.precio,
      imagen: pizza.imagen,
      ingredientes: pizza.ingredientes,
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

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Container>
      <div className='row'>
        <div className='col-6'>
          <img
            src={pizza?.imagen}
            alt='pizza'
            className='img-fluid'
          />
        </div>
        <div className='col-6'>
          <h2 className='border-bottom text-capitalize'>{pizza?.nombre}</h2>
          <p>{pizza?.descripcion}</p>
          <h4>Ingredientes:</h4>
          <ul>
            {pizza?.ingredientes &&
              pizza.ingredientes.map(ingrediente => (
                <li key={ingrediente}>{ingrediente}</li>
              ))}
          </ul>
          <div className='d-flex justify-content-between'>
            <h5>
              Precio:{' '}
              <span style={{ fontFamily: 'Lato' }}>
                {formatCurrency(pizza?.precio)}
              </span>
            </h5>

            <AddToCartBtn addToCart={addToCart} />
          </div>
          <p
            onClick={handleGoBack}
            style={{ cursor: 'pointer' }}
          >
            Volver
          </p>
        </div>
      </div>
    </Container>
  )
}
