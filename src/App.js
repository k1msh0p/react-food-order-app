import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  }
  const hideCarthandler = () => {
    setCartIsShown(false);
  }


  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCarthandler}/>}
      <Header onShowCart={showCarthandler}/>
      <main>
        <Meal/>
      </main>
    </CartProvider>
  );
}

export default App;
