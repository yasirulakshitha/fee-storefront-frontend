import { createContext } from "react";

export const CartContext = createContext({cart:[], updateCart: (product) => {}, clearCart: () => {}});