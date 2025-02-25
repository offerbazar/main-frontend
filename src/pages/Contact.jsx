import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='pt-10 text-2xl text-center border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='flex flex-col justify-center gap-10 my-10 md:flex-row mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Photo" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-xl font-semibold text-gray-600'>Our Store</p>
          <p className='text-gray-500'>অফার বাজার ছাগলনাইয়া <br />ভূঁঞা মার্কেট (২য় তলা), ছাগলনাইয়া, ফেনী।</p>
          <p className='text-gray-500'>Tel: 01706-003 243, 01829- 062 636  <br />Email: offerbazarchhagalnaiya@gmail.com</p>
          <p className='text-xl font-semibold text-gray-600'>আমরা চাই গ্রাহক আমাদের পণ্যের ওপর সন্তুষ্ট হয়ে অন্য মানুষের কাছে আমাদের প্রশংসা করুক এবং আমাদের এগিয়ে যাওয়ার পথকে প্রসস্থ করুক।</p>
          {/* <p className='text-gray-500'>আমরা চাই গ্রাহক আমাদের পণ্যের ওপর সন্তুষ্ট হয়ে অন্য মানুষের কাছে আমাদের প্রশংসা করুক এবং আমাদের এগিয়ে যাওয়ার পথকে প্রসস্থ করুক।</p> */}
          {/* <button className='px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-gray-800 hover:text-white'>Explore Jobs</button> */}
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
