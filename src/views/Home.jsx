import useData from '../hooks/useData'

export const Home = () => {
  const { data } = useData()

  return (
    <>
      {data.map(pizza => (
        <div key={pizza.id}>
          <h2>{pizza.nombre}</h2>
          <p>{pizza.precio}</p>
          <p>{pizza.descripcion}</p>
          <ul>
            {pizza.ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
