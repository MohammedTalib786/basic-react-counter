
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

function App() {

  return (
    <>
      <Navbar />
      <div className="bg-slate-300 h-[28rem] flex justify-center items-center gap-16 ">

        <button className='px-[1.30rem] pb-[0.50rem] bg-[#EAB308] text-white rounded-2xl text-[2rem] font-bold active:bg-[#ffd452] active:text-black'>-</button>
        <div className='font-[Orbitron] text-[2rem] text-black'>Output:</div>
        <button className='px-4 pb-[0.50rem] bg-[#EAB308] text-white rounded-2xl text-[2rem] font-bold active:bg-[#ffd452] active:text-black'>+</button>

      </div>
      <Footer />
    </>
  );
}

export default App;
