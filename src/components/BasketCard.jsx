import { MdDeleteOutline } from "react-icons/md"
import { shortenText } from "../helpers/Helper"

function BasketCard({data,clickHandler}) {
    console.log("mm")
  return (
    <div>
        <img src={data.image} alt={data.title}/>
        <p>{shortenText(data.title)}</p>
        <div>
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