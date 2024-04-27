import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useZxing } from "react-zxing";
import useSound from "use-sound";
import bipSound from "../../public/scanner-beep.mp3";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import bottol from '../../public/bottol.png'

const card = [
    {id: 1, title: 'mobile'},
    {id: 2, title: 'car'},
    {id: 3, title: 'jeep'},
    {id: 4, title: 'truck'},
    {id: 5, title: 'bus'},
    {id: 6, title: 'cycle'},
    {id: 7, title: 'vehicle'},
]


const Scanner = () => {
  const [scanning, setScanning] = useState(true);
  const token = localStorage.getItem("token");
  const [play] = useSound(bipSound);
  const location = useLocation();
  const [deleteId, setDeleteId] = useState([])

  console.log(deleteId)

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

    if (result.includes(url)) {
      const get_sale = result.replace(url, "");
      const data = { sale_id: get_sale };
      axios
        .post(`https://rpos.pythonanywhere.com/api/v1/salesReturn/`, data, {
          headers: { Authorization: "token " + token },
        })
        .then((res) => res.data)
        .then((data) => {
          toast.success("Successfully Returned");
          console.log( data);
        })
        .catch((error) => {
          toast.error("Please try again");
          console.error("Error fetching data:", error);
        });
      play();
    } else {
      const data = { sale_id: result };
      axios
        .post(`https://rpos.pythonanywhere.com/api/v1/salesReturn/`, data, {
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
  }, [result, location, play, token]);

  //delete data
  function deleteFun(id){
    if(id){
        const previousId = deleteId.filter((data) => data.id !== id);
        setDeleteId([...previousId, id])
    }else{
        setDeleteId(id)
    }

    // if(id){
    //     const updateId = deleteId.filter((item) => item === id)
    //     setDeleteId(updateId)
    // }

    


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
        <div className="grid grid-cols-3 sm:grid-cols-5 md:flex mt-10 gap-5 h-full">
            {card.map((data, index) => <div onClick={() => deleteFun(data.id)} key={data.id} className={`w-20 h-20 ${deleteId.find((item => item === data.id)) ? 'bg-blue-400' : 'bg-slate-300'} p-1`}>
                <img src={bottol} className="object-cover w-full h-14"></img>
                <h3 className="text-sm text-center">{data.title}</h3>
            </div>)}
        </div>
        {/* card section end */}
      </div>

      
        
    
    </div>
  );
};

export default Scanner;
