
import { useState } from 'react';




const Management = () => {

    const [position, setPosition] = useState({ x: 0, });
    const [isHit, setIsHit] = useState(false);
    const [count, setCount] = useState(0);

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
            setCount(count + 1)
            clickMe()
        }

    };
    const handleMouseDown = () => {
        setIsHit(true);
        if (isHit) {
            setCount(count + 1)
            clickMe()
        }

    };

    return (
        <>
            <div className="flex h-full " >
                <div className="w-4/6 bg-slate-50 text-black ">section {count} </div>
                <button onClick={handleMouseDown} onMouseUp={handleMouseUp} className="cursor-col-resize px-[6px] shadow bg-black"></button>
                <div className="w-2/6  text-black">section 2</div>
            </div>
        </>
    )
}

export default Management
