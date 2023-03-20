import { Carousel, Footer, Nvbar } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Pizza, NotFound, Cart } from './views'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import CartContext from './my_context'
import getData from './helpers/getData'



function App () {

  const [data, setData] = useState( [] )
  const [cart, setCart] = useState( [] )

  const getPizzas = async () => {
    const pizzas = await getData()
    setData( pizzas )
  }

  useEffect( () => {
    getPizzas()
  }, [] )

  const sharedStates = {
    data,
    setData,
    cart,
    setCart,
  }

  return (
    <div className="App">
      <CartContext.Provider value={ sharedStates }>
        <BrowserRouter>
          <Nvbar />
          <Carousel />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/pizzas/:id" element={ <Pizza /> } />
            <Route path='/carrito' element={ <Cart /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
