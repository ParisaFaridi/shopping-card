import {createContext, useContext, useReducer } from "react"
import { sumProducts } from "../helpers/Helper";
const CartContext = createContext();

const initialValue ={
  selectedItems:[],
  itemsCounter:0,
  total:0,
  checkout:false
}
const reducer =(state,action)=>{
    switch(action.type){
      case "ADD_ITEM":
        if(!state.selectedItems.find((item=> item.id=== action.payload.id)))
          state.selectedItems.push({...action.payload, quantity:1})
        return{
            ...state,
            ...sumProducts(state.selectedItems),
            checkout:false,
          };
    case "DELETE_ITEM":
     let newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        selectedItems:[...newSelectedItems],
        ...sumProducts(newSelectedItems),
      }
    case "INCREASE":
      const index = state.selectedItems.findIndex(item=> item.id===action.payload.id)
      state.selectedItems[index].quantity++;
      return{
        ...state,
        ...sumProducts(state.selectedItems)
      }
    case "DECREASE":
      state.selectedItems[state.selectedItems.findIndex(item=> item.id===action.payload.id)].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems)
      }
    case "CHECKOUT":
      return{
        selectedItems:[],
        itemsCounter:0,
        total:0,
        checkout:true
      }  
    default: 
      throw new Error("Invalid Action!")
    }
}

function CartProvider({children}) {
    const [state,dispatch]= useReducer(reducer,initialValue)

  return (
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
  )


}
const useCart =()=>{
    const {state,dispatch}= useContext(CartContext);
    return [state,dispatch]
}

export default CartProvider
export {useCart}