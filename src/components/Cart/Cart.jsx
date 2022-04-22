import { useCart } from "./CartContext";

const Card = ({ image, title, children }) => {
  const cart = useCart();

  console.log(cart);

  const addNewProduct = () => {
    cart.addItem({ name: "Bicicleta", price: 10.0 });
  };

  return (
    <div>
      <button onClick={addNewProduct}>Añadir un producto</button>
      <img src={image} alt={title} />

      <div>
        <div>{title}</div>

        <p>{children}</p>
      </div>
    </div>
  );
};

export default Card;