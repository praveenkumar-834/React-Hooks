import "./CartModel.css";

const CartModel = ({ cart, closeCart, removeFromCart }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Cart Items</h2>
          <button onClick={closeCart}>X</button>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} />
              <div>
                <h4>{item.title}</h4>
                <p>₹ {item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartModel;
