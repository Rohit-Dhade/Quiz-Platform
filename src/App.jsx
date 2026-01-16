import React from 'react'
import mcqQuestions from './Questions'
import { useState } from 'react'

const App = () => {
  const [selected, setselected] = useState("")
  const [questionCounter, setquestionCounter] = useState(1)

  const QuestionCounterInc = () => {
    if (questionCounter >= 10) return
    setquestionCounter(prev => prev + 1);
    setselected("")
  }

  const QuestionCounterDec = () => {
    if (questionCounter <= 1) return
    setquestionCounter(prev => prev - 1);
    setselected("")
  }

  const changeSelected = () => {
    setselected("")
  }

  return (
    <div className='bg-[#202020] h-screen w-full flex gap-5 p-8'>
      <div className='bg-black w-3/5 shadow-white/50 h-full rounded-2xl p-10 flex items-center justify-between flex-col'>
        <div className='h-[30%] text-2xl pt-robo-regular text-white w-[95%]'>
          <span>Q.{questionCounter}  {mcqQuestions[questionCounter - 1].question}</span>
        </div>
        <div className='flex items-center justify-evenly gap-3 w-[90%]'>
          <button onClick={QuestionCounterDec} className='pt-robo-bold bg-emerald-400 w-[20%] rounded-xl text-xl p-2 flex items-center justify-center active:scale-98 transition-all duration-300 ease-in-out text-black'>Previous</button>
          <button onClick={QuestionCounterInc} className='pt-robo-bold bg-emerald-400 w-[20%] rounded-xl text-xl p-2 flex items-center justify-center active:scale-98 transition-all duration-300 ease-in-out text-black'>Next</button>
        </div>
      </div>
      <div className='bg-black w-2/5 shadow-white/50 h-full rounded-2xl flex flex-col items-center'>
        <div className='flex flex-col gap-7 w-[90%] mt-10 h-[70%]'>
          <div onClick={() => setselected("1")} className='bg-[#1A1A1A] h-[15%] flex items-center pl-5 gap-4 pt-robo-regular text-xl rounded-2xl hover:bg-[#2C2C2C] transition-all duration-300 hover:scale-103 ease-out text-white'><input style={{ width: '20px', height: '20px' }} type="radio" name="radio" id="radio1" className="k-radio" checked={selected === "1"} onChange={() => setselected("1")} />
            <label className="k-radio-label">{mcqQuestions[questionCounter - 1].options[0]}</label></div>
          <div onClick={() => setselected("2")} className='bg-[#1A1A1A] h-[15%] flex items-center pl-5 gap-4 pt-robo-regular text-xl rounded-2xl hover:bg-[#2C2C2C] transition-all duration-300 hover:scale-103 ease-out text-white'><input style={{ width: '20px', height: '20px' }} type="radio" name="radio" id="radio1" className="k-radio" checked={selected === "2"} onChange={() => setselected("2")} />
            <label className="k-radio-label">{mcqQuestions[questionCounter - 1].options[1]}</label></div>
          <div onClick={() => setselected("3")} className='bg-[#1A1A1A] h-[15%] flex items-center pl-5 gap-4 pt-robo-regular text-xl rounded-2xl hover:bg-[#2C2C2C] transition-all duration-300 hover:scale-103 ease-out text-white'><input style={{ width: '20px', height: '20px' }} type="radio" name="radio" id="radio1" className="k-radio" checked={selected === "3"} onChange={() => setselected("3")} />
            <label className="k-radio-label">{mcqQuestions[questionCounter - 1].options[2]}</label></div>
          <div onClick={() => setselected("4")} className='bg-[#1A1A1A] h-[15%] flex items-center pl-5 gap-4 pt-robo-regular text-xl rounded-2xl hover:bg-[#2C2C2C] transition-all duration-300 hover:scale-103 ease-out text-white'><input style={{ width: '20px', height: '20px' }} type="radio" name="radio" id="radio1" className="k-radio" checked={selected === "4"} onChange={() => setselected("4")} />
            <label className="k-radio-label">{mcqQuestions[questionCounter - 1].options[3]}</label></div>
        </div>

        <div className='flex items-center justify-evenly mt-8 gap-3 w-[90%] flex-col'>
          <span className='text-white opacity-60 pt-robo-bold'>{`${questionCounter}/10`}</span>
          <button className='pt-robo-bold bg-emerald-400 w-[25%] rounded-xl text-xl p-2 flex items-center justify-center active:scale-98 transition-all duration-300 ease-in-out text-black '>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default App