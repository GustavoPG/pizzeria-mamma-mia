import { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { PizzasContext } from '../contexts/PizzasContext';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';

const Home = () => {
    const { dataPizzas, addPizza } = useContext(PizzasContext);
    const navigate = useNavigate();

    const handleSelectChange = (id) => {
        if (id !== 'pokemones' && id !== '') {
            navigate(`/pizza/${id}`);
        }
    };

    const handleAddButton = (id) => {
        addPizza(id);
    }

    //Formatear número en miles
    function formatearNumero(numero) {
        return new Intl.NumberFormat("es-CL").format(numero);
    }

    if (!dataPizzas) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Banner />
            <Container>
                <div className='row d-flex justify-content-around gy-5 mb-5'>
                    {dataPizzas.map(pizza => (
                        <div className="col-6 col-md-4 col-lg-3 border mx-1 pb-2" key={pizza.id}>
                            <img src={pizza.img} className='img-fluid' />
                            <h3 className='text-center my-auto'>{pizza.name}</h3>
                            <hr />
                            <Row className='col-sm-10 mx-auto'>
                                <h5>Ingredientes:</h5>
                                <ul className='ms-2'>
                                    {pizza.ingredients.map((ingredient, index) => (
                                        <li key={index}>🍕 {ingredient}</li>
                                    ))}
                                </ul>
                            </Row>
                            <hr />
                            <Row>
                                <h4 className='text-center'>$ {formatearNumero(pizza.price)}</h4>
                            </Row>
                            <Row className='d-flex justify-content-around'>
                                <button className='btn btn-info col-sm-5 text-white' onClick={() => handleSelectChange(pizza.id)}>Ver más 👀</button>
                                <button className='btn btn-danger col-sm-5' onClick={() => handleAddButton(pizza.id)}>Añadir 🛒</button>
                            </Row>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Home;