import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
// import Sun from "../assets/icons/sun.svg";
import Moon from "../assets/icons/moon.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import { useState } from "react";
import CartDetails from "./CartDetails";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCart = () => {
    setShowCart(true);
  };

  const handleCartClose = () => {
    setShowCart(false);
  };

  return (
    <header>
      {showCart && <CartDetails onCartClose={handleCartClose} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a>
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={handleCart}
            >
              <img src={ShoppingCart} width="24" height="24" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
