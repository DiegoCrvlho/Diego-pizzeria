import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1 className="text-center p-3 text-warning">Diego's Pizzeria</h1>;
}

function Menu() {
  // const pizzaData = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <div className="container">
      {numPizzas > 0 ? (
        <>
          <h2 className="text-center mb-2 mt-3">Our Menu</h2>
          <p className="text-center mb-5">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <div className="row">
            {pizzaData.map((pizza, index) => (
              <div key={index} className="col mb-3">
                <Pizzas pizzasObj={pizza} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center fw-bold text-danger">
          We are fixing some bugs, come back later! :)
        </p>
      )}
    </div>
  );
}

function Pizzas({ pizzasObj }) {
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={pizzasObj.photoName} alt="pizzas" />
        <div className="card-body">
          <p className="card-title">{pizzasObj.name}</p>
          <p className="card-text">{pizzasObj.ingredients}</p>
          <p>Price ${pizzasObj.price}</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 12;
  const close = 22;
  const isOpen = hour >= open && hour <= close;
  console.log(isOpen, hour);
  return (
    <footer className="text-center">
      {isOpen ? (
        <>
          <p>We're open until {close}:00, come visit us or order online</p>
          <button className="btn mb-5 p-3 bg-warning">Order</button>
        </>
      ) : (
        <p>
          We're closed! Our regular hours of operation are from {open}:00 to{" "}
          {close}:00.
        </p>
      )}
    </footer>
  );
}

export default App;
