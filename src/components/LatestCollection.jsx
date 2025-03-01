import { useEffect, useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { fetchApi } from "../../utils/FetchApi";

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const data = await fetchApi("/product/list", "GET");
        setLatestProducts(data?.products?.slice(0, 10));
      } catch (error) {
        console.error("Failed to fetch latest products", error);
      }
    };

    fetchLatestProducts();
  }, []);

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        <Title text1="নতুন" text2="সংগ্রহ" />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          আমাদের নতুন সংগ্রহে স্বাগতম! স্টাইল, গৃহসজ্জা এবং আরও অনেক কিছুতে সেরা
          পণ্যগুলো উপভোগ করুন।
        </p>
      </div>

      {/* Rendering Product Items */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {latestProducts.length > 0 ? (
          latestProducts?.map((item) => (
            <ProductItem
              key={item._id} // Assuming `_id` is unique
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default LatestCollection;
