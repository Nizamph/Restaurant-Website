import { useState } from "react";
import Header from "./components/Layout/Header";
import { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
     const [cartIsShown, setCartIsShown] = useState(false)

     const showCartHandler = () => {
         setCartIsShown(true)
     }

     const hideShowCartHandler = () => {
      setCartIsShown(false)
     }
  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideShowCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
     <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
