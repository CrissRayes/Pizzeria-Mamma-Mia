import { Container } from 'react-bootstrap'
import { FaCartPlus } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import formatCurrency from '../helpers/formatCurrency'

export const Pizza = () => {
  const { id } = useParams()
  const [pizza, setPizza] = useState({})

  const getPizza = async () => {
    const url = 'http://localhost:3000/pizzas.json'
    const response = await fetch(url)
    const data = await response.json()
    const pizzaMatch = data.find(pizza => pizza.id === id)
    setPizza(pizzaMatch)
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    <Container>
      <div className='row'>
        <div className='col-6'>
          <img
            src={pizza.img}
            alt='pizza'
            className='img-fluid'
          />
        </div>
        <div className='col-6'>
          <h2 className='border-bottom text-capitalize'>{pizza.name}</h2>
          <p>{pizza.desc}</p>
          <h4>Ingredientes:</h4>
          <ul>
            {pizza.ingredients &&
              pizza.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
          </ul>
          <div className='d-flex justify-content-between'>
            <h5>Precio: {formatCurrency(pizza.price)}</h5>
            <button className='btn btn-primary'>
              Añadir
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
