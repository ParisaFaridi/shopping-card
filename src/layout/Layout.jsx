import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const state = useSelector((store) => store.cart);
  return (
    <div>
      <header className={styles.header}>
        <Link to="/products">Shopping Cart</Link>
        <Link to="/cart">
          <div>
            <PiShoppingCartSimpleBold />
            { !!state.itemsCounter &&<span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}> Developed with love by Parisa</footer>
    </div>
  );
}

export default Layout;
