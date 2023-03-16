import Card from '../components/Card'
import useData from '../hooks/useData'

export const Home = () => {
  const { data } = useData()

  return (
    <div className='container'>
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
  )
}
