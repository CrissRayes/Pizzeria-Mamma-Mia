import { Container } from 'react-bootstrap'
import { ItemCart } from '../components/ItemCart'

export const Cart = () => {
  // array de ejemplo para mostrar el componente ItemCart
  // luego se debe eliminar este array y obtener los datos desde el array del carrito
  const items = [
    {
      id: 1,
      nombre: 'Pizza',
      precio: 20990,
      cantidad: 1,
      image: '',
    },
    {
      id: 2,
      nombre: 'Hamburguesa',
      precio: 10990,
      cantidad: 1,
      image: '',
    },
  ]

  return (
    <Container>
      <h1>Carrito</h1>

      {items.map(item => (
        <ItemCart
          key={item.id}
          nombre={item.nombre}
          precio={item.precio}
          cantidad={item.cantidad}
          image={item.image}
        />
      ))}

      <div>
        <p>Total: $20.990</p>
        <button className='btn btn-success'>Comprar</button>
      </div>
    </Container>
  )
}
