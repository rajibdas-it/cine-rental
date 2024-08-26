import { useReducer, useState } from "react";

import { MovieCartContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/CartReducer";

const App = () => {
  // const [cartData, setCartData] = useState([]); //using normal state
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState); //using reducer

  return (
    <MovieCartContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Page />
      </ThemeContext.Provider>
    </MovieCartContext.Provider>
  );
};

export default App;
