import { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "./../../../../Providers/AuthProvider";



const Form = ({ wishlist, calculateTotalPrice }) => {
  const [cardTable, setCardTable] = useState([]);
  const [approverList, setApprover] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const { baseURL, accountURL } = useContext(AuthContext);
  const [total, setTotal] = useState(calculateTotalPrice)
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${accountURL}/approvers/`)
      .then((res) => res.data)
      .then((data) => setApprover(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [accountURL]);

  // const clearData = () => {
  //   setWishlist([]);
  //   setCardTable([]);
  // };

  async function sendData(finalArray) {
    try {
      const response = await axios.post(`https://rpos.pythonanywhere.com/api/v1/sales/`, finalArray, {
        headers: { 'Authorization': 'token ' + token }
      });
      toast.success("Successfully Send");
    } catch (error) {
      toast.error(`${error.message} .Try again`);
    }
  }

  // from handeling
  const userData = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const phone_number = form.number.value;
    const address = form.information.value;
    const userInfo = { name, phone_number, address };


    const vat = form.vat.value;
    const tax = form.Tax.value;
    const discount = form.discount.value;
    const deliveryCost = form.delivery.value;
    const productCost = form.productCost.value;
    const total = form.total.value;
    // const totalAmount = calculateTotalPrice - vat - tax - discount - deliveryCost;
    setTotal(total);
    const products = wishlist.map(item => ({ id: item.id, quantity: item.quantity, size: item.size }))

    const finalArray = { customer: userInfo, saleitems: products, vat_percentage: parseInt(vat), tax_percentage: parseInt(tax), discount_percentage: parseInt(discount), delivery_cost: parseInt(deliveryCost), productCost: parseInt(productCost), total: parseInt(total), subtotal: parseInt(0) }

    // setCardTable((wishlist) => [...wishlist, user]);
    // const updatedCardTable = [...wishlist, user];
    sendData(finalArray);
    console.log(finalArray)
  };

  return (
    <div>
      <div className="collapse bg-slate-200 collapse-open mt-5">
        <input type="checkbox" className="peer" />
        <div className="collapse-content ">
          <div>
            <form onSubmit={userData}>
              <div className=" ">
                <h2 className="text-2xl font-semibold ">Summary</h2>
                <p className="flex justify-between mt-3 ">
                  <span>Subtotal</span>{" "}
                  <span className="font-bold">TK {calculateTotalPrice}</span>
                </p>
                <p className="flex justify-between mt-3 ">
                  <span>Vat</span>
                  <span className="font-bold">% <input name="vat" className=" w-14 bg-slate-50 shadow-inner rounded text-end" /></span>
                </p>
                <p className="flex justify-between mt-3 ">
                  <span>Tax</span>
                  <span className="font-bold">% <input name="Tax" className=" w-14 bg-slate-50 shadow-inner rounded text-end" /></span>
                </p>
                <p className="flex justify-between mt-3 ">
                  <span>Discount</span>
                  <span className="font-bold">TK <input name="discount" className=" w-14 bg-slate-50 shadow-inner rounded text-end" /></span>
                </p>
                <p className="flex justify-between mt-3 ">
                  <span>Delivery Cost</span>
                  <span className="font-bold">TK <input name="delivery" className=" w-14 bg-slate-50 shadow-inner rounded text-end" /></span>
                </p>
                <p className="flex justify-between mt-3 ">
                  <span>Product Cost</span>
                  <span className="font-bold">TK <input name="productCost" className=" w-14 bg-slate-50 shadow-inner rounded text-end" /></span>
                </p>
                <p className="border-b-2 border-dashed border-black mt-2"></p>
                <p className="flex justify-between mt-3 ">
                  <span>Total</span>
                  <span className="font-bold">TK <input name="total" defaultValue={calculateTotalPrice} className=" w-14 bg-slate-50 shadow-inner rounded text-end" /></span>
                </p>
              </div>
              <h3 className="mt-5"></h3>
              <div className="flex justify-between items-center gap-1">
                {/* user id  */}
                <input type="number" hidden name="user_id" value={user_id} />
                {/* file section start */}
                <div className="form-control w-full flex-1">
                  <input type="text" placeholder="Enter customer name" className="input input-bordered w-full h-6 lg:h-9 " name="name" />
                </div>
                {/* file section end */}
                {/* file section start */}
                <div className="form-control w-full flex-1">
                  <input type="number" placeholder="Enter customer number" className="input input-bordered w-full h-6 lg:h-9 " name="number" />
                </div>
                {/* file section end */}
              </div>
              {/* textarea section start */}
              <textarea
                type="text"
                placeholder="Additional information"
                className="textarea textarea-lg w-full mt-1"
                id="bio"
                name="information"
              ></textarea>
              {/* textarea section end */}
              <div className="flex gap-2 mt-1">

                <button
                  // onClick={() => userData()}
                  className="bg-green-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded"
                  type="submit"
                >
                  Sales Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Form;
