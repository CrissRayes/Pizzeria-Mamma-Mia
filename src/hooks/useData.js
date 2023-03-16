import { useState, useEffect } from 'react'
import getData from '../helpers/getData'

const useData = () => {
  const [data, setData] = useState( [] )

  const getPizzas = async () => {
    const pizzas = await getData()
    setData( pizzas )
  }

  useEffect( () => {
    getPizzas()
  }, [] )

  return { data }
}

export default useData