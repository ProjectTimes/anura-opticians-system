import React from 'react';
import Logo from '../../assets/brand/logo.png';

const Sidebar = () => {
  return (
    <div>

      <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="cta-button-sidebar" class="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-[#E5783A]">
        <div class="w-auto">
        <img src={Logo} alt="Logo" />
        </div>
          <ul class="space-y-4 mt-4 font-medium">
            <li>
              <a href="#" class="flex items-center p-2 rounded-lg dark:text-dark hover:bg-gray-950 dark:hover:bg-gray-100 group">

                <span class="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2  rounded-lg dark:text-dark hover:bg-gray-950 dark:hover:bg-gray-100 group">

                <span class=" ms-3 whitespace-nowrap">Frames</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 rounded-lg dark:text-dark  hover:bg-gray-950 dark:hover:bg-gray-100 group">

                <span class=" ms-3 whitespace-nowrap">Lenses</span>
                {/* <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 rounded-lg dark:text-dark hover:bg-gray-950 dark:hover:bg-gray-100 group">

                <span class=" ms-3 whitespace-nowrap">Bills</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2  rounded-lg dark:text-dark  hover:bg-gray-950 dark:hover:bg-gray-100 group">

                <span class=" ms-3 whitespace-nowrap">Invoice</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2  rounded-lg dark:text-dark hover:bg-gray-950 dark:hover:bg-gray-100 group">

                <span class=" ms-3 whitespace-nowrap">Monthly Sales</span>
              </a>
            </li>
            
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-dark  hover:bg-gray-950 dark:hover:bg-gray-100 group">

                <span class="ms-3 whitespace-nowrap">Log Out</span>
              </a>
            </li>
          </ul>

        </div>
      </aside>

      





    </div>
  )
}

export default Sidebar