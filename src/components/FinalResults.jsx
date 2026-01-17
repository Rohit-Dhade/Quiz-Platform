import { useState, useEffect } from 'react';
import { GrClose } from "react-icons/gr";

const FinalResults = ({ onClose ,count}) => {
    const [move, setmove] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setmove(true)
        }, 200);
    }, [])

    return (
        <div className='fixed inset-0 bg-black/10 backdrop-blur-sm w-full h-screen flex items-center justify-center z-100'>
            <div className={`relative bg-gray-200 h-[50%] w-[30%] shadow-2xl rounded-4xl py-4 transform transition-all duration-1000 ease-initial ${move ? "translate-x-0" : "-translate-x-[50%]"} flex items-center justify-center flex-col`}>
                <button className='absolute right-7 top-5 flex items-center text-3xl' onClick={onClose}><GrClose size={20} /></button>
                <div className='w-[50%] h-[50%] flex items-center justify-center flex-col text-3xl gap-10'>
                    <div className='absolute top-3'>Quiz Results</div>
                    <div className='text-5xl bg-emerald-400 p-8 rounded-2xl'>{`${count}/10`}</div>
                </div>
            </div>
        </div>
    )
}

export default FinalResults