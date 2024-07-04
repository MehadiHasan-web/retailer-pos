import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useZxing } from "react-zxing";
import useSound from "use-sound";
import bipSound from "../../public/scanner-beep.mp3";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import blank_img from '../../public/bottol.png'
import { AuthContext } from "../Providers/AuthProvider";
import { FaCheck } from "react-icons/fa";


const Scanner = () => {
  const [scanning, setScanning] = useState(true);
  const token = localStorage.getItem("token");
  const [play] = useSound(bipSound);
  const location = useLocation();
  const [selected, setSelected] = useState([])
  const [responseData, setResponseData] = useState();
  const { baseURL } = useContext(AuthContext)


  // barcode
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  // scanner animation effects
  useEffect(() => {
    const animateScanner = () => {
      if (scanning) {
        const scannerLine = document.getElementById("scanner-line");
        scannerLine.style.transition = "none";
        scannerLine.style.top = "0";
        setTimeout(() => {
          scannerLine.style.transition = "top 2s linear";
          scannerLine.style.top = "100%";
        }, 10);
      }
    };

    const scannerInterval = setInterval(animateScanner, 1500);

    return () => {
      clearInterval(scannerInterval);
    };
  }, [scanning]);

  //get request from server
  useEffect(() => {
    const getBaseUrl = `${window.location.protocol}//${window.location.host}`;
    const url = `${getBaseUrl}/sales/sales-request/`;
    console.log(getBaseUrl)

    if (result) {
      if (result.includes(url)) {
        const get_sale = result.replace(url, "");
        console.log("get id: " + get_sale)
        const id = { sale_id: get_sale };
        axios
          .get(`${baseURL}/sales/${get_sale}/`, {
            headers: { Authorization: "token " + token },
          })
          .then((res) => res.data)
          .then((data) => {
            toast.success("Get Data");
            console.log(data);
            setResponseData(data)
          })
          .catch((error) => {
            toast.error("Please try again");
            console.error("Error fetching data:", error);
          });
        play();
      } else {
        const id = { sale_id: result };
        const get_sale = result.replace(url, "");
        axios
          .get(`${baseURL}/sales/${get_sale}/`, {
            headers: { Authorization: "token " + token },
          })
          .then((res) => res.data)
          .then((data) => {
            toast.success("Get Data");
            console.log(data);
            setResponseData(data)
          })
          .catch((error) => {
            toast.error("Please try again");
            console.error("Error fetching data:", error);
          });
        play();
      }
    }

  }, [result, location, play, token]);

  // //selected product
  // function selectedFun(id) {
  //   const exists = selected.includes(id);
  //   console.log(exists)

  //   if (exists) {
  //     const index = selected.indexOf(id);
  //     const updatedSelected = [...selected];
  //     updatedSelected.splice(index, 1);
  //     setSelected(updatedSelected);
  //   } else {
  //     const previousId = selected.filter((data) => data.id !== id);
  //     if (!previousId.find(data => data.id === id)) {
  //       setSelected([...previousId, id]);
  //     }
  //   }
  // }

  const handleSelect = (id, quantity) => {
    selectedFun(id, quantity);
  };

  const selectedFun = (id, quantity) => {
    const exists = selected.some(item => item.id === id);
    console.log(exists);

    if (exists) {
      const updatedSelected = selected.filter(item => item.id !== id);
      setSelected(updatedSelected);
    } else {
      setSelected([...selected, { id, quantity }]);
    }
  };
  // update quantity 
  const handleQuantityChange = (id, newQuantity) => {
    const updatedSelected = selected.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setSelected(updatedSelected);
  };


  console.log(selected)


  // return back 
  function returnBack() {
    const makeBaseUrl = `${window.location.protocol}//${window.location.host}`;
    const url = `${makeBaseUrl}/sales/sales-request/`;

    if (result.includes(url)) {
      const get_sale = result.replace(url, "");
      const data = {
        sale_id: get_sale,
        items: selected
      };
      axios
        .post(`${baseURL}/salesReturn/`, data, {
          headers: { Authorization: "token " + token },
        })
        .then((res) => res.data)
        .then((data) => {
          toast.success("Successfully Returned");
          console.log(data);

        })
        .catch((error) => {
          toast.error("Please try again");
          console.error("Error fetching data:", error);
        });
      play();
    } else {
      const data = {
        sale_id: result,
        items: selected
      };
      axios
        .post(`${baseURL}/salesReturn/`, data, {
          headers: { Authorization: "token " + token },
        })
        .then((res) => res.data)
        .then((data) => {
          toast.success("Successfully Returned");
          console.log(data);
        })
        .catch((error) => {
          toast.error("Please try again");
          console.error("Error fetching data:", error);
        });
      play();
    }
  }

  return (
    <div className="bg-gradient-to-br from-[#23486F] via-[#192532] to-[#10131C] h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        {/* scanner section start */}
        <div className="text-center " >
          <p className="text-white text-lg mb-4">
            Place the Barcode code inside the area
          </p>
          <div className="border-2 border-green-500 rounded-lg w-72 h-52 relative scanner-shadow ">
            {/* QR code scanning area */}
            <video ref={ref} className="w-full h-full object-cover rounded-lg " />
            {/* Scanning animation */}
            <div id="scanner-line" className="absolute bg-green-500 h-1 w-full top-0 left-0 animate-scanner rounded"></div>
          </div>
          <ToastContainer position="bottom-right" />
        </div>
        <div className="mt-2">
          <p className="text-white">{result}</p>
        </div>
        <Link to={"/"} className="text-white mt-2 underline">
          Back to Home Page
        </Link>
        {/* scanner section end */}
        {/* input number  */}

        {/* onClick={() => selectedFun(item?.id)} */}
        {/* card section start */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:flex mt-10 sm:mt-2 gap-2   ">
          {/* products  */}
          {responseData?.saleitems?.map((item, index) => (
            <div key={index} onClick={() => handleSelect(item.id, item?.quantity)} className={`w-[100%] overflow-hidden ${selected.find((product => product === item.id)) ? ' shadow-md   bg-white  border-[3px]  border-rose-300' : 'bg-white'}  rounded-lg h-44  `}>
              <div className=" h-full relative  ">
                <img src={blank_img} className="w-28 h-28"></img>
                <div className={` ${selected.find(product => product.id === item.id) ? 'activeClass' : ''} absolute top-0 right-0 bg flex justify-center items-center ps-2 pb-2 shadow-sm `}>
                  <FaCheck className="text-white " />
                </div>
                <p className="text-center font-bold">{item?.item_name}</p>
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-md font-medium text-green-700 ring-1 ring-inset ring-green-600/20  ms-1 mt-1 absolute top-0 left-0"> {item?.quantity} </span>
                <input type="number" placeholder="Type here" className={`input input-bordered input-sm   max-w-xs px-1 w-28 mt-1 mx-1 ${item?.quantity <= 1 ? 'hidden' : ''} `} min={1} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))} />
              </div>
            </div>
          ))
          }


        </div>
        {/* card section end */}
        <div className="flex justify-center my-6">
          <button onClick={returnBack} className="btn btn-active btn-neutral ">Return</button>
        </div>
      </div>




    </div >
  );
};

export default Scanner;
