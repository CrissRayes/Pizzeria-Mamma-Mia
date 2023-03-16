import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Pizza, NotFound } from './views'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path=":pizzaId" element={ <Pizza /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
