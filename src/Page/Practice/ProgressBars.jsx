import { FaCalendarAlt } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";


const ProgressBars = () => {

  const items = [
    { id : 1, name: "Jan",percents : 20, percent : 720},
    { id : 2, name: "Feb",percents : 40, percent : 340},
    { id : 3, name: "Mar",percents : 10, percent : 450},
    { id : 4, name: "Apr",percents : 26, percent : 230},
    { id : 5, name: "May",percents : 21, percent : 700},
    { id : 6, name: "Jun",percents : 60, percent : 300},
    { id : 7, name: "Jul",percents : 74, percent : 700},
    { id : 8, name: "Aug",percents : 33, percent : 700},
    { id : 9, name: "Sep",percents : 71, percent : 900},
    { id : 10, name: "Oct",percents : 80, percent : 700},
    { id : 11, name: "Nov",percents : 22, percent : 460},
    { id : 11, name: "Dec",percents : 45, percent : 100},
  ]

  return (
    <div className='bg-white px-2 sm:p-1 w-full rounded-xl shadow-lg shadow-slate-300'>
      <div className='py-5 text-center sm:text-left'>
        <ul className='sm:flex justify-between items-center'>
          <li className='text-xs sm:text-sm md:text-xs lg:text-xs xl:text-base font-semibold text-gray-500'>Monthly campaigns</li>
          <li className=''>
            <span className='flex justify-center items-center gap-1'>
              <FaCalendarAlt className='text-xs sm:text-sm md:text-xs lg:text-xs xl:text-base'></FaCalendarAlt>
              <select className="select select-ghost w-full text-xs sm:text-sm md:text-xs lg:text-xs xl:text-base">
                <option disabled selected>27 Jan, 2022-02 Jun, 2022</option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>
            </span>
          </li>
        </ul>
      </div>
      <div className='overflow-hidden p-2'>
        <ul>
          {
            items.map((data) => <li key={data.id} className="flex items-center gap-5 my-1"><span className="lg:text-lg text-gray-500 font-bold">{data.name}</span><ProgressBar className="w-full" completed={data.percents} /><span className="lg:text-lg text-gray-500 font-semibold">{data.percent}</span></li>)
          }
        </ul>
      </div>
      
    </div>
  );
};

export default ProgressBars;