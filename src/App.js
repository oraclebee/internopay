// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import InterNoPayGPT from './Pages/InterNoPayGPT';
import Layout from './Components/shared/layout';
import Industries from './Pages/IndustriesPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/internopaygpt' element={<InterNoPayGPT />} />
          <Route path='*' element={<Home />} />
          <Route path='*' element={<Industries />} />
          </Route>
          </Routes>
          </BrowserRouter>
          </div>
        );
      }
      
      export default App;
      
   //   <Route path='/industries' element={<Industries />} />