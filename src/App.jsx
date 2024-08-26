import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { MovieCartContext } from "./context";

const App = () => {
  const [cartData, setCartData] = useState([]);
  return (
    <MovieCartContext.Provider value={{ cartData, setCartData }}>
      <Header />
      <Main />
      <Footer />
    </MovieCartContext.Provider>
  );
};

export default App;
