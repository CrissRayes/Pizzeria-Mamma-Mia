import { Card } from '../components/Card'
import { Container } from 'react-bootstrap'
import { useContext } from 'react'
import CartContext from '../my_context'

export const Home = () => {
  const { data } = useContext(CartContext)

  return (
    <Container>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {data.map(pizza => (
          <Card
            key={pizza.id}
            id={pizza.id}
            nombre={pizza.nombre}
            precio={pizza.precio}
            descripcion={pizza.descripcion}
            ingredientes={pizza.ingredientes}
            imagen={pizza.imagen}
          />
        ))}
      </div>
    </Container>
  )
}
