import { useState } from "react";

function Navbar() {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(true);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="text-center w-full mb-auto py-4 flex justify-between items-center">
        <div className="text-left">
          <h1 className="text-4xl font-bold name-title">Shishir Pokhrel</h1>
          <h2 className="text-lg text-gray-600 subtitle">
            CS & Business Student at Northeastern University
          </h2>
        </div>
        <div>
        {!showOptions && (
          <button className="flex flex-col px-4 py-2 border rounded bg-green-100" onClick={handleClick}>
            Click Me
          </button>
        )}
        {showOptions && (
          <>
            <button className="bg-blue-300 m-1 hover:bg-yellow-100 text-black font-bold py-2 px-4 rounded">
              Skills
            </button>
            <button className="bg-green-300 m-1 hover:bg-yellow-100 text-black font-bold py-2 px-4 rounded">
              Projects
            </button>
            <button className="bg-red-300 m-1 hover:bg-yellow-100 text-black font-bold py-2 px-4 rounded">
              Resume
            </button>
          </>
        )}
      </div>
      </div>
      
    </div>
  );
}

export default Navbar;
