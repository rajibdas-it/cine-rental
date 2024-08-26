import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { MovieCartContext } from "./context";

const App = () => {
  return (
    <MovieCartContext.Provider>
      <Header />
      <Main />
      <Footer />
    </MovieCartContext.Provider>
  );
};

export default App;
