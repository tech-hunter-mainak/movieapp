import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import "./css/navigation.css"
import MovieDetails from './pages/MovieDetails';
import Transactions from './pages/Transactions';
import Purchase from './pages/Purchase';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/movie' Component={MovieDetails}></Route>
        <Route path='/movie/purchase' Component={Purchase}></Route>
        <Route path='/account' Component={MovieDetails}></Route>
        <Route path='/transactions' Component={Transactions}></Route>
      </Routes>
    </Router>
  );
}

export default App;
