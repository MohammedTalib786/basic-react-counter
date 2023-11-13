
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handlerAdd = () => {
    setCount(count + 1)
  }

  const handlerLess = () => {
    if (count <= 0) {
      return false
    }
    else {

      setCount(count - 1)
    }
  }


  return (
    <>
      <Navbar />
      <div className="bg-white h-[30.4rem] flex justify-center items-center gap-4 ">

        <button className='px-[1.30rem] pb-[0.50rem] bg-[#EAB308] text-white rounded-2xl text-[2rem] font-bold active:bg-[#ffd452] active:text-black' onClick={handlerLess}>-</button>
        <div className='font-[Orbitron] text-[2rem] text-black  w-28 text-center'>{count}</div>
        <button className='px-4 pb-[0.50rem] bg-[#EAB308] text-white rounded-2xl text-[2rem] font-bold active:bg-[#ffd452] active:text-black' onClick={handlerAdd} >+</button>

      </div>
      <Footer />
    </>
  );
}

export default App;
