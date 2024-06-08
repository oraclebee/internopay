// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import InterNoPayGPT from './Pages/InterNoPayGPT';
import Layout from './Components/shared/layout';
import Industries from './Pages/IndustriesPage';
import EconomicsPage from './Pages/EconomicsPage';
import TechnologyPage from './Pages/TechnologyPage';
import PoliticsPage from './Pages/PoliticsPage';
import BusinessweekPage from './Pages/BusinessweekPage';
import OpinionPage from './Pages/OpinionPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/economics' element={<EconomicsPage />} />
          <Route path='/technology' element={<TechnologyPage />} />
          <Route path='/politics' element={<PoliticsPage />} />
          <Route path='/businessweek' element={<BusinessweekPage />} />
          <Route path='/opinion' element={<OpinionPage />} />
          <Route path='/internopaygpt' element={<InterNoPayGPT />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<Home />} />
          </Route>
          </Routes>
          </BrowserRouter>
          </div>
        );
      }
      
      export default App;
      
   //   <Route path='/industries' element={<Industries />} />