import myImage from '/333.png';

const Banner = () => {
    return (
        <header className="container-banner">
            <img src={myImage} className='my-banner' alt="pizzas" />
            <div className="texto-encima">
                <h2>¡Pizzería Mamma Mia!</h2>
                <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3>
            </div>
        </header>
    );
};

export default Banner;