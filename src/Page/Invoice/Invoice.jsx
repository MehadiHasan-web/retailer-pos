import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Barcode from "react-barcode";
import footerImage from "../../../public/invoice-footer.png";
import { FaPrint } from "react-icons/fa6";
import { AuthContext } from "../../Providers/AuthProvider";

const Invoice = () => {
  const { baseURL } = useContext(AuthContext);
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState([]);
  const contentToPrint = useRef(null);

  useEffect(() => {
    axios
      .get(`https://rpos.pythonanywhere.com/api/v1/sales/${id}/`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setDetailsData(data)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);
  console.log(detailsData);

  // print function
  const handlePrintClick = useReactToPrint({
    content: () => contentToPrint.current,
  });

  return (
    <div className="container  mx-auto mb-10 ">
      <button onClick={handlePrintClick} className="btn btn-ghost">
        <FaPrint className="size-10 text-green-500" />
      </button>
      <div className=" bg-white      rounded w-[793px] h-[1122px] mx-auto shadow-lg relative">
        <div ref={contentToPrint} id="print_invoice">
          <div className="p-8">
            <div className="flex justify-between ">
              <h2
                className="font-bold text-xl uppercase"
                style={{ textShadow: "1px 1px 1px #87CEEB" }}
              >
                Holos Technologies
              </h2>
              <div>
                <p>#{detailsData?.id}</p>
              </div>
            </div>
            <h2
              className="text-7xl font-black mt-12 "
              style={{ textShadow: "2px 2px 5px red" }}
            >
              INVOICE
            </h2>
            <p className="font-bold mt-10 text-lg">
              Date : <span className="font-normal">{detailsData?.created_date}</span>
            </p>
            <div className="flex justify-between mt-8 ">
              <div>
                <h5 className="font-bold mb-1">Customer info:</h5>
                <p>Name: {detailsData.customer?.name}</p>
                <p>Phone: {detailsData.customer?.phone_number}</p>
                <p>Details: {detailsData.customer?.address}</p>
              </div>
              <div>
                <h5 className="font-bold mb-1 lg:text-xl">Courier Invoice Id:</h5>
                <p className="lg:text-lg font-semibold">{detailsData?.customer?.curierImgoice}</p>
              </div>
            </div>
            <div className="mt-8">
              <table className="table text-base">
                {/* head */}
                <thead className="bg-slate-200	">
                  <tr>
                    <th className="text-black">Item</th>
                    <th className="text-black text-end">Quantity</th>
                    <th className="text-black text-end">Size</th>
                    {/* <th className="text-black text-end">Amount</th> */}
                  </tr>
                </thead>
                <tbody>
                  {detailsData.saleitems?.map((tableData, index) => (
                    <tr key={index}>
                      <td>{tableData?.item_name}</td>
                      <td className=" text-end">{tableData?.quantity}</td>
                      <td className=" text-end">{tableData?.size}</td>
                      {/* <td className=" text-end">
                        <p>$ 600</p>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="border-b-2"></div>
              <div className="flex justify-end mr-4 my-2 font-bold">
                <p className="mr-16">Total</p>
                <span>TK {detailsData?.total}</span>
              </div>
              <div className="border-b-2"></div>
              <div className="mt-14 flex justify-between items-center">
                <div>
                  <p className="font-bold">
                    Payment method: <span className="font-normal">Cash</span>
                  </p>
                  <p className="font-bold">
                    Note:{" "}
                    <span className="font-normal">
                      Thank you for choosing us!
                    </span>
                  </p>
                </div>
                {/* barcode  */}
                <div>
                  <div>
                    <Barcode value={detailsData?.id} className="rounded w-96" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={footerImage}
            alt=""
            className="max-h-60 absolute bottom-0 left-0 w-full right-0  "
          />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
