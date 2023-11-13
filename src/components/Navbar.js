import React from 'react'

export default function Navbar() {
    return (
        
        <header className="text-black body-font bg-[#EAB308]">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <span className="ml-3 text-xl">React Basic Counter App</span>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                </nav>
                <button className="inline-flex items-center  border-0 py-1 px-3 text-white hover:text-black focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><a href='https://react.dev/learn'> Go to React Documentation</a>
                </button>
            </div>
        </header>
    );
}
