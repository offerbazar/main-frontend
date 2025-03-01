import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
   
    setTimeout(() => {
      navigate('/'); 
    }, 5000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Success message container */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4 animate-bounce">Success!</h1>
        <p className="text-lg text-gray-700 mb-8">Your order has been placed successfully.</p>

        {/* Button to navigate */}
        <button
          onClick={() => navigate('/')} // Go to the home or collection page
          className="px-8 py-3 text-white bg-[#F49D1A] rounded-lg text-xl transition-all hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Go to Home or Collection
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
