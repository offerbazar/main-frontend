import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { fetchApi } from "../../utils/FetchApi";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
  const { search } = useContext(ShopContext);

  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // ✅ API থেকে প্রোডাক্ট ডেটা ফেচ করা
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchApi("/product/list", "GET");
        setProducts(data?.products || []);
        setFilterProducts(data?.products || []);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  // ✅ ক্যাটাগরি ফিল্টার করা
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // ✅ সাব ক্যাটাগরি ফিল্টার করা
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // ✅ ফিল্টার অ্যাপ্লাই করা
  useEffect(() => {
    let filtered = [...products];

    if (search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(filtered);
  }, [category, subCategory, search, products]);

  // ✅ সোর্ট করা
  useEffect(() => {
    let sorted = [...filterProducts];
    if (sortType === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilterProducts(sorted);
  }, [sortType]);

  // ✅ ফিল্টার ক্লিয়ার করা
  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
  };

  return (
    <div className="flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10">
      {/* ফিল্টার সেকশন */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-2 my-2 text-xl cursor-pointer"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="Dropdown"
          />
        </p>

        {/* ক্যাটাগরি ফিল্টার */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          {["Men", "Women", "Kids"].map((cat) => (
            <label key={cat} className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={cat}
                onChange={toggleCategory}
                checked={category.includes(cat)}
              />
              {cat}
            </label>
          ))}
        </div>

        {/* সাব ক্যাটাগরি ফিল্টার */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPES</p>
          {["Topwear", "Bottomwear", "Winterwear"].map((subCat) => (
            <label key={subCat} className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={subCat}
                onChange={toggleSubCategory}
                checked={subCategory.includes(subCat)}
              />
              {subCat}
            </label>
          ))}
        </div>

        {/* ক্লিয়ার ফিল্টার বাটন */}
        <button
          className={`px-4 py-2 mt-1 text-white bg-[#F49D1A] rounded hover:bg-gray-900 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>

      {/* প্রোডাক্ট ভিউ সেকশন */}
      <div className="flex-1">
        <div className="flex justify-between mb-4 text-base sm:text-2xl">
          <Title text1={"সমস্ত"} text2={"সংগ্রহ"} />

          <select
            onChange={(e) => setSortType(e.target.value)}
            className="px-2 text-sm border-2 border-gray-300"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* প্রোডাক্ট গ্যালারি */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
