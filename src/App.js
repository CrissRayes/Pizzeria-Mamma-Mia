import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <h1>Todas las pizzas</h1> } />
          <Route path=":pizzaId" element={ <h1>Una pizza</h1> } />
          <Route path="*" element={ <h1>404</h1> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
