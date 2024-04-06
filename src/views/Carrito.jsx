import { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { PizzasContext } from '../contexts/PizzasContext';

const Carrito = () => {
    const { dataPizzas, removePizza, addPizza, totalCarrito } = useContext(PizzasContext);

    const handleAddButton = (id) => {
        addPizza(id);
    }

    const handleRemoveButton = (id) => {
        removePizza(id);
    }

    //Formatear número en miles
    function formatearNumero(numero) {
        return new Intl.NumberFormat("es-CL").format(numero);
    }

    if (!dataPizzas) {
        return <div>Loading...</div>;
    }

    // Validar si el carrito está vacío
    const carritoVacio = !dataPizzas || dataPizzas.every(pizza => pizza.itemCount === 0);


    return (
        <Container className="">
            <Row className="mt-5">
                <h1>Detalles del pedido:</h1>
            </Row>
            <div className='container'>
                {carritoVacio ? (
                    <div className="text-center mt-5">
                        <h3>¡Tu carrito está vacío!</h3>
                    </div>
                ) : (
                    dataPizzas.map(pizza => (
                        pizza.itemCount > 0 &&
                        <div className="d-flex justify-content-between my-3 pb-3 border-bottom" key={pizza.id}>
                            <div className='d-flex justify-content-start align-items-center'>
                                <img src={pizza.img} className='my-carrito-image' alt={pizza.name} />
                                <h4 className='text-center ms-5'>{pizza.name}</h4>
                            </div>
                            <div className='d-flex justify-content-end align-items-center'>
                                <h4 className='text-center mx-4 my-total'>$ {formatearNumero(pizza.price * pizza.itemCount)}</h4>
                                <button className='btn btn-primary my-button' onClick={() => handleAddButton(pizza.id)}> + </button>
                                <h4 className='text-center mx-4'>{pizza.itemCount}</h4>
                                <button className='btn btn-danger my-button' onClick={() => handleRemoveButton(pizza.id)}> - </button>
                            </div>
                        </div>
                    ))
                )}
                {!carritoVacio && (
                    <div className="text-center mt-4">
                        <h3>Total: ${formatearNumero(totalCarrito)}</h3>
                    </div>
                )}
                {!carritoVacio && (
                    <Row>
                        <button className='btn btn-success w-25 mx-auto'>Ir a Pagar</button>
                    </Row>
                )}
            </div>
        </Container>
    );
};

export default Carrito;