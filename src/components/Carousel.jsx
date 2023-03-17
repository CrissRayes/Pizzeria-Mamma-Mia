import { Container } from 'react-bootstrap'
import slide2000x350 from '../assets/img/slide2000x350.png'

export const Carousel = () => {
  return (
    <Container className='mb-5'>
      <div className='carousel slide'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div id='slideImg'>
              <img
                alt='Carousel'
                src={slide2000x350}
                className='d-block w-100'
              />
            </div>
            <div
              className='carousel-caption d-flex align-items-center justify-content-center'
              id='sobre-todo'
            >
              <div className='text-center'>
                <h1 className='text-white'>Bienvenido!</h1>
                <p className='text-white'>
                  Elija su pizza favorita y disfrute del mejor sabor!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
