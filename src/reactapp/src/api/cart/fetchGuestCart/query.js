import cartBillingAddrInfo from '../utility/query/cartBillingAddrInfo';
import cartItemsInfo from '../utility/query/cartItemsInfo';
import cartPaymentMethodsInfo from '../utility/query/cartPaymentMethodsInfo';
import cartPriceInfo from '../utility/query/cartPriceInfo';
import cartShippingAddrInfo from '../utility/query/cartShippingAddrInfo';

export const GET_GUEST_CART_QUERY = `
query getGuestCartQuery($cartId: String!) {
  cart(cart_id: $cartId) {
    id
    email
    ${cartItemsInfo}
    ${cartBillingAddrInfo}
    ${cartShippingAddrInfo}
    ${cartPriceInfo}
    ${cartPaymentMethodsInfo}
  }
}`;