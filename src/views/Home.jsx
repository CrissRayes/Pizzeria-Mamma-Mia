import { Card } from '../components/Card'
import useData from '../hooks/useData'
import { Container } from 'react-bootstrap'

export const Home = () => {
  const { data } = useData()

  return (
    <Container>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {data.map(pizza => (
          <Card
            key={pizza.id}
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
