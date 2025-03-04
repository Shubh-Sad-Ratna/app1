import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import React,{useState} from "react";
import CardProvider from "./store/Card-provider";
function App() {
  const [cartIsShown,setCartIsShown]=useState(false)
  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <>
      {cartIsShown&&<Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
      <Meals></Meals>
      </main>
      
    </>
  );
}

export default App;
