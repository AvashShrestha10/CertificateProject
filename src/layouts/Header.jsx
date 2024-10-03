import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const handleClear = () => {
        window.location.reload();
      };
    
    
  return (
    <div>
    


    <div className="bg-blue-100 flex justify-center items-center h-full">
    <div className="flex gap-16 bg-blue-50 p-8 rounded-md shadow-md w-screen  ">
        {/* <!-- Left Section with Icon --> */}
        <div className="flex flex-col items-center text-blue-00">
            <img src="https://jsbin.com/favicon.ico" alt="JS Bin Icon" className="w-16 h-16 mb-4" />
            <button className="border border-blue-500 px-6 py-2 rounded-md text-blue-500 hover:bg-blue-200" onClick={handleClear}>
                New bin
                
            </button>
            <label className="mt-4">
                <input type="checkbox" className="mr-2"/>
                Textarea editor mode
            </label>
        </div>

        {/* <!-- Middle Section with Links --> */}
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="font-bold">JS Bin features »</h3>
                <ul className="text-blue-500 space-y-2">
                    
                    
                   <li> <Link to="/random" className="hover:underline">Getting Started</Link></li>
                   <li> <Link to="/random" className="hover:underline">Keyboard Shortcuts</Link></li>
                   <li> <Link to="/random" className="hover:underline">Exporting/importing gist</Link></li>
                    
                </ul>
            </div>

            <div>
                <h3 className="font-bold">Pro features »</h3>
                <ul className="text-blue-500 space-y-2">
                <li> <Link to="/random" className="hover:underline">Private bins</Link></li>
                <li> <Link to="/random" className="hover:underline">Vanity URLs</Link></li>
                    
                   
                </ul>
               
            </div>
        </div>

        {/* <!-- Right Section with Additional Links --> */}
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="font-bold">Blog »</h3>
                <ul className="text-blue-500 space-y-2">
                <li> <Link to="/random" className="hover:underline">The Return and The Refactor</Link></li>
                    
                </ul>
            </div>

            <div>
                <h3 className="font-bold">Help »</h3>
                <ul className="text-blue-500 space-y-2">
                <li> <Link to="/random" className="hover:underline">When do revisions change?</Link></li>
                <li> <Link to="/random" className="hover:underline">Vanity URLs</Link></li>
                    
                </ul>
                <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
                    Upgrade to pro now
                </button>
            </div>

            

            
        </div>
        <div>
                <h3 className="font-bold">Donate to JS Bin ♥ »</h3>
                <ul className="text-blue-500 space-y-2">
                <li> <Link to="/random" className="hover:underline">Support JS Bin to keep the project open source</Link></li>
                <li> <Link to="/random" className="hover:underline">Follow @js_bin on Twitter</Link></li>
                <li> <Link to="/random" className="hover:underline">By using JS Bin you agree to our legal terms</Link></li>
                   
                </ul>
            </div>
        <div className="text-right text-gray-700 mt-8">
                <p>“Everyone should learn how to program a  <br />computer because it teaches you <br />how to think” — <strong>Steve Jobs</strong></p>
            </div>
    </div>
</div>
    
    </div>
  )
}

export default Header
