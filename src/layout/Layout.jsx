import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { Link } from "react-router-dom"
import styles from "./Layout.module.css"
import { useCart } from "../context/CartContext"

function Layout({children}) {

const [state] = useCart()
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
  )
}

export default Layout