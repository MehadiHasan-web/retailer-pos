import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useZxing } from "react-zxing";
import useSound from 'use-sound';
import bipSound from '../../public/scanner-beep.mp3'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


const Scanner = () => {
    const [scanning, setScanning] = useState(true);
    const token = localStorage.getItem('token');
    const [play] = useSound(bipSound)

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
                const scannerLine = document.getElementById('scanner-line');
                scannerLine.style.transition = 'none';
                scannerLine.style.top = '0';
                setTimeout(() => {
                    scannerLine.style.transition = 'top 2s linear';
                    scannerLine.style.top = '100%';
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
        if (result) {
            console.log(token)
            const data = { sale_id: '4b082bc6-136b-4ffb-a987-d6a6005111f3' };
            axios.post(`https://rpos.pythonanywhere.com/api/v1/salesReturn/`, data, {
                headers: { 'Authorization': 'token ' + token }
            })
                .then((res) => res.data)
                .then((data) => {
                    toast.success("Successfully Returned");
                    console.log(data)
                })
                .catch((error) => console.error("Error fetching data:", error));
            play();
        }

    }, [result])



    return (
        <div className=" bg-gradient-to-br from-[#23486F] via-[#192532] to- 
        [#10131C] h-screen flex flex-col justify-center items-center ">
            <p className="text-white text-lg mb-4">
                Place the Barcode code inside the area
            </p>
            <div className="border-2 border-green-500 rounded-lg w-64 h-64 relative scanner-shadow">
                {/* QR code scanning area */}
                <video ref={ref} className='w-full h-full object-cover rounded-lg ' />
                {/* Scanning animation */}
                <div
                    id="scanner-line"
                    className="absolute bg-green-500 h-1 w-full top-0 left-0 animate-scanner rounded"
                ></div>
            </div>
            <p className='text-white'>
                <span>Last result:</span>
                <span>{result}</span>
            </p>
            <Link to={'/'} className="text-white mt-2 underline">Back to Home Page</Link>
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default Scanner;
