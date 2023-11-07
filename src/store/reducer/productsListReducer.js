const initialState = {
  data: [],
  initialData: [],
  isLoading: false,
  error: null,
};

const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
const APPLY_PRICE_FILTER = "APPLY_PRICE_FILTER";
const APPLY_DISCOUNT_FILTER = "APPLY_DISCOUNT_FILTER";
const RESET_FILTER = "RESET_FILTER";
const SORTED_PRODUCTS_FILTER = "SORTED_PRODUCTS_FILTER";

const finalPrice = (elem) => {
  return elem.discount_price !== null ? elem.discount_price : elem.price;
};

const discountCalculation = (elem) => {
  if (elem.discount_price) {
    return (((elem.price - elem.discount_price) / elem.price) * 100).toFixed(0);
  } else {
    return null;
  }
};

export const productsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      };
    case FETCH_PRODUCTS_SUCCESS:
      const productsList = action.payload.map((product) => ({
        ...product,
        isShowBySale: true,
        isShowByPrice: true,
        discount: discountCalculation(product),
      }));

      return {
        ...state,
        data: productsList,
        initialData: productsList,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case APPLY_PRICE_FILTER:
      const { min, max } = action.payload;
      const filteredProducts = state.data.map((product) => {
        product.isShowByPrice = true;
        if (product.price < min || product.price > max) {
          product.isShowByPrice = false;
        }
        return product;
      });

      return {
        ...state,
        data: filteredProducts,
      };

    case APPLY_DISCOUNT_FILTER:
      if (action.payload) {
        return {
          ...state,
          data: state.data.map((el) => {
            if (el.discount_price === null) {
              el.isShowBySale = false;
            }
            return el;
          }),
        };
      } else {
        return {
          ...state,
          data: state.data.map((el) => {
            el.isShowBySale = true;
            return el;
          }),
        };
      }

    case SORTED_PRODUCTS_FILTER:
      const sortedProducts = [...state.data];
      if (action.payload === "by default") {
        return {
          ...state,
          data: state.initialData,
        };
      } else if (action.payload === "price, low to high") {
        sortedProducts.sort(
          (crElem, nxElem) => finalPrice(crElem) - finalPrice(nxElem)
        );
      } else if (action.payload === "price, high to low") {
        sortedProducts.sort(
          (crElem, nxElem) => finalPrice(nxElem) - finalPrice(crElem)
        );
      } else if (action.payload === "discount, low to high") {
        sortedProducts.sort((crElem, nxElem) => {
          if (crElem.discount === null && nxElem.discount === null) {
            return 0;
          }
          if (crElem.discount === null) {
            return 1;
          }
          if (nxElem.discount === null) {
            return -1;
          }
          return crElem.discount - nxElem.discount;
        });
      } else if (action.payload === "discount, high to low") {
        sortedProducts.sort((crElem, nxElem) => {
          if (crElem.discount === null && nxElem.discount === null) {
            return 0;
          }
          if (crElem.discount === null) {
            return 1;
          }
          if (nxElem.discount === null) {
            return -1;
          }
          return nxElem.discount - crElem.discount;
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
      return {
        ...state,
        data: state.initialData,
      };

    default:
      return state;
  }
};

export const fetchProductsRequestAction = (payload) => ({
  type: FETCH_PRODUCTS_REQUEST,
  payload,
});
export const fetchProductsSuccessAction = (payload) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload,
});
export const fetchProductsFailureAction = (payload) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload,
});
export const applyPriceFilterAction = (filterValues) => ({
  type: APPLY_PRICE_FILTER,
  payload: filterValues,
});
export const applyDiscountFilterAction = (payload) => ({
  type: APPLY_DISCOUNT_FILTER,
  payload,
});
export const sortedProductsFilterAction = (payload) => ({
  type: SORTED_PRODUCTS_FILTER,
  payload,
});
export const resetFilterAction = () => ({ type: RESET_FILTER });
