const getData = async () => {
  const url = 'http://localhost:3000/pizzas.json'
  const response = await fetch( url )
  const data = await response.json()
  const pizzas = data.map( pizza => (
    {
      id: pizza.id,
      nombre: pizza.name,
      precio: pizza.price,
      imagen: pizza.img,
      descripcion: pizza.desc,
      ingredientes: pizza.ingredients,
    }
  ) )

  return pizzas
}

export default getData