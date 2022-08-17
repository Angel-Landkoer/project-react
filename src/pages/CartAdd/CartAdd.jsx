// import hooks
import { useContext } from "react";
import { Link } from "react-router-dom";

// import component
import { CardsNFT } from "../../components/CardsNFT/CardsNFT";
import { CartContext } from "../../Context/CartContext";

// import styles
import "./CartAdd.scss";

export function CartAdd() {
  const { cartProducts, removeCard, booleanToggle } = useContext(CartContext);

  return (
    <>
      <header>
        <section className="headerCartAdd">
          <h1>Cart Add</h1>
        </section>
      </header>
      <main>
        <section className="mainCartAdd">
          {booleanToggle ? (
            cartProducts.map((item) => {
              return (
                <div key={item.id}>
                  <CardsNFT product={item} />
                  <button
                    onClick={() => removeCard(item.id)}
                    className="btnRemove"
                  >
                    Eliminar
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              );
            })
          ) : (
            <div className="noCards">
              <span
                style={{
                  color: "white",
                  padding: "10px",
                  margin: "10px",
                  display: "block",
                }}
              >
                No hay producto en el carrito
              </span>
              <Link to="/">
                <button>Volver al home</button>
              </Link>
            </div>
          )}
          {cartProducts.map((item) => {
            return (
              <div key={item.id}>
                <CardsNFT product={item} />
                <button
                  onClick={() => removeCard(item.id)}
                  className="btnRemove"
                >
                  Eliminar
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
