import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleClear = () => {
    window.location.reload();
  };

  return (
    <div className="bg-blue-100 w-full py-6">
      {/* Main container with flex layout */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-12 lg:px-16 w-full max-w-screen-2xl mx-auto">
        {/* Left Section with Icon */}
        <div className="flex flex-col items-center text-blue-600">
          <img
            src="https://jsbin.com/favicon.ico"
            alt="JS Bin Icon"
            className="w-12 h-12 md:w-16 md:h-16 mb-4"
          />
          <button
            className="border border-blue-500 px-4 py-2 rounded-md text-blue-500 hover:bg-blue-200"
            onClick={handleClear}
          >
            New bin
          </button>
          <label className="mt-4 text-sm">
            <input type="checkbox" className="mr-2" />
            Textarea editor mode
          </label>
        </div>

        {/* Middle Section with Links */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-bold text-lg">JS Bin features »</h3>
            <ul className="text-blue-500 space-y-2 text-sm">
              <li><Link to="/random" className="hover:underline">Getting Started</Link></li>
              <li><Link to="/random" className="hover:underline">Keyboard Shortcuts</Link></li>
              <li><Link to="/random" className="hover:underline">Exporting/importing gist</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Pro features »</h3>
            <ul className="text-blue-500 space-y-2 text-sm">
              <li><Link to="/random" className="hover:underline">Private bins</Link></li>
              <li><Link to="/random" className="hover:underline">Vanity URLs</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Section with Additional Links */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-bold text-lg">Blog »</h3>
            <ul className="text-blue-500 space-y-2 text-sm">
              <li><Link to="/random" className="hover:underline">The Return and The Refactor</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Help »</h3>
            <ul className="text-blue-500 space-y-2 text-sm">
              <li><Link to="/random" className="hover:underline">When do revisions change?</Link></li>
              <li><Link to="/random" className="hover:underline">Vanity URLs</Link></li>
            </ul>
            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
              Upgrade to pro now
            </button>
          </div>
        </div>

        {/* Donation Section */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Donate to JS Bin ♥ »</h3>
          <ul className="text-blue-500 space-y-2 text-sm">
            <li><Link to="/random" className="hover:underline">Support JS Bin to keep the project open source</Link></li>
            <li><Link to="/random" className="hover:underline">Follow @js_bin on Twitter</Link></li>
            <li><Link to="/random" className="hover:underline">By using JS Bin you agree to our legal terms</Link></li>
          </ul>
        </div>

        {/* Steve Jobs Quote */}
        <div className="text-center text-gray-700 mt-8 md:mt-0">
          <p>“Everyone should learn how to program a <br />computer because it teaches you <br />how to think” — <strong>Steve Jobs</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Header;
