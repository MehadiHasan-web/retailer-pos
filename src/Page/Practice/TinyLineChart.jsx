import { LineChart, Line, CartesianGrid, XAxis, Legend} from 'recharts';
import { FaCalendarAlt } from "react-icons/fa";


const TinyLineChart = () => {

  

  const responsiveWidth = (size) => {
    if(size <= 640){
      return 320;
    }else if(778 >= size){
      return '80%';
    }
  };


  const data = [
    {
      name: 'Jan',
      pv: 2400,
    },
    {
      name: 'Feb',
      pv: 1398,
    },
    {
      name: 'Mar',
      pv: 3800,
    },
    {
      name: 'Apr',
      pv: 3908,
    },
    {
      name: 'May',
      pv: 4800,
    },
    {
      name: 'Jun',
      pv: 3800,
    },
    {
      name: 'Jul',
      pv: 4200,
    },
    {
      name: 'Agu',
      pv: 3908,
    },
    {
      name: 'Sep',
      pv: 4800,
    },
    {
      name: 'Oct',
      pv: 3900,
    },
    {
      name: 'Nov',
      pv: 4300,
    },
    {
      name: 'Dec',
      pv: 4300,
    }
  ];


  return (
    <div className='bg-white px-2 sm:p-1 w-full rounded-xl shadow-lg shadow-slate-300'>
      <div className='py-5 text-center sm:text-left'>
        <ul className='sm:flex justify-between items-center'>
          <li className='text-xs sm:text-sm md:text-xs lg:text-xs xl:text-base'>Monthly campaigns</li>
          <li className='flex justify-center items-center gap-1 xl:gape-2'>
          <span>
            <select className="select select-ghost w-full text-xs sm:text-sm md:text-xs lg:text-xs xl:text-base">
              <option disabled selected>Acquisition</option>
              <option>Svelte</option>
              <option>Vue</option>
              <option>React</option>
            </select>
            </span>
            <span>|</span>
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
      <div className='overflow-hidden'>
        <LineChart width={responsiveWidth(320)}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#ff2c2c" strokeWidth={2} fill="#ff2c2c" />
        </LineChart>
      </div>
      
    </div>
  );
};

export default TinyLineChart;