import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  }
  const hideCarthandler = () => {
    setCartIsShown(false);
  }


  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={hideCarthandler}/>}
      <Header onShowCart={showCarthandler}/>
      <main>
        <Meal/>

      </main>
    </Fragment>
  );
}

export default App;
