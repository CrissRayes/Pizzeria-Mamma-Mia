import { Carousel, Footer, Nvbar } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Pizza, NotFound, Cart } from './views'
import 'bootstrap/dist/css/bootstrap.min.css'


function App () {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
