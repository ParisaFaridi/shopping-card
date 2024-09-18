import { TbChecklist } from "react-icons/tb";
import styles from "./BasketSideBar.module.css";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import { checkout } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

function BasketSideBar({ quantity, total, status }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total: </p>
        <span>{total}$</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{quantity}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!status && "Pending..."}</span>
      </div>
      <button onClick={() => dispatch(checkout())}>Checkout</button>
    </div>
  );
}

export default BasketSideBar;
