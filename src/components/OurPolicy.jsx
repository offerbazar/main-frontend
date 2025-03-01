import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col justify-around gap-12 py-8 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base">
      <div>
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-3"
          alt="বিনিময় নীতি"
        />
        <p className="mb-2 font-semibold">সহজ রিটার্ন ও বিনিময় নীতি</p>
        <p className="text-gray-400">
          ১০ দিনের মধ্যে সহজ রিটার্ন/বিনিময় সুবিধা।
        </p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          className="w-12 m-auto mb-3"
          alt="গুণমান নীতি"
        />
        <p className="mb-2 font-semibold">আমাদের গুণমান নীতি</p>
        <p className="text-gray-400">
          অফার বাজার ছাগলনাইয়া সর্বোচ্চ মানসম্পন্ন পণ্য নিশ্চিত করে।
        </p>
      </div>
      <div>
        <img
          src={assets.support_img}
          className="w-12 m-auto mb-3"
          alt="গ্রাহক সহায়তা"
        />
        <p className="mb-2 font-semibold">সেরা গ্রাহক সহায়তা</p>
        <p className="text-gray-400">
          ইমেইল, ফোন বা চ্যাটের মাধ্যমে আমরা সহায়তা প্রদান করি।
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
