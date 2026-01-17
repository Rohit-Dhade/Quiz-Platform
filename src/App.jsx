import React from 'react'
import mcqQuestions from './Questions'
import { useState } from 'react'
import FinalResults from './components/FinalResults'

const App = () => {
  const [selected, setselected] = useState("")
  const [questionCounter, setquestionCounter] = useState(1)
  const [clicked, setclicked] = useState({})
  const [results, setresults] = useState(false)

  const totalQuestions = mcqQuestions.length;

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

  const handleOptionClick = (optionIndex) => {
    setclicked(prev => ({ ...prev, [questionCounter]: optionIndex }))
  }

  const currentAnswer = clicked[questionCounter]
  const [totalMarks, settotalMarks] = useState(0)

  const Finals = () => {
    if (questionCounter < 10) return alert("Completed All 10 Questions");
    settotalMarks(0);

    for (let i = 0; i < 10; i++) {
      if (mcqQuestions[i].correctOption + 1 === Number(clicked[i + 1])) {
        settotalMarks(prev => prev + 1);
      };
    }

    setresults(true);

  }

  return (
    <>
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

            {mcqQuestions[questionCounter - 1].options.map((options, index) => {
              const optionValue = String(index + 1);
              const isChecked = currentAnswer === optionValue

              return (
                <div key={index} onClick={() => handleOptionClick(optionValue)} className={`bg-[#1A1A1A] h-[15%] flex items-center pl-5 gap-4 pt-robo-regular text-xl rounded-2xl transition-all duration-300 hover:scale-104 ease-out text-white ${isChecked ? 'bg-emerald-400' : 'bg-[#1A1A1A]'}`}><input style={{ width: '20px', height: '20px' }} type="radio" checked={isChecked} onChange={() => setselected("1")} />
                  <label className="k-radio-label">{options}</label></div>
              )
            }
            )
            }

          </div>

          <div className='flex items-center justify-evenly mt-8 gap-3 w-[90%] flex-col'>
            <span className='text-white opacity-60 pt-robo-bold'>{`${questionCounter}/${totalQuestions}`}</span>
            <button onClick={Finals} className='pt-robo-bold bg-emerald-400 w-[25%] rounded-xl text-xl p-2 flex items-center justify-center active:scale-98 transition-all duration-300 ease-in-out text-black '>Submit</button>
          </div>

        </div>
      </div >

      {results && <FinalResults onClose={() => setresults(false)} count={totalMarks} />}
    </>
  )
}

export default App