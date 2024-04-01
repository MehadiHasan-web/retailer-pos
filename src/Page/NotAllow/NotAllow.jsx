import Lottie from "lottie-react";
import NotAllowImg from '../../../public/notAllow.json'
import { Link } from "react-router-dom";


const NotAllow = () => {
  return (
    <div className="h-screen bg-white">
      <Lottie className="h-60 sm:h-64 md:h-72 lg:h-96 mt-5" animationData={NotAllowImg} loop={true} />
      <p className="text-center mb-5 text-base sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">You are Not allowed page</p>
      <div className="flex justify-center">
      <Link to="/" className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold">Go To Home</Link>
      </div>
    </div>
  );
};

export default NotAllow;