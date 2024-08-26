import { useState } from "react";

import { MovieCartContext, ThemeContext } from "./context";
import Page from "./Page";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <MovieCartContext.Provider value={{ cartData, setCartData }}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Page />
      </ThemeContext.Provider>
    </MovieCartContext.Provider>
  );
};

export default App;
