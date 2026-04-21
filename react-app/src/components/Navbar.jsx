import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>Fitness Tracker</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;