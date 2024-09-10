import myImg from "../assets/empty-cart-illustration.png"

function EmptyBasket() {
  return (
    <div>
        <img src={myImg} alt="No Items in Cart!"/>
    </div>
  )
}

export default EmptyBasket