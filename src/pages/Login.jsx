import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div>
<div className='flex bg-[#f7f7f7] w-screen h-min justify-between'>

<div className='flex  border-2 shadow-md p-2 m-4  ml-52 hover:bg-[#ebe5e5]' >
<img src="https://jsbin.com/favicon.ico" alt="JS Bin Icon" className="h-5" />
<Link to="/"  className='pl-2 font-bold '> Back To Js Bin</Link>
</div>

<div className='flex gap-5 mr-44 font-bold p-6 text-lg '>
<a href="#"  className=' hover:text-sky-400' >About</a>
<a href="#" className=' hover:text-sky-400'>Blog</a>
<a href="#" className=' hover:text-sky-400'>Help</a>
</div>

</div>

<div className='flex justify-center  min-h-screen items-center'>
<div className='w-2/6 h-min border-2 bg-[#f7f7f7] '>

<div>
  <h1 className='text-center font-bold'>LOGIN</h1>
</div>

<div>
<form className='p-4 '>
      <label >
        <input type="text" className='border-black-400 h-14 p-2 w-full mt-3' placeholder='USERNAME:'/>
      </label>
      <label >
        <input type="mail" className='border-black-400 h-14 p-2 w-full mt-3' placeholder='EMAIL:'/>
      </label>
      <label >
        <input type="password" className='border-black-400 h-14 p-2  w-full mt-3' placeholder='PASSWORD:'/>
      </label>
      <button type='submit' className='border-2 shadow-md p-2 m-4  ml-52 hover:bg-[#ebe5e5] font-bold'>Submit</button>

      <div className='flex border-2 shadow-md p-2 m-4 ml-20 mr-24 pl-12  hover:bg-[#ebe5e5] font-bold '>
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="w-8 h-8"/>
      <button type='button' className='text-center'>Register Via GitHub</button>
    </div>
    </form>



</div>


</div>


</div>

<div className='flex bg-[#f7f7f7] w-screen h-min justify-around'>
<div className='flex gap-9  font-light  p-6 text-lg '>
<a href="#"  className=' hover:text-sky-400' >About</a>
<a href="#" className=' hover:text-sky-400'>GitHub</a>
<a href="#" className=' hover:text-sky-400'>Twitter</a>
<a href="#" className=' hover:text-sky-400'>Help</a>
<a href="#" className=' hover:text-sky-400'>Youtube</a>
</div>


</div>
      </div>



    </>
  )
}

export default Login
