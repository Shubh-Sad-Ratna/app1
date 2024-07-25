
const Cart=(props)=>{
    const cartItems=(
        <ul >
            {[{id:'c1',name:"sushi",amount:2,price:14}].map((item)=>(
                <li>{item.name}</li>
            ))}
        </ul>
    )
    return(
        <div>
            {cartItems}
            <div>
                <span>Total Amount</span>
                <span>35</span>
            </div>
            <div>
                <button>Close</button>
                <button>Order</button>
            </div>
        </div>
    )
}
export default Cart;