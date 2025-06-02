import { Order_Burger } from "./BurgerType";

export function orderBurger(number = 1) {
  return {
    type: Order_Burger,
    payload: number,
  };
}
