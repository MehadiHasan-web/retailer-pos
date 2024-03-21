import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuDot } from "react-icons/lu";


const MemberCard = () => {

  const cardData = [
    {
      "id" : 1,
      "image" : "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-group-icon-png-image_1796653.jpg",
      "title" : "Total Members on the app",
      "person" : "12,000",
      "type" : "Avg Nes",
      "visitor" : "200 sign up per month"
    },
    {
      "id" : 2,
      "image" : "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-group-icon-png-image_1796653.jpg",
      "title" : "Total Visits",
      "person" : "102",
      "type" : "Avg Visits",
      "visitor" : "500 visits per month"
    },
    {
      "id" : 3,
      "image" : "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-group-icon-png-image_1796653.jpg",
      "title" : "Total Visits",
      "person" : "102",
      "type" : "Avg Visits",
      "visitor" : "500 visits per month"
    },
    {
      "id" : 4,
      "image" : "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-group-icon-png-image_1796653.jpg",
      "title" : "Total Visits",
      "person" : "102",
      "type" : "Avg Visits",
      "visitor" : "500 visits per month"
    },
    {
      "id" : 5,
      "image" : "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-group-icon-png-image_1796653.jpg",
      "title" : "Total Visits",
      "person" : "102",
      "type" : "Avg Visits",
      "visitor" : "500 visits per month"
    },
    {
      "id" : 6,
      "image" : "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-group-icon-png-image_1796653.jpg",
      "title" : "Total Visits",
      "person" : "102",
      "type" : "Avg Visits",
      "visitor" : "500 visits per month"
    }
  ]


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        cardData.map((data) => <div key={data.id} className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl">
            <div className="">
              <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" src={data.image}></img>
            </div>
            <div className="w-full">
              <ul className="space-y-2">
                <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">{data.title}</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
                <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.person}</li>
                <li className="flex items-center">
                  <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">{data.type}</span>
                  <span><LuDot className="text-gray-600"></LuDot></span>
                  <span className="text-xs sm:text-xs md:text-base text-gray-400">{data.visitor}</span>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default MemberCard;