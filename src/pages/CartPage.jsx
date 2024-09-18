import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
import styles from "./CartPage.module.css";
import EmptyBasket from "../components/EmptyBasket";
import { useSelector } from "react-redux";

function CartPage() {
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) {
    return (
      <div className={styles.empty}>
        <EmptyBasket />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSideBar
        quantity={state.itemsCounter}
        total={state.total}
        status={state.checkout}
      />

      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CartPage;
