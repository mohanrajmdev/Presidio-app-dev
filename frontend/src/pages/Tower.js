import React from 'react'
import { MdStadium } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Tower = ({name,towername}) => {
  return (
    <div >
      
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div class="p-6 justify-center w-full">

    <div className='justify-center w-full ml-[35%]'>
      <MdStadium size={60} />
    </div>
       
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {name}
    </h5>
    <p class="block font-sans text-lg antialiased font-light leading-relaxed text-inherit">
      {towername}
    </p>
  </div>
  <div class="p-6 pt-0">
    <div class="inline-block">
      <button
        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        <Link to="/seat">select</Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg>
      </button>
    </div>
  </div>
</div> 
    </div>
  )
}
export default Tower;