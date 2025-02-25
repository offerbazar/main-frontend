import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <Link to='/'>
                    <img src={assets.logo} className='w-36 mb-5 cursor-pointer' alt="logo" />
                </Link>
                <p className='w-full text-gray-600 md:w-2/3'>অফার বাজার ছাগলনাইয়া-তে কেনাকাটা করার জন্য আপনাকে ধন্যবাদ! আমরা আপনাকে সর্বশেষ ট্রেন্ড এবং সেরা মানের পণ্য সরবরাহ করতে প্রতিশ্রুতিবদ্ধ। নতুন পণ্য, এক্সক্লুসিভ অফার এবং আরও আপডেট পেতে আমাদের সোশ্যাল মিডিয়াতে অনুসরণ করুন। যদি আপনার কোনো প্রশ্ন থাকে বা সহায়তার প্রয়োজন হয়, আমাদের বন্ধুত্বপূর্ণ কাস্টমার সাপোর্ট টিম সবসময় প্রস্তুত। বিশেষ ছাড় পেতে আমাদের নিউজলেটারে সাবস্ক্রাইব করুন এবং সবার আগে জানতে পারবেন আমাদের সর্বশেষ অফার সম্পর্কে। আপনার স্টাইল জার্নি শুরু হোক অফার বাজার ছাগলনাইয়া-র সাথে—চলুন, একে স্মরণীয় করে তুলি! 🚀✨</p>
            </div>

            <div>
                <p className='mb-5 text-xl font-medium'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About Us</li>
                    </Link>
                    {/* <Link to='/about'>
                        <li>Delivery</li>
                    </Link> */}
                    <Link to='/contact'>
                        <li>Contact us</li>
                    </Link>
                </ul>
            </div>

            <div>
                <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>01706-003243, 01829-062636 </li>
                    <li>offerbazarchhagalnaiya@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 Offer Bazar. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
