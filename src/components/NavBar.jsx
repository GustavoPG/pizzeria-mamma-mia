import {React, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { PizzasContext } from '../contexts/PizzasContext';

const NavBar = () => {
  const { totalCarrito } = useContext(PizzasContext);

  //Formatear número en miles
  function formatearNumero(numero){
    return new Intl.NumberFormat("es-CL").format(numero);
}

  return (
      <Nav className="justify-content-end text-white p-3 nav my-bg" activeKey="/home">
        <NavLink
          className={({ isActive }) => isActive ? "active me-auto" : "me-auto"}
          to="/"><span className='me-auto'>🍕 Pizzería Mamma Mia!</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "active mx-5" : "mx-5"}
          to="/carrito">🛒 $ {formatearNumero(totalCarrito)}
        </NavLink>
      </Nav>
  );
};

export default NavBar;