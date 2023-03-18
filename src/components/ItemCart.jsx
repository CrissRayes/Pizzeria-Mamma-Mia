import img1080x1080 from '../assets/img/img1080x1080.png'
export const ItemCart = () => {
  return (
    <div>
      <div className='item-carrito shadow rounded mb-2 d-flex justify-content-between align-items-center'>
        <div className='item-descripcion'>
          <img
            alt='pizza'
            src={img1080x1080}
          />
          <p className='ms-2'>Nombre Pizza</p>
        </div>
        <div className='item-detalle'>
          <p className='my-0'>$20.990</p>
          <button className='mx-2 btn btn-danger'>-</button>
          <p className='mx-2 my-0'>1</p>
          <button className='ms-2 btn btn-primary'>+</button>
        </div>
      </div>
    </div>
  )
}
