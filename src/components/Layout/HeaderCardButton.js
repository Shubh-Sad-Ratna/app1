import CardContext from "../../store/cart-context";
import React,{useContext} from "react";
const HeaderCardButton=(props)=>{
    const cartCtx=useContext(CardContext)
    const numberOfCartItems=cartCtx.item.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);
 return(
    <button onClick={props.onClick}>
        <span>CARD</span>
        <span>{numberOfCartItems}</span>
    </button>
 )
}
export default HeaderCardButton;