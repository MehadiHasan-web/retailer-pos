import axios from "axios";
import Title from "../../Title/Title";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from './../../Providers/AuthProvider';

const PurchaseRequest = () => {
  const [itemList, setItemList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  console.log(itemList);
  const {baseURL} = useContext(AuthContext)

// category api fetch
  useEffect(() => {
    axios
      .get(`${baseURL}/catagorylist/`)
      .then((response) => {
        setCategoryList(response.data);
        // console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [baseURL]);


  // Item list api fetch
  useEffect(() => {
    axios
      .get(`${baseURL}/itemlist/`)
      .then((response) => {
        setItemList(response.data);
        // console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [baseURL]);

  const purchaseRequestData = (event) => {
    event.preventDefault();
    const form = event.target;
    const category_id = form.categoryId.value;
    const item_id = form.itemId.value;
    const quantity = form.itemNumber.value;
    const note = form.bio.value;
    // const fileData = form.fileData.value;
    const purchaseValue = { category_id,item_id, quantity, note };
    axios
      .post(`${baseURL}/purchase/`, purchaseValue)
      .then((response) => {
        console.log(response.data.msg);
        toast.success("Request Successfully ");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(`${error.message}. Try again`);
      });
  };

  return (
    <>
      {/* title section start */}
      <Title pageName={"Purchase Request"}></Title>
      {/* title section end */}
      <div className="container mx-auto flex justify-center items-center mt-6">
        <div className="card shrink-0 w-2/3 shadow-2xl bg-base-100">
          <form onSubmit={purchaseRequestData} className="card-body">
            <select className="select select-bordered w-ful" name="categoryId">
              {categoryList.map((data, index) => (
                <option key={index} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
            <div className="md:flex gap-2">
              <div className="form-control flex-1">
                {/* <input type="text" placeholder="item" name="itemName" className="input input-bordered input-md" /> */}

                <select className="select select-bordered w-ful" name="itemId">
                  {itemList.map((data, index) => (
                    <option key={index} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control flex-1">
                <input
                  type="number"
                  placeholder="quantity"
                  name="itemNumber"
                  className="input input-bordered input-md"
                />
              </div>
            </div>
            <div className="form-control">
              <textarea
                type="text"
                placeholder="Note"
                name="bio"
                className="textarea textarea-bordered textarea-md w-full "
              ></textarea>
            </div>
            <div className="form-control">
              <input
                type="file"
                name="fileData"
                className="file-input file-input-bordered file-input-md w-full"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary uppercase">
                submit
              </button>
            </div>
            <ToastContainer position="bottom-right"></ToastContainer>
          </form>
        </div>
      </div>
    </>
  );
};

export default PurchaseRequest;
