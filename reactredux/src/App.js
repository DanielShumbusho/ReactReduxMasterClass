import "./App.css";
import PizzaBox from "./components/PizzaBox";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import HooksContainer from "./components/HooksContainer";
import BurgerBox from "./components/BurgerBox";

function App() {
  return (
    <Provider store={store}>
      <PizzaBox />
      {/* <HooksContainer /> */}
      <BurgerBox />
    </Provider>
  );
}

export default App;
