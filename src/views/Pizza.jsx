import { Container } from 'react-bootstrap'
import { FaCartPlus } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import formatCurrency from '../helpers/formatCurrency'
import CartContext from '../my_context'
import { useContext } from 'react'
import { AddToCartBtn } from '../components'

export const Pizza = () => {
  const { cart, setCart } = useContext(CartContext)

  const { id } = useParams()
  const [pizza, setPizza] = useState({})

  const getPizza = async () => {
    const url = 'http://localhost:3000/pizzas.json'
    const response = await fetch(url)
    const data = await response.json()
    const pizzas = data.map(pizza => {
      return {
        id: pizza.id,
        nombre: pizza.name,
        precio: pizza.price,
        ingredientes: pizza.ingredients,
        descripcion: pizza.desc,
        imagen: pizza.img,
      }
    })

    const pizzaMatch = pizzas.find(pizza => pizza.id === id)
    setPizza(pizzaMatch)
  }

  useEffect(() => {
    getPizza()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addToCart = () => {
    const pizzaCart = {
      id,
      nombre: pizza.nombre,
      precio: pizza.precio,
      imagen: pizza.imagen,
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
    <Container>
      <div className='row'>
        <div className='col-6'>
          <img
            src={pizza.imagen}
            alt='pizza'
            className='img-fluid'
          />
        </div>
        <div className='col-6'>
          <h2 className='border-bottom text-capitalize'>{pizza.nombre}</h2>
          <p>{pizza.descripcion}</p>
          <h4>Ingredientes:</h4>
          <ul>
            {pizza.ingredientes &&
              pizza.ingredientes.map(ingrediente => (
                <li key={ingrediente}>{ingrediente}</li>
              ))}
          </ul>
          <div className='d-flex justify-content-between'>
            <h5>Precio: {formatCurrency(pizza.precio)}</h5>
            <AddToCartBtn addToCart={addToCart} />
          </div>
        </div>
      </div>
    </Container>
  )
}
