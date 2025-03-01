import { useEffect, useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { fetchApi } from "../../utils/FetchApi";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await fetchApi("/product/list", "GET");

        if (response && response?.products) {
          const bestProducts = response?.products?.filter(
            (item) => item?.bestSeller === true
          );
          setBestSeller(bestProducts?.slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching bestseller products:", error);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        <Title text1={"সেরা"} text2={"বিক্রিত পণ্য"} />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          আমাদের সেরা বিক্রিত পণ্যগুলোর সংগ্রহ, যা গুণমান, স্টাইল এবং মূল্যের
          জন্য ক্রেতাদের মন জয় করেছে।
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {bestSeller?.length > 0 ? (
          bestSeller?.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No bestsellers found
          </p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
