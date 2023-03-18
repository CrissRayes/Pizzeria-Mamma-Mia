import { Container } from 'react-bootstrap'
import { FaCartPlus } from 'react-icons/fa'
import img1080x1080 from '../assets/img/img1080x1080.png'
import { useParams } from 'react-router-dom'

export const Pizza = () => {
  const { id } = useParams()

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
