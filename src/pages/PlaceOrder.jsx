import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";

import { fetchApi } from "../../utils/FetchApi";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { products, cartItems, delivery_fee, getCartAmount } =
    useContext(ShopContext);
  const [method, setMethod] = useState("cod");
  const [orderData, setOrderData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    mobile: "",
    paymentMethod: "cod",
    items: [],
    totalAmount: getCartAmount(),
  });

  useEffect(() => {
    const itemsWithQuantityPrice = [];
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo) {
        itemsWithQuantityPrice.push({
          _id: itemInfo._id,
          quantity: cartItems[itemId],
          price: itemInfo.price,
        });
      }
    }
    setOrderData({ ...orderData, items: itemsWithQuantityPrice });
  }, [cartItems, products]);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("orderData", orderData);
    try {
      // Send order data to the backend API
      const response = await fetchApi("/orders/orders", "POST", orderData);
      if (response) {
        // console.log('Order placed successfully', response.data);
        navigate("/success");
      }
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };

  return (
    <div className="flex flex-col justify-between gap-4 pt-5 sm:flex-row sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side Content */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            name="firstName"
            value={orderData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={orderData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          name="email"
          value={orderData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="email"
          placeholder="Email Address"
        />
        <input
          name="street"
          value={orderData.street}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            name="city"
            value={orderData.city}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="City"
          />
          <input
            name="state"
            value={orderData.state}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            name="zipCode"
            value={orderData.zipCode}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="number"
            placeholder="Zip Code"
          />
          <input
            name="country"
            value={orderData.country}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          name="mobile"
          value={orderData.mobile}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="number"
          placeholder="Mobile"
        />
      </div>
      {/* Right Side Content */}
      <div className="mt-8 w-full md:w-1/2">
        <div className="mt-8">
          <CartTotal />
        </div>
        {/* Payment Methods Selection */}
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHODS"} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-600" : ""
                }`}
              ></p>
              <p className="mx-4 text-sm font-medium text-gray-500">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full mt-8 text-end">
            <button
              onClick={handleSubmit}
              className={`px-16 py-3 text-sm text-white bg-black active:bg-gray-800 ${
                delivery_fee === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={delivery_fee === 0}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
