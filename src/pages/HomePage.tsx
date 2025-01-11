import { useState } from 'react';
import photo from '../asset/photo.jpg';
import { Mail, X} from 'lucide-react';

function HomePage() {
  const [showButtons, setShowButtons] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [showSearchButtons, setShowSearchButtons] = useState(true);

  const handleSearchClick = () => {
    setShowButtons(!showButtons);  
    setShowSearchButtons(!showSearchButtons); 
  };

  const toggleEmailPopup = () => {
    setShowEmailPopup(!showEmailPopup);
  };

  const toggleImagePopup = () => {
    setShowImagePopup(!showImagePopup);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div className="w-full flex justify-between items-center p-4 absolute top-0">
        <div className="flex space-x-4">
          <button onClick={toggleEmailPopup} className="text-gray-700 hover:underline">
            Emails
          </button>
          <button onClick={toggleImagePopup} className="text-gray-700 hover:underline">
            Images
          </button>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/pokhrel-sh/" className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="User Icon" />
          </a>
          <a href="https://linkedin.com/in/shishir-pokhrel/" className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="App Icon" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-8">
          <span className="text-blue-500">Sh</span>
          <span className="text-red-500">is</span>
          <span className="text-yellow-500">hir</span>
          <span className="text-blue-500"> </span>
          <span className="text-blue-500">Po</span>
          <span className="text-green-500">kh</span>
          <span className="text-red-500">rel</span>
        </h1>

        <button
          onClick={handleSearchClick}
          className="w-full max-w-xl py-3 px-6 border border-white rounded-full bg-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-left"
        >
          <span className="text-gray-500">Search about Shishir here</span>
        </button>

        {showSearchButtons && (
          <div className="mt-4 flex space-x-4 bg-gray-300 rounded">
            <a href="https://en.wikipedia.org/wiki/Hold_your_horses" className="py-1 px-1 bg-white text-black text-xs rounded hover:bg-gray-200 hover:underline">
              Quick Search
            </a>
            <a href="https://en.wikipedia.org/wiki/Google_Search#%22I'm_Feeling_Lucky%22" className="py-1 px-1 bg-white text-black text-sm rounded hover:bg-gray-200 hover:underline">
              I am feeling lucky
            </a>
          </div>
        )}

        {showButtons && (
          <div className="mt-6 flex flex-col space-y-4">
            <a href="/me" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">About me</a>
            <a href="/me" className="p-2 bg-red-500 text-white rounded hover:bg-red-600">About me (again)</a>
            <a href="/me" className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">About me (again and again)</a>
            <a href="/me" className="p-2 bg-green-500 text-white rounded hover:bg-green-600">About me (illusion of choices)</a>
          </div>
        )}
      </div>

      {showEmailPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Contact Information</h2>
                <X onClick={toggleEmailPopup} className="cursor-pointer" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="text-gray-600" />
                  <span className="text-gray-800">pokhrel.sh@northeastern.edu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-gray-600" />
                  <span className="text-gray-800">me@shishirpokhrel.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-gray-600" />
                  <span className="text-gray-800">pokhrels.work@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}

      {showImagePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">This is me</h2>
                <X onClick={toggleImagePopup} className="cursor-pointer" />
              </div>
              <img
                src={photo}
                alt="Profile"
                className="rounded-lg w-80 h-80 object-cover"
              />
            </div>
          </div>
        )}

    </div>
  );
}

export default HomePage;



