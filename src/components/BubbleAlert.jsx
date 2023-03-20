import { FaShoppingCart } from 'react-icons/fa'

export const BubbleAlert = ({ cantidad }) => {
  const getNumber = cantidad => {
    if (!cantidad) return ''
    return cantidad > 9 ? '9+' : cantidad
  }

  return (
    <div className='carrito'>
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
