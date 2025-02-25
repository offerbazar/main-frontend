import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, setDeliveryFee, getCartAmount } =
    useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p className="text-lg font-medium">Sub Total</p>
          <p className="text-lg font-medium">
            {currency}&nbsp;
            {getCartAmount().toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="text-lg font-medium">Shipping Fee</p>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="shipping"
              id="sagolniya"
              onChange={() => setDeliveryFee(60)}
              checked={delivery_fee === 60}
              defaultChecked={true}
              className="custom-radio"
            />
            <label htmlFor="sagolniya">ছাগলনাইয়া</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="shipping"
              id="saradesh"
              onChange={() => setDeliveryFee(120)}
              checked={delivery_fee === 120}
              className="custom-radio"
            />
            <label htmlFor="saradesh">সারাদেশ</label>
          </div>

          <p className="text-lg font-medium">
            {currency}&nbsp;
            {delivery_fee.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">Total Amount</p>
          <p className="text-2xl font-semibold">
            {currency}&nbsp;
            {(getCartAmount() === 0
              ? 0
              : getCartAmount() + delivery_fee
            ).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
