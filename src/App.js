// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import InterNoPayGPT from './Pages/InterNoPayGPT';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/internopaygpt' element={<InterNoPayGPT />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
