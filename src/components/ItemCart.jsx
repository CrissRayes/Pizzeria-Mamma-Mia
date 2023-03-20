import formatCurrency from '../helpers/formatCurrency'

export const ItemCart = ({ nombre, precio, cantidad, imagen }) => {
  return (
    <div>
      <div className='item-carrito shadow rounded mb-2 d-flex justify-content-between align-items-center'>
        <div className='item-descripcion'>
          <img
            alt='pizza'
            src={imagen}
          />
          <p className='ms-2 text-capitalize'>{nombre}</p>
        </div>
        <div className='item-detalle'>
          <p className='my-0'>{formatCurrency(precio)}</p>
          <button className='mx-2 btn btn-danger'>-</button>
          <p className='mx-2 my-0'>{cantidad}</p>
          <button className='ms-2 btn btn-primary'>+</button>
        </div>
      </div>
    </div>
  )
}
