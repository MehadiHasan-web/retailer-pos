// import { useEffect } from 'react';
import "./Home.css";

import { FaEdit, FaPlusCircle } from "react-icons/fa";
import { GrSubtractCircle } from "react-icons/gr";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        <div className="lg:col-span-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            aspernatur, recusandae deleniti fugit in doloribus repellat officia
            facilis quis hic autem at repellendus impedit magnam sapiente
            blanditiis explicabo. Reiciendis consequatur sint iusto ipsa quia
            quis error accusamus, architecto minima, eligendi hic exercitationem
            maxime, molestiae dolor molestias deleniti odio. Nulla nam repellat
            officia soluta ducimus delectus iste, magni, quis quas, quae vitae
            eum iusto id? Beatae, officia ipsam? Veritatis amet commodi
            voluptatibus ratione tenetur quia molestiae harum soluta perferendis
            ducimus voluptatem itaque repellat minus, repellendus maxime eos
            quis reiciendis modi, sapiente nemo quasi aspernatur ipsam!
            Recusandae quo provident mollitia! Aliquam nesciunt ipsum dolorem
            repellendus sit molestiae perspiciatis illo hic quod error.
            Reprehenderit quod nobis neque deserunt facilis rem distinctio
            magni? Quaerat animi dolorum voluptas praesentium adipisci
            dignissimos illum consectetur quasi. Magnam quis, iure illum iusto
            explicabo deleniti accusamus eaque excepturi, voluptatum quo cum ut,
            cupiditate magni sint. Omnis ex consequuntur ut, quo inventore
            voluptatibus quam alias. Exercitationem optio distinctio amet. Qui
            iure aliquam, beatae, accusamus assumenda dolor perferendis
            reprehenderit doloribus rerum consequatur ad illo. Facere, fugiat!
            Esse impedit nobis at ipsa, quas natus! Assumenda veniam accusamus
            commodi enim a quos aspernatur porro exercitationem blanditiis
            dolores autem in laudantium ducimus, voluptatem illo?
          </p>
        </div>
        <div className="lg:col-span-1 p-4">
          <div className="flex justify-between ">
            <h3 className="text-xl text-black font-medium">Waitlist</h3>
            <p className="text-xl font-bold text-black">
              A1<span className="text-slate-100">#12910</span>
            </p>
          </div>
          <p className="text-bold font-medium my-2">
            Detail Prescription <span className="text-green-500">3</span>
          </p>
          <div className="bg-slate-100 rounded-lg p-4">
            <ul>
              <li className="text-sm text-slate-400 flex justify-between">
                <h5>Name</h5> <span>Amount</span>
              </li>
              <li className="font-bold flex justify-between mt-2">
                <h5>HI--text</h5> <span className="text-slate-500">x1</span>
              </li>
              <li className="font-bold flex justify-between mt-2">
                <h5>HI--text</h5> <span className="text-slate-500">x1</span>
              </li>
              <li className="font-bold flex justify-between mt-2">
                <h5>HI--text</h5> <span className="text-slate-500">x1</span>
              </li>
              <li className="font-bold flex justify-between mt-2">
                <h5>HI--text</h5> <span className="text-slate-500">x1</span>
              </li>
            </ul>
          </div>
          <div className="border-b-2 my-5"></div>
          <div>
            <div className="flex gap-5 mt-5">
              <div className="w-1/4 p-2 bg-slate-100 rounded-lg">
                <img
                  src="https://media.istockphoto.com/id/1304186549/vector/automatic-spring-ballpoint-pen-in-black-case-vector-illustration.jpg?s=612x612&w=0&k=20&c=R_yPawneqKX8J-NeiKmNXuYx36tCoPSCFEHx0Bd4dEg="
                  alt=""
                  className="w-3/4 mx-auto "
                />
              </div>
              <div className="w-3/4  ">
                <p className="flex justify-between items-center">
                  <h4 className="font-bold">Pen-500</h4>{" "}
                  <FaEdit className="inline-block border-2 text-3xl p-1 rounded-lg" />
                </p>
                <p className="flex justify-between items-center mt-4">
                  <h4 className="font-bold">
                    <span className="text-green-500">$</span> 2.10
                  </h4>{" "}
                  <span className="bg-slate-100 rounded-full flex px-1 gap-2 items-center"><GrSubtractCircle className="text-red-500 cursor-pointer"/> 3 <FaPlusCircle className="text-green-500 cursor-pointer"/></span>
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="w-1/4 p-2 bg-slate-100 rounded-lg">
                <img
                  src="https://media.istockphoto.com/id/1304186549/vector/automatic-spring-ballpoint-pen-in-black-case-vector-illustration.jpg?s=612x612&w=0&k=20&c=R_yPawneqKX8J-NeiKmNXuYx36tCoPSCFEHx0Bd4dEg="
                  alt=""
                  className="w-3/4 mx-auto "
                />
              </div>
              <div className="w-3/4  ">
                <p className="flex justify-between items-center">
                  <h4 className="font-bold">Pen-500</h4>{" "}
                  <FaEdit className="inline-block border-2 text-3xl p-1 rounded-lg" />
                </p>
                <p className="flex justify-between items-center mt-4">
                  <h4 className="font-bold">
                    <span className="text-green-500">$</span> 2.10
                  </h4>{" "}
                  <span className="bg-slate-100 rounded-full flex px-1 gap-2 items-center"><GrSubtractCircle className="text-red-500 cursor-pointer"/> 3 <FaPlusCircle className="text-green-500 cursor-pointer"/></span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 ">
            <h2 className="text-2xl font-semibold mt-3">Summary</h2>
            <p className="flex justify-between mt-3 text-sm"><span>Subtotal</span> <span className="font-bold">$ 12.00</span></p>
            <p className="flex justify-between mt-3 text-sm"><span>Discount</span> <span className="font-bold">$ 2.00</span></p>
            <p className="border-b-2 border-dashed mt-2"></p>
            <p className="flex justify-between mt-3 font-bold"><span >Total</span> <span>$ 10.00</span></p>
          </div>
          <div className="mt-5">
            <button className="btn w-full bg-green-500 text-white rounded-xl">Print Bill</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
