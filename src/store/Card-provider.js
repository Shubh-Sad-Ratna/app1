import CardContext from "./cart-context";
const CardProvider=(props)=>{
    const addItemToCardHandler=item=>{}
    const removeItemToCardHandler=id=>{}
    const cardContext={
        item:[],
        totalAmount:0,
        addItem:addItemToCardHandler,
        removeItem:removeItemToCardHandler
    }
    return(
    <CardContext.Provider value={cardContext}>
        {props.children}
    </CardContext.Provider>
    )
}
export default CardProvider;