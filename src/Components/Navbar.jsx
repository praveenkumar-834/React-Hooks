import "./Navbar.css";

const Navbar = ({ cartCount, openCart }) => (
  <nav className="navbar">
    <h1>Fake Store</h1>
    <button onClick={openCart}>Cart ({cartCount})</button>
  </nav>
);

export default Navbar;
