import pizzaData from "../public/data";
import "./index.css";

// console.log(pizzaData);
// const [firstPizza, secondPizza, thirdPizza] = pizzaData;

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine, 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <h1>Please we&rsquo;re working on our Menu. Come back later!</h1>
      )}

      {/* <Pizza
        name={firstPizza.name}
        ingredients={firstPizza.ingredients}
        photoName={firstPizza.photoName}
        price={firstPizza.price}
      />
      <Pizza
        name={secondPizza.name}
        ingredients={secondPizza.ingredients}
        photoName={secondPizza.photoName}
        price={secondPizza.price}
      />
      <Pizza
        name={thirdPizza.name}
        ingredients={thirdPizza.ingredients}
        photoName={thirdPizza.photoName}
        price={thirdPizza.price}
      /> */}
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <div className="order">
            <p>
              We&rsquo;re open until {closedHour}:00. Come visit us or order
              online
            </p>
            <button className="btn">Order</button>
          </div>
        ) : (
          <p>Currently closed. Come back at {openHour}:00.</p>
        )}
      </footer>
    </>
  );
};

const Pizza = ({ pizzaObj }) => {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
};

export default App;
