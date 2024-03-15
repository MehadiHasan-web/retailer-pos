import { PieChart, Pie, Cell } from 'recharts';
import { GoDotFill } from "react-icons/go";


const PieChartWithPadding = () => {

  const data = [
    { name: 'Group A', value: 700, color : '#0088FE' },
    { name: 'Group B', value: 320, color : '#00C49F' },
    { name: 'Group C', value: 400, color : '#FFBB28'},
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className='bg-white px-2 sm:p-1 w-full rounded-xl shadow-lg shadow-slate-300'>
      <div className='py-5 text-left'>
        <h1 className='text-sm sm:text-base md:text-xs lg:text-xs xl:text-xl pl-5 font-bold text-gray-500'>Activity</h1>
      </div>
      <div className=''>
        <PieChart width={320} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={140}
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className='m-3'>
          <ul className='sm:flex items-center gap-3'>
            {data.map((data, index) => <li key={index} className='flex items-center gap-2 text-base sm:text-lg md:text-sm'><GoDotFill color={data.color}></GoDotFill><span className='text-gray-500 lg:text-lg'>{data.name}</span></li>)}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default PieChartWithPadding;