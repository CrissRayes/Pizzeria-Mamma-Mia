import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const BubbleAlert = ({ cantidad }) => {
  const navigate = useNavigate()
  const getNumber = cantidad => {
    if (!cantidad) return ''
    return cantidad > 9 ? '9+' : cantidad
  }

  const handleGoToCart = () => {
    navigate('/carrito')
  }

  return (
    <div
      className='carrito'
      onClick={handleGoToCart}
      style={{ cursor: 'pointer' }}
    >
      <FaShoppingCart
        className='carrito-icon'
        size={40}
      />
      {cantidad > 0 && (
        <div className='cantidad-carrito'>{getNumber(cantidad)}</div>
      )}
    </div>
  )
}
