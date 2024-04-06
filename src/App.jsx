import './App.css';
import PizzasProvider from './contexts/PizzasContext';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
//import Footer from './components/Footer';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Pizza from './views/Pizza';
import Carrito from './views/Carrito';

function App() {
  return (
    <PizzasProvider>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pizza/:id"
          element={<Pizza />}
        />
        <Route
          path="/carrito"
          element={<Carrito />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      {/* <Footer /> */}
    </PizzasProvider>
  );
};

export default App; 