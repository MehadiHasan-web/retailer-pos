import { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "./../../../../Providers/AuthProvider";
// eslint-disable-next-line react/prop-types
const Form = ({ wishlist, calculateTotalPrice }) => {
  const [cardTable, setCardTable] = useState([]);
  const [approverList, setApprover] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const { baseURL, accountURL } = useContext(AuthContext);
  const [total, setTotal] = useState(calculateTotalPrice)
  console.log(cardTable);

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

  async function sendData(userInfo) {
    console.log(userInfo);
    try {
      const response = await axios.post(`${baseURL}/inventory/`, userInfo, {
        headers: {
          "Content-Type": "application/json",
          // 'user_id': user_id,
        },
      });
      toast.success("Successfully created");
    } catch (error) {
      toast.error(`${error.message} .Try again`);
    }
  }

  // from handeling
  const userData = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const information = form.information.value;
    const user_id = form.user_id.value;
    // const position = form.position.value;
    const vat = form.vat.value;
    const tax = form.Tax.value;
    const discount = form.discount.value;
    const deliveryCost = form.delivery.value;
    const total = form.total.value;
    const totalAmount = calculateTotalPrice - vat - tax - discount-deliveryCost;
    setTotal(total);
    const user = { user_id, name, number, information };
    console.log(user)
    // const initialCardTable = JSON.parse(localStorage.getItem('cardTable')) || [];

    // setCardTable(initialCardTable);
    // setCardTable((prevCardTable) => [...prevCardTable, user]);
    // const updatedCardTable = [...initialCardTable, user];
    // sendData(updatedCardTable);
    // setCardTable(initialCardTable);
    setCardTable((wishlist) => [...wishlist, user]);
    const updatedCardTable = [...wishlist, user];
    sendData(updatedCardTable);
    // console.log(updatedCardTable)
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
                  <span className="font-bold">${calculateTotalPrice}</span>
                </p>
                <p className="flex justify-between mt-3 ">
                  <span>Vat</span>
                  <span className="font-bold">$ <input  name="vat" className=" w-14 bg-slate-50 shadow-inner rounded text-end"/></span>
                </p>
                <p className="flex justify-between mt-3 ">
                  <span>Tax</span>
                  <span className="font-bold">$ <input  name="Tax" className=" w-14 bg-slate-50 shadow-inner rounded text-end"/></span>
                </p>
                <p className="flex justify-between mt-3 ">
                  <span>Discount</span>
                  <span className="font-bold">$ <input  name="discount" className=" w-14 bg-slate-50 shadow-inner rounded text-end"/></span>
                </p>
                <p className="flex justify-between mt-3 ">
                  <span>Delivery Cost</span>
                  <span className="font-bold">$ <input  name="delivery" className=" w-14 bg-slate-50 shadow-inner rounded text-end"/></span>
                </p>
                <p className="border-b-2 border-dashed border-black mt-2"></p>
                <p className="flex justify-between mt-3 ">
                  <span>Total</span>
                  <span className="font-bold">$ <input  name="total" defaultValue={calculateTotalPrice} className=" w-14 bg-slate-50 shadow-inner rounded text-end"/></span>
                </p>
              </div>
              <h3 className="mt-5"></h3>
              <div className="flex justify-between items-center gap-1">
                {/* user id  */}
                <input type="number" hidden name="user_id" value={user_id} />
                {/* file section start */}
                <div className="form-control w-full flex-1">
                  <input type="text" placeholder="enter your name" className="input input-bordered w-full h-6 lg:h-9 " name="name" />
                </div>
                {/* file section end */}
                {/* file section start */}
                <div className="form-control w-full flex-1">
                <input type="number" placeholder="enter your number" className="input input-bordered w-full h-6 lg:h-9 " name="number" />
                </div>
                {/* file section end */}
              </div>
              {/* textarea section start */}
              <textarea
                type="text"
                placeholder="additional information"
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
