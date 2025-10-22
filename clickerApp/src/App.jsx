import './App.css'
import Display from './components/numberDisplay'
import ButtonInc from './components/button'

import { useState } from 'react'



function App() {
  // naming convention i think
  const [count, setCount] = useState(0)
  const [item, setItem] = useState("")

  function getInput(formData) {
      setItem(formData.get("query"))
  }

  
  return (
    <div className='relative flex flex-col justify-center items-center h-screen'>
      <h1 className='text-6xl font-black text-center justify-center underline italic font-serif'>
          !!! a click er app !!!
        </h1>
      <div className='flex flex-row px-40 py-10 gap-x-10 mx-auto text-center '>
        <Display text= {count} item={item}   />
        
        
        <div className='flex flex-col items-center justify-center gap-y-10'>
          <ButtonInc 
            className={'bg-green-600'}
            text="number up"
            onClick={() => setCount(count+1)} />

            <ButtonInc 
            className={'bg-red-600'}
            text="number down"
            onClick={() => setCount(count-1)} />

        </div>
      </div>
      
      {/* optional stuff that i think would be fun if got time*/}
      <div className='flex flex-col pt-20'>
        <h2 className='font-sans text-left text-4xl'>what r we countin ??!</h2>
        <form className="flex items-center justify-center text-4xl font-light" action={getInput}>
          <input className="bg-amber-50 px-10 py-6 w-[50vw] text-black mr-20 h-20 rounded-lg" name="query" />
          <button className="text-4xl border-2 border-white bg-gray-700 px-8 py-5 rounded-2xl h-20 font-medium" type="submit"> enter! </button>
        </form>
        
      </div>
      
    </div>
  )
}

export default App;
