import { createContext, useState, useEffect } from 'react';

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [dataPizzas, setDataPizzas] = useState(null);
  const [totalCarrito, setTotalCarrito] = useState(0);


  const fetchData = async () => {
    try {
      const response = await fetch('/pizzas.json');
      if (!response.ok) {
        throw new Error("Error al leer datos");
      }
      const data = await response.json();
      const newData = [];
      data.forEach((pizza => {
        newData.push({ ...pizza, itemCount: 0 })
      }));
      setDataPizzas(newData);
      //console.log(dataPizzas);
    } catch (error) {
      console.log("Error al traer datos", error);
    }
  };

  useEffect(() => {
    fetchData();
    //console.log(dataPizzas);
  }, []);

  useEffect(() => {
    if (dataPizzas !== null) {
      calcularTotal();
    }
  }, [dataPizzas]);

  // Agregar pizza
  const addPizza = (id) => {
    const updatedCart = []
    dataPizzas.forEach((pizza) => {
      if (pizza.id === id) {
        updatedCart.push(
          { ...pizza, itemCount: pizza.itemCount + 1 }
        )
      } else {
        updatedCart.push(pizza);
      }
    })
    setDataPizzas(updatedCart);
  }

  //Eliminar pizza
  const removePizza = (id) => {
    const updatedCart = []
    dataPizzas.forEach((pizza) => {
      if (pizza.id === id && pizza.itemCount > 0) {
        updatedCart.push(
          { ...pizza, itemCount: pizza.itemCount - 1 }
        )
      } else {
        updatedCart.push(pizza);
      }
    })
    setDataPizzas(updatedCart);
  }

  //Sumar total a pagar
  const calcularTotal = () => {
    let total = 0;
    dataPizzas.forEach(pizza => {
      total += pizza.price * pizza.itemCount;
    });
    setTotalCarrito(total);
  };

  return (
    <PizzasContext.Provider value={{ dataPizzas, addPizza, removePizza, totalCarrito }}>
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;