const Card = ({ id, nombre, precio, descripcion, ingredientes, imagen }) => {
  return (
    <div
      className='card'
      style={{ width: '18rem' }}
    >
      <img
        src={imagen}
        className='card-img-top'
        alt={nombre}
      />
      <div className='card-body'>
        <h5 className='card-title text-capitalize'>{nombre}</h5>
        <div className='card-text'>
          <ul>
            {ingredientes.map((ingrediente, index) => (
              <li
                className=''
                key={index}
              >
                Icono {ingrediente}
              </li>
            ))}
          </ul>
        </div>
        <button
          href=''
          className='btn btn-primary'
        >
          Go somewhere
        </button>
      </div>
    </div>
  )
}

export default Card
