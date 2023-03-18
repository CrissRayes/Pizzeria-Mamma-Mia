import { Container } from 'react-bootstrap'
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='footer'>
      <Container className='contenedor grid'>
        <div>
          <h3>Síguenos</h3>
          <div className='redes'>
            <FaInstagram className='redes-icon' />
            <FaFacebook className='redes-icon' />
            <FaTwitter className='redes-icon' />
            <FaTiktok className='redes-icon' />
          </div>
        </div>
        <div>
          <h3>Nosotros</h3>
          <div className='nosotros'>
            <div>Quiénes somos</div>
            <div>Contáctanos</div>
            <div>Ubicación</div>
          </div>
        </div>

        <div>
          <h3>Cuenta</h3>
          <div className='cuenta'>
            <div>Crear cuenta</div>
            <div>Iniciar sesión</div>
          </div>
        </div>
      </Container>
      <div className='text-center derechos'>
        ©Todos los derechos reservados 2023
      </div>
    </div>
  )
}
