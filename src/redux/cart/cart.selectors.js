import {
    createSelector
} from 'reselect'; // we imported reselect pkg

//two imput selectors: 1. input, 2.output (uses input to build itself)

//input - gets whole state, returns slice
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
        accumalatedQunatity + cartItem.quantity, 0)
);