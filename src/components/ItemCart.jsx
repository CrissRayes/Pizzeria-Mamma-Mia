import formatCurrency from '../helpers/formatCurrency'
import { useContext } from 'react'
import CartContext from '../my_context'
import { useNavigate } from 'react-router-dom'

export const ItemCart = ({
  id,
  nombre,
  precio,
  cantidad,
  imagen,
  ingredientes,
}) => {
  const { cart, setCart } = useContext(CartContext)
  const navigate = useNavigate()

  const handleAdd = () => {
    const newCart = cart.map(item => {
      if (item.nombre === nombre) {
        return {
          ...item,
          cantidad: item.cantidad + 1,
        }
      }
      return item
    })
    setCart(newCart)
  }

  const handleDelete = () => {
    const newCart = cart.filter(item => item.nombre !== nombre)
    setCart(newCart)
  }

  const handleSubstract = () => {
    if (cantidad === 1) {
      handleDelete()
      return
    }
    const newCart = cart.map(item => {
      if (item.nombre === nombre) {
        return {
          ...item,
          cantidad: item.cantidad - 1,
        }
      }
      return item
    })
    setCart(newCart)
  }

  const handleViewProduct = () => {
    navigate(`/pizzas/${id}`)
  }

  return (
    <div>
      <div className='item-carrito shadow rounded mb-2 '>
        <div className='d-flex justify-content-between align-items-center'>
          <div
            className='item-descripcion'
            style={{ cursor: 'pointer' }}
            onClick={handleViewProduct}
          >
            <img
              alt='pizza'
              src={imagen}
            />
            <div className='ms-4'>
              <h3 className='text-capitalize'>{nombre}</h3>
              {ingredientes && (
                <span className='text-capitalize'>
                  {ingredientes.join(', ')}
                </span>
              )}
            </div>
          </div>

          <div className='item-detalle'>
            <p className='my-0'>{formatCurrency(precio)}</p>
            <button
              className='mx-2 btn gris btn-operacion'
              onClick={handleSubstract}
            >
              -
            </button>
            <p className='mx-2 my-0'>{cantidad}</p>
            <button
              className='ms-2 btn gris btn-operacion'
              onClick={handleAdd}
            >
              +
            </button>
          </div>
        </div>
        {cantidad > 0 && (
          <div className='ms-1 d-flex justify-content-end'>
            <button
              className='btn'
              onClick={handleDelete}
            >
              Eliminar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
