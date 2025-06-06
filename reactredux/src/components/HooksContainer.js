import { useSelector, useDispatch } from "react-redux";
import { orderPizza } from "./redux/index";

function HooksContainer() {
  const pizzaBase = useSelector((state) => state.pizzaBase);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h2 className="text">Number of pizzabases available = {pizzaBase}</h2>
      <button className="btn" onClick={() => dispatch(orderPizza())}>
        OrderPizza
      </button>
    </div>
  );
}
export default HooksContainer;
