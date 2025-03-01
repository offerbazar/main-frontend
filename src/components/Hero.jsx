import { useEffect, useState } from "react";
import { fetchApi } from "../../utils/FetchApi";

const Hero = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetchApi("/banners/allBanner", "GET");
        if (response) {
          setBanner(response[0]?.image); 
        //   console.log("banner",response[0]?.image);
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };

    fetchBanner();
  }, []);

  return (
    <div className="flex flex-col border border-gray-400 sm:flex-row">
      {/* Hero left side */}
      <div className="flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="text-sm font-medium md:text-base">আমাদের সেরা বিক্রিত পণ্য</p>
          </div>
          <h1 className="text-3xl leading-relaxed sm:py-3 lg:text-5xl prata-regular text-[#F49D1A]">
          নতুন সংগ্রহ
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold md:text-base">এখনই কিনুন</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      {banner ? (
        <img className="w-full sm:w-1/2" src={banner} alt="Hero Banner" />
      ) : (
        <div className="w-full sm:w-1/2 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Loading banner...</p>
        </div>
      )}
    </div>
  );
};

export default Hero;
