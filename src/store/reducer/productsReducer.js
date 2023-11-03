const initialState = {
  data: [],
  isLoading: false,
};

const LOADING_PRODUCTS_LIST = "LOADING_PRODUCTS_LIST";
const ADD_NEW_PRODUCTS_LIST = "ADD_NEW_PRODUCTS_LIST";
const APPLY_PRICE_FILTER = "APPLY_PRICE_FILTER";
const APPLY_DISCOUNT_FILTER = "APPLY_DISCOUNT_FILTER";
const RESET_FILTER = "RESET_FILTER";
const SORTED_PRODUCTS_FILTER = "SORTED_PRODUCTS_FILTER";

const finalPrice = (elem) => {
  return elem.discount_price !== null ? elem.discount_price : elem.price;
};

const discountCalculation = (elem) => {
  return (((elem.price - elem.discount_price) / elem.price) * 100).toFixed(0);
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PRODUCTS_LIST:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ADD_NEW_PRODUCTS_LIST:
      return {
        ...state,
        data: action.payload,
      };

    case APPLY_PRICE_FILTER:
      const { minPrice, maxPrice } = action.payload;
      const filteredProducts = state.data.map((product) => {
        const productPrice = finalPrice(product);
        return {
          ...product,
          filtered:
            productPrice < parseFloat(minPrice) &&
            productPrice > parseFloat(maxPrice),
        };
      });
      return {
        ...state,
        data: filteredProducts,
      };

    case APPLY_DISCOUNT_FILTER:
      const newProductList = state.data.map((item) => ({
        ...item,
        show: item.discount_price !== null,
      }));

      return {
        ...state,
        data: newProductList,
      };

    case SORTED_PRODUCTS_FILTER:
      const sortedProducts = [...state.data];
      if (action.payload === "price, low to high") {
        sortedProducts.sort(
          (crElem, nxElem) => finalPrice(crElem) - finalPrice(nxElem)
        );
      } else if (action.payload === "price, high to low") {
        sortedProducts.sort(
          (crElem, nxElem) => finalPrice(nxElem) - finalPrice(crElem)
        );
      } else if (action.payload === "discount, low to high") {
        sortedProducts.sort(
          (crElem, nxElem) =>
            discountCalculation(crElem) - discountCalculation(nxElem)
        );
      } else if (action.payload === "discount, high to low") {
        sortedProducts.sort((crElem, nxElem) => {
          if (
            crElem.discount_price != null &&
            nxElem.discount_price != null
          ) {
            return discountCalculation(nxElem) - discountCalculation(crElem);
          }
        });
      } else if (action.payload === "alphabetically, A-Z") {
        sortedProducts.sort((crElem, nxElem) => {
          if (crElem.title > nxElem.title) return 1;
          if (crElem.title < nxElem.title) return -1;
          if (crElem.title === nxElem.title) return 0;
        });
      } else if (action.payload === "alphabetically, Z-A") {
        sortedProducts.sort((crElem, nxElem) => {
          if (crElem.title > nxElem.title) return -1;
          if (crElem.title < nxElem.title) return 1;
          if (crElem.title === nxElem.title) return 0;
        });
      }
      return {
        ...state,
        data: sortedProducts,
      };

    case RESET_FILTER:
      return state;

    default:
      return state;
  }
};

export const loadingProductsList = (payload) => ({
  type: LOADING_PRODUCTS_LIST,
  payload,
});
export const addNewProductsListAction = (payload) => ({
  type: ADD_NEW_PRODUCTS_LIST,
  payload,
});
export const applyPriceFilterAction = (filterValues) => ({
  type: APPLY_PRICE_FILTER,
  payload: filterValues,
});
export const applyDiscountFilterAction = () => ({
  type: APPLY_DISCOUNT_FILTER,
});
export const resetFilterAction = () => ({ type: RESET_FILTER });
export const sortedProductsFilterAction = (payload) => ({
  type: SORTED_PRODUCTS_FILTER,
  payload,
});
