import {
  setBillingAddressRequest,
  setCustomerAddrAsCartBillingAddrRequest,
} from '../../../api';
import { SET_CART_INFO } from '../cart/types';

export async function setBillingAddressAction(dispatch, billingAddress) {
  try {
    const cartInfo = await setBillingAddressRequest(billingAddress);

    dispatch({
      type: SET_CART_INFO,
      payload: cartInfo,
    });
  } catch (error) {
    // @todo error message needs to be implemented
  }
}

export async function setCustomerAddrAsBillingAddrAction(
  dispatch,
  addressId,
  sameAsShipping
) {
  try {
    const cartInfo = await setCustomerAddrAsCartBillingAddrRequest(
      addressId,
      sameAsShipping
    );

    dispatch({
      type: SET_CART_INFO,
      payload: cartInfo,
    });
  } catch (error) {
    // @todo error message
  }
}