import React from 'react';
import "../../App.css"

const Login = () => {
  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md">
        
        <div class="bg-[#FFF3EC] rounded-lg shadow-md px-16 pt-12 pb-8 mb-4">


          <form class="bg-[#E5783A] rounded-tl-3xl space-y-8  rounded-br-3xl shadow-md px-8 pt-6 pb-8 mb-4 mt-3" >
            <div className=' sm:mx-auto sm:w-full sm:max-w-md'>
              <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                Employee
              </h2>

            </div>
            <div class="mb-4">

              <input class="shadow appearance-none border rounded-3xl w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Mobile" />
            </div>
            <div class="mb-6">

              <input class="shadow appearance-none border rounded-3xl w-full py-2 px-5 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Password" />
            </div>
            <div class="flex flex-col space-y-4 items-center ">
              <button class="bg-slate-100 hover:bg-orange-100 text-black font-bold py-2 px-10 rounded-3xl focus:outline-none focus:shadow-outline transition duration-700 ease-in-out ..." type="button">
                Confirm
              </button>

              <a class="inline-block align-baseline font-bold text-sm text-black hover:text-orange-100" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
          {/* <p class="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p> */}
        </div>
      </div>
    </div>
  </div>

  )
}

export default Login