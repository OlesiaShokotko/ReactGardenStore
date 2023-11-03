const initialState = JSON.parse(localStorage.getItem("cartProduct")) ?? [];


const setShoppingCartProduct = (cartProduct) => {
  localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
};


const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = 'REMOVE_FROM_TRASH';
const CLEAR_SHOPPING_CART = "CLEAR_SHOPPING_CART";
const CART_ITEM_INCREMENT = "CART_ITEM_INCREMENT";
const CART_ITEM_DECREMENT = "CART_ITEM_DECREMENT";


export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productInCart = state.find(
        (product) => product.id === action.payload
      );

      if (productInCart === undefined) {
        const updatedCart = [...state, { id: action.payload, count: 1 }];
        setShoppingCartProduct(updatedCart);
        return updatedCart;
      } else {
        productInCart.count++;
        setShoppingCartProduct(state);
        return [...state];
      }

    case REMOVE_FROM_CART:
      const updatedCart = state.filter(
        (product) => product.id !== action.payload
      );
      setShoppingCartProduct(updatedCart);
      return updatedCart;

    case CLEAR_SHOPPING_CART:
        setShoppingCartProduct([]);
        return [];

    case CART_ITEM_INCREMENT:
        const IncrCart = state.map((product) => (
            product.id === action.payload ? {...product, count: product.count + 1} : product
        ));
        setShoppingCartProduct(IncrCart)
        return IncrCart;

    case CART_ITEM_DECREMENT:
        const decrProduct = state.find(product => product.id === action.payload)
        if(decrProduct.count > 1){
           const updatedCart = state.map(product => (
            product.id === action.payload ? {...product, count: product.count - 1} : product
           ))
            setShoppingCartProduct(updatedCart)
            return updatedCart
        } else {
            const updatedCart = state.filter(product => product.id !== action.payload)
            setShoppingCartProduct(updatedCart)
            return updatedCart
        }

    default:
      return state;
  }
};


export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload });
export const removeFromCartAction = (payload) => ({type:REMOVE_FROM_CART, payload});
export const clearShoppingCartAction = () => ({type: CLEAR_SHOPPING_CART})
export const cartItemIncrementAction = (payload) => ({type: CART_ITEM_INCREMENT, payload})
export const cartItemDecrementAction = (payload) => ({type: CART_ITEM_DECREMENT, payload})
