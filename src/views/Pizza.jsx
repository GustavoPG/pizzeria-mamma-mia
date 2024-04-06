import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzasContext } from '../contexts/PizzasContext';

const Pizza = () => {
  const { id } = useParams();
  const { dataPizzas, addPizza } = useContext(PizzasContext);

  if (!dataPizzas) {
    return <div>Loading...</div>;
  }

  const filteredPizza = dataPizzas.find(pizza => pizza.id === id);

  if (!filteredPizza) {
    return <div>Pizza no encontrada</div>;
  }

  const handleAddButton = (id) => {
    addPizza(id);
  }

  function formatearNumero(numero) {
    return new Intl.NumberFormat("es-CL").format(numero);
  }

  return (
    <div className='my-detalle-pizza col-sm-10 mx-auto'>
      <div>
        <img src={filteredPizza.img} alt={filteredPizza.name} />
      </div>
      <div>
        <h2>{filteredPizza.name}</h2>
        <hr />
        <p>Descripción: {filteredPizza.desc}</p>
        <h3>Ingredientes:</h3>
        <ul>
          {filteredPizza.ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <div className='d-flex justify-content-between align-items-center'>
          <h3>Precio: ${formatearNumero(filteredPizza.price)}</h3>
          <button className='btn btn-danger ml-auto' onClick={() => handleAddButton(id)}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;