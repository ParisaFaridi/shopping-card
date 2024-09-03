import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb"
import { shortenText } from "../helpers/Helper"
import styles from "./Card.module.css"
import { Link} from 'react-router-dom'
function Card({data}) {
    const {image,title,id,price}=data;

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
            <button>
                <TbShoppingBagCheck/>
            </button>
            </div>
        </div>
        </div>
  )
}
export default Card