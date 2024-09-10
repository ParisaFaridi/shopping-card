import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
import { useCart } from "../context/CartContext";
import styles from "./CartPage.module.css"
import EmptyBasket from "../components/EmptyBasket";

function CartPage() {
  const [state,dispatch] = useCart()
  const clickHandler =(type,payload)=> dispatch({type,payload})
  
  if(!state.itemsCounter){
    return <div className={styles.empty}>
      <EmptyBasket/>
      </div>
  }
  
  
  return (
    <div className={styles.container}>
      <BasketSideBar quantity={state.itemsCounter} total ={state.total} status={state.checkout} clickHandler={clickHandler}/>
    
      <div className={styles.products}>
        {
        state.selectedItems.map(product =>(
          <BasketCard key={product.id} data={product} clickHandler={clickHandler}/>
        ))
        }
      </div>
      </div>
  )
}

export default CartPage