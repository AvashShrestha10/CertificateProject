import React from 'react'

const Result = ({srcCode}) => {
  return (
    <div>
       <div className="bg-[#ffffff] p-4 shadow mt-4 rounded-lg">
                <h2
                    className="text-lg font-semibold mb-2 text-white">
                </h2>
                <iframe
                    className="w-full h-60 border border-gray-700 rounded-md"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
    </div>
  )
}

export default Result
