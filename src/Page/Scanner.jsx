import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useZxing } from "react-zxing";
import useSound from "use-sound";
import bipSound from "../../public/scanner-beep.mp3";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import blank_img from '../../public/bottol.png'
import { FaCheck } from "react-icons/fa";

const card = [
  { id: 1, title: 'mobile' },
  { id: 2, title: 'car' },
  { id: 3, title: 'jeep' },
  { id: 4, title: 'truck' },
  { id: 5, title: 'bus' },
  { id: 6, title: 'cycle' },
]


const Scanner = () => {
  const [scanning, setScanning] = useState(true);
  const token = localStorage.getItem("token");
  const [play] = useSound(bipSound);
  const location = useLocation();
  const [selected, setSelected] = useState([])
  const [responseData, setResponseData] = useState();


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

  //send request to server
  useEffect(() => {
    const baseUrl = `${window.location.protocol}//${window.location.host}`;
    const url = `${baseUrl}/sales/sales-request/`;
    console.log(baseUrl)

    if (result) {
      if (result.includes(url)) {
        const get_sale = result.replace(url, "");
        console.log("get id: " + get_sale)
        const id = { sale_id: get_sale };
        axios
          .get(`https://rpos.pythonanywhere.com/api/v1/sales/${get_sale}/`, {
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
          .get(`https://rpos.pythonanywhere.com/api/v1/sales/${get_sale}/`, {
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

  //selected product
  function selectedFun(id) {
    const exists = selected.includes(id);

    if (exists) {
      const index = selected.indexOf(id);
      const updatedSelected = [...selected];
      updatedSelected.splice(index, 1);
      setSelected(updatedSelected);
    } else {
      const previousId = selected.filter((data) => data.id !== id);
      if (!previousId.find(data => data.id === id)) {
        setSelected([...previousId, id]);
      }
    }
  }
  console.log(selected);

  // return back 
  function returnBack() {
    const baseUrl = `${window.location.protocol}//${window.location.host}`;
    const url = `${baseUrl}/sales/sales-request/`;

    // if (result.includes(url)) {
    //   const get_sale = result.replace(url, "");
    //   const data = { sale_id: get_sale };
    //   axios
    //     .post(`https://rpos.pythonanywhere.com/api/v1/salesReturn/`, data, {
    //       headers: { Authorization: "token " + token },
    //     })
    //     .then((res) => res.data)
    //     .then((data) => {
    //       toast.success("Successfully Returned");
    //       console.log(data);

    //     })
    //     .catch((error) => {
    //       toast.error("Please try again");
    //       console.error("Error fetching data:", error);
    //     });
    //   play();
    // } else {
    //   const data = { sale_id: result };
    //   axios
    //     .post(`https://rpos.pythonanywhere.com/api/v1/salesReturn/`, data, {
    //       headers: { Authorization: "token " + token },
    //     })
    //     .then((res) => res.data)
    //     .then((data) => {
    //       toast.success("Successfully Returned");
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       toast.error("Please try again");
    //       console.error("Error fetching data:", error);
    //     });
    //   play();
    // }

    console.log(responseData.saleitems)


  }

  return (
    <div className="bg-gradient-to-br from-[#23486F] via-[#192532] to- 
    [#10131C] h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        {/* scanner section start */}
        <div
          className="text-center mx-auto"
        >
          <p className="text-white text-lg mb-4">
            Place the Barcode code inside the area
          </p>
          <div className="border-2 border-green-500 rounded-lg w-72 h-52 relative scanner-shadow ml-3">
            {/* QR code scanning area */}
            <video ref={ref} className="w-full h-full object-cover rounded-lg " />
            {/* Scanning animation */}
            <div
              id="scanner-line"
              className="absolute bg-green-500 h-1 w-full top-0 left-0 animate-scanner rounded"
            ></div>
          </div>
          <p className="text-white">
            <span>Last result:</span>
            <span>{result}</span>
          </p>
          <Link to={"/"} className="text-white mt-2 underline">
            Back to Home Page
          </Link>
          <ToastContainer position="bottom-right" />
        </div>
        {/* scanner section end */}
        {/* card section start */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:flex mt-10 sm:mt-2 gap-2  h-full">
          {/* products  */}
          {responseData?.saleitems.map((item, index) => (
            <div key={index} onClick={() => selectedFun(item?.id)} className={`w-[100%] overflow-hidden ${selected.find((item => item === data.id)) ? ' shadow-md   bg-white  border-[3px]  border-rose-300' : 'bg-white'}  rounded-lg h-44  `}>
              <div className=" h-full relative  ">
                <img src={blank_img} className="w-28 h-28"></img>
                <div className={` ${selected.find((item => item === data.id)) ? 'activeClass' : ''} absolute top-0 right-0 bg flex justify-center items-center ps-2 pb-2 shadow-sm `}>
                  <FaCheck className="text-white " />
                </div>
                <p className="text-center font-bold">{item?.item_name}</p>
              </div>
            </div>
          ))

          }

        </div>
        {/* card section end */}
        <div className="flex justify-center my-6">
          <button onClick={returnBack} className="btn btn-active btn-neutral">Return</button>
        </div>
      </div>




    </div >
  );
};

export default Scanner;
