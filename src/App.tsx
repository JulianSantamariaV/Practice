import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);
  const [cronometer, setCronometer] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCronometer((prev) => prev + 1);
    }, 1000)

    return () =>
      clearInterval(interval);
  }, [])


  useEffect(() => {
    console.log(`El estado ha cambiado a ${count}`);
  }, [count])


  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const duplicateCount = () => {
    setCount(count * 2);
  };

  const divideCount = () => {
    if (count > 1) {
      setCount(count / 2);
    }
  };

  return (
    <>
      <h1 className='text-2xl'>setState() + setEffect()</h1>
      <div className="card bg-amber-200 shadow-2xl opacity-70">
        <div className='flex justify-center space-x-6 bg-amber-100 shadow-2xl mx-auto rounded-b-full max-w-3xl'>
          <div>
            <p>segundos logueado</p>
            {cronometer}
          </div>
          <div>
            <p>contador manual</p>
            {count}
          </div>
        </div>
        <div className='space-x-6 mt-5'>
          <button className='border-amber-400 py-2 px-4 rounded-2xl shadow-amber-600 bg-amber-300' onClick={incrementCount}>Aumenta</button>

          <button className='border-amber-400 py-2 px-4 rounded-2xl shadow-amber-600 bg-amber-300' onClick={decrementCount}>Merma</button>

          <button className='border-amber-400 py-2 px-4 rounded-2xl shadow-amber-600 bg-amber-300' onClick={duplicateCount}>Multiplicar</button>

          <button className='border-amber-400 py-2 px-4 rounded-2xl shadow-amber-600 bg-amber-300' onClick={divideCount}>Dividir</button>
        </div>
      </div>
    </>
  )
}

export default App
