import { Carousel, Footer, Nvbar } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Pizza, NotFound, Cart } from './views'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import CartContext from './my_context'


function App () {

  const [cart, setCart] = useState( [] )




  return (
    <div className="App">
      <CartContext.Provider value={ { cart, setCart } }>
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
