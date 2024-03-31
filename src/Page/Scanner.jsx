import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useZxing } from "react-zxing";

const Scanner = () => {
    const [scanning, setScanning] = useState(true);
    // barcode 
    const [result, setResult] = useState("");
    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
        },
    });


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

        const scannerInterval = setInterval(animateScanner, 1500); // Adjust the interval as needed

        return () => {
            clearInterval(scannerInterval);
        };
    }, [scanning]);



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
        </div>
    );
};

export default Scanner;
