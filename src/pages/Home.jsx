import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";
import Marquee from "../components/Marquee";

const Home = () => {
  const items = [
    "আস্সালামু আলাইকুম।",
    "অফার বাজার ছাগলনাইয়াতে আপনাকে স্বাগতম।",
    "বিশ্বস্ততার সাথে সাশ্রয়ী বাজার।",
    "সেরা পণ্য, সঠিক দামে।",
    "আজই অর্ডার করুন, পেয়ে যান দ্রুত ডেলিভারি।",
    "নতুন অফার পেতে আমাদের সঙ্গে থাকুন।",
    "আপনার প্রয়োজন আমাদের অগ্রাধিকার।",
    "বিশেষ ছাড়! সীমিত সময়ের জন্য।",
  ];

  return (
    <div>
      <Marquee items={items} speed={20} />
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
