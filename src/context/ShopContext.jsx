import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../../utils/FetchApi";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [delivery_fee, setDeliveryFee] = useState(0);
  const navigate = useNavigate();

  const currency = "৳";
  // const delivery_fee = 10;

  useEffect(() => {
    // ✅ API থেকে প্রোডাক্ট ফেচ করা
    const fetchProducts = async () => {
      try {
        const data = await fetchApi("/product/list", "GET");
        setProducts(data?.products || []);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    // INFO: Load cart items from localStorage when the component mounts
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    // INFO: Save cart items to localStorage whenever cartItems changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

 
  const addToCart = (itemId, quantity) => {
    if (quantity > 0) {
      const updatedCart = { ...cartItems };
      updatedCart[itemId] = (updatedCart[itemId] || 0) + quantity;
      setCartItems(updatedCart);
      toast.success("Item Added To The Cart");
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      totalCount += cartItems[itemId]; // Sum all quantities
    }
    return totalCount;
  };

  const updateQuantity = (itemId, quantity) => {
    let cartData = { ...cartItems };

    if (quantity === 0) {
      toast.success("Item Removed From The Cart");
      delete cartData[itemId]; // Remove the item
    } else {
      cartData[itemId] = quantity; // Update the quantity
    }

    setCartItems(cartData); // Update state
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[itemId];
      }
    }
    return totalAmount;
  };

  // **🔍 Search Filtering Logic**
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const value = {
    products,
    currency,
    delivery_fee,
    setDeliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    filteredProducts,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
