import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import DataProvider from './Context/DataContext';
import Asientos from './Pages/Asientos';
import MovieContextProvider from './Context/MovieContext';
import SelectedMovie from './Pages/SelectedMovie';
import Cine from './Pages/Cine';


function App() {
  return (
<MovieContextProvider>
    <DataProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/asientos' element={<Asientos/>}/>
      <Route path='/selectedMovie' element={<SelectedMovie/>}/>
      <Route path='/cine' element={<Cine/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </DataProvider>
    </MovieContextProvider>
  );
}

export default App;
