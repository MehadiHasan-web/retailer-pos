import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ManComCard from '../Components/ManComCard';




const Management = () => {
    const [position, setPosition] = useState({ x: 0 });
    const [isHit, setIsHit] = useState(false);
    const [count, setCount] = useState(0);
    const [tableData, setTableData] = useState([]);
    const [itemId, setItemId] = useState(1)

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .get(`https://rpos.pythonanywhere.com/api/v1/inventory/`, {
                headers: { Authorization: "token " + token },
            })
            .then((res) => res.data)
            .then((data) => {
                console.log(data);
                setTableData(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const selectItem = tableData.find((item) => item.id === itemId);

    console.log(selectItem)

    const handleMouseMove = (event) => {
        const x = event.clientX;
        setPosition({ x });
        console.log(x);
    };

    function clickMe() {
        handleMouseMove(event);
    }
    const handleMouseUp = () => {
        setIsHit(false);
        if (isHit) {
            setCount(count + 1);
            clickMe();
        }
    };
    const handleMouseDown = () => {
        setIsHit(true);
        if (isHit) {
            setCount(count + 1);
            clickMe();
        }
    };

    return (
        <>
            <div className="flex h-full ">
                <div className="w-full md:w-9/12 bg-slate-50 text-black ">
                    <table className="table text-base">
                        {/* head */}
                        <thead className="bg-slate-200	">
                            <tr>
                                <th className="text-black ">No.</th>
                                <th className="text-black text-center">Item name</th>
                                <th className="text-black">Stock</th>
                                <th className="text-black ">Date</th>
                                <th className="text-black ">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) => (
                                <tr
                                    key={data.id}
                                    onClick={() => setItemId(data.id)}
                                    className={`${index % 2 == 1
                                        ? "bg-slate-100 border-b-[1px] border-slate-100"
                                        : "bg-white border-b-[1px] border-slate-100"
                                        } hover:bg-green-50`}
                                >
                                    <td className="text-center">{++index}</td>
                                    <td className="text-center">{data.itemName}</td>
                                    <td className="">
                                        <p>{data.unit} </p>
                                    </td>
                                    <td className="">
                                        <p>{data.created_at} </p>
                                    </td>
                                    <td className="">
                                        <p>TK {data.mrp}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        {/* foot */}
                        <tfoot className="bg-slate-200	">
                            <tr>
                                <th className="text-black ">No.</th>
                                <th className="text-black ">Item name</th>
                                <th className="text-black ">Unit</th>
                                <th className="text-black ">Date</th>
                                <th className="text-black ">Total Price</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <button
                    onClick={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    className="cursor-col-resize px-[2px] shadow bg-black hidden md:block"
                ></button>
                <div className="w-3/12 text-black hidden md:block "><ManComCard selectItem={selectItem || []}></ManComCard></div>
            </div>
        </>
    );
};

export default Management;
