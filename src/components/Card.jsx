import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb"
import { productQuantity, shortenText } from "../helpers/Helper"
import styles from "./Card.module.css"
import { Link} from 'react-router-dom'
import { useCart } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
function Card({data}) {

    const {image,title,id,price}=data;
    const [state,dispatch] = useCart();
    const quantity= productQuantity(state,id)

    const addToCartHandler = (type)=>{
      dispatch({type,payload:data})
    }
  return (
    <div className={styles.card}>
        <img src={image}/>
        <h3>{shortenText(title)}</h3>
        <p>{price}$</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}>
            <TbListDetails/>
            </Link>
            <div>
            {quantity===1 &&
              (<button onClick={()=>addToCartHandler("DELETE_ITEM")}>
                <MdDeleteOutline/>
              </button>)
            }
            { quantity > 1 &&
            (<button onClick={()=>addToCartHandler("DECREASE")}>-</button>)}
            {quantity !==0 && <span>{quantity}</span>}
            {quantity===0 ?
              <button onClick={()=>addToCartHandler("ADD_ITEM")}>
                <TbShoppingBagCheck/>
            </button>
            :
              <button onClick={()=>addToCartHandler("INCREASE")}>
                +
              </button>
            }
            
            
            </div>
        </div>
        </div>
  )
}
export default Card