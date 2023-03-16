import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Pizza, NotFound } from './views'
import 'bootstrap/dist/css/bootstrap.min.css'


function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/pizza/:id" element={ <Pizza /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
