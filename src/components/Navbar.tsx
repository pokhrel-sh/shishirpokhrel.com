import { useState } from "react";
import { Link} from "react-router-dom";



const links =[
  { to: "/", text: "Home", color: "bg-blue-300"},
  { to: "/skills", text: "Skills", color: "bg-green-300"},
  { to: "/projects", text: "Projects", color: "bg-yellow-300"},
  { to: "https://drive.google.com/file/d/1_4wMMChEVZUhOwWxXRmbg43DTBMg7Vix/view?usp=sharing", text: "Resume", color: "bg-red-300", newTab: true},
]


function Navbar() {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleLinkClick = () => {
    setShowOptions(false);
  

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
          {!showOptions &&(
            <button
            className="flex flex-col px-4 py-2 border rounded bg-green-100"
            onClick={handleClick}
          >
            Menu
          </button>
          )}
          {showOptions && (
            <div>
              {links.map((link, index) => (
                link.newTab ?
                <a key= {index} href={link.to} target = "_blank" rel = "noopener referrer" className = {`${link.color} m-1 hover:bg-yellow-100 text-black font-bold py-2 px-4 rounded`} onClick={handleLinkClick}>
                  {link.text}
                </a>:
                <Link key={index} to={link.to} className={`${link.color} m-1 hover:bg-yellow-100 text-black font-bold py-2 px-4 rounded`} onClick={handleLinkClick}>
                  {link.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
