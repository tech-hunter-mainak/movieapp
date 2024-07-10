import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import "./css/navigation.css"
import MovieDetails from './pages/MovieDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/movie' Component={MovieDetails}></Route>
      </Routes>
    </Router>
  );
}

export default App;
