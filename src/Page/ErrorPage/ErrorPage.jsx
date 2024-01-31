import Lottie from "lottie-react";
import ErrorPg from '../../../public/errorpage.json'
import { Link } from "react-router-dom";

const ErrorPage = () => {

  return (
    <div className="h-screen">
      <Lottie className="h-96 mt-5" animationData={ErrorPg} loop={true} />
      <div className="flex justify-center">
      <Link to="/" className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold">Go To Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;