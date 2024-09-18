import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { productQuantity, shortenText } from "../helpers/Helper";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrease,
  deleteItem,
  increase,
} from "../features/cart/cartSlice";
function Card({ data }) {
  
  const { image, title, id, price } = data;
  const dispatch = useDispatch();
  const state = useSelector((store) => store.cart);
  console.log(state);

  const quantity = productQuantity(state, id);

  return (
    <div className={styles.card}>
      <img src={image} />
      <h3>{shortenText(title)}</h3>
      <p>{price}$</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => dispatch(deleteItem(data))}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => dispatch(decrease(data))}>-</button>
          )}
          {quantity !== 0 && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => dispatch(addItem(data))}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => dispatch(increase(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Card;
