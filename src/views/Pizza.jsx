import { Container } from 'react-bootstrap'
import { FaCartPlus } from 'react-icons/fa'
import img1080x1080 from '../assets/img/img1080x1080.png'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Pizza = () => {
  const { id } = useParams()
  const [pizza, setPizza] = useState({})

  // TODO: Fetch data from API using id
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
            src={img1080x1080}
            alt='pizza'
            className='img-fluid'
          />
        </div>
        <div className='col-6'>
          <h2 className='border-bottom'>Pizza{id}</h2>
          <h2>{pizza?.name || ''}</h2>
          <p>{pizza.name}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quos quas quidem nesciunt. Quisquam, quae. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quos quas quidem nesciunt. Quisquam, quae.
          </p>
          <h4>Ingredientes:</h4>
          <ul>
            <li>Queso</li>
            <li>Tomate</li>
            <li>Pepperoni</li>
            <li>Salchicha</li>
            <li>Pollo</li>
          </ul>
          <div className='d-flex justify-content-between'>
            <h5>Precio: $20.990</h5>
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
