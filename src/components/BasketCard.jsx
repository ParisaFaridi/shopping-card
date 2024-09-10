import { MdDeleteOutline } from "react-icons/md"
import { shortenText } from "../helpers/Helper"
import styles from "./BasketCard.module.css"

function BasketCard({data,clickHandler}) {
    
  return (
    <div className={styles.card}>
        <img src={data.image} alt={data.title}/>
        <p>{shortenText(data.title)}</p>
        <div className={styles.actions}>
            {data.quantity===1 && (
                <button onClick={()=>clickHandler("DELETE_ITEM",data)}>
                    <MdDeleteOutline />
                </button>
            )}
            {data.quantity > 1 && <button onClick={()=>clickHandler("DECREASE",data)}>-</button>}
            <span>{data.quantity}</span>
            <button onClick={()=>clickHandler("INCREASE",data)}>+</button>
        </div>
        
    </div>
  )
}

export default BasketCard