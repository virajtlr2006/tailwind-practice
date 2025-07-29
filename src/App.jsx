import { useState } from 'react'
import { FaUser } from 'react-icons/fa'; // Font Awesome user icon
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>
        <div className='flex display-flex text-white space-x-12 ml-12 span'>
          <p className='mt-4 hover:font-extrabold'>Docs</p>
          <p className='mt-4 hover:font-extrabold'>Features</p>
          <p className='mt-4 hover:font-extrabold'>Tutorials</p>
          <p className='mt-4 hover:font-extrabold'> Services</p>
        {/* Sign In and profile Button */}
        <div className='ml-144 span space-x-8 mt-4'>
          <button className='font-bold  text-black bg-gray-300 border-2 border-double rounded-4xl px-4 py-1'>Sign In</button>
          <button className='font-bold text-black bg-gray-300 border-2 border-double rounded-4xl px-4 py-1'>Profile</button>
        </div>
      </div>
      {/* ALl divs */}
      <div className=' flex dispaly-flex flex-wrap place-content-evenly'>
      {/* First Div */}
      <div className='h-60 w-60 m-8 bg-gray-800 border-4  rounded-4xl bg-transparent overflow-hidden'>
        <img  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9pfJM6VKaBv1iIzVD07dDMbLUYyKgChJSe9yaMmivKV6kKr7VH0zKmz5DCtIv-V_3XUrEicErKxTZT7Od4yHZBpafz6TbKnk7WeQXtVl0" alt="#" />
        <div className='bg-gray-800 text-white h-screen'>This is Dog</div>
      </div>

      <div className='h-60 w-60 m-8 bg-gray-800 border-4  rounded-4xl  overflow-hidden'>This is div</div>
      <div className='h-60 w-60 m-8 bg-gray-800 border-4  rounded-4xl  overflow-hidden'>This is div</div>
      <div className='h-60 w-60 m-8 bg-gray-800 border-4  rounded-4xl  overflow-hidden'>This is div</div>
      <div className='h-60 w-60 m-8 bg-gray-800 border-4  rounded-4xl  overflow-hidden'>This is div</div>
      <div className='h-60 w-60 m-8 bg-gray-800 border-4  rounded-4xl  overflow-hidden'>This is div</div>
      <div className='h-60 w-60 m-8 bg-gray-800 border-4  rounded-4xl  overflow-hidden'>This is div</div>
      <div className='h-60 w-60 m-8 bg-gray-800 border-4  rounded-4xl  overflow-hidden'>This is div</div>
      </div>
    </div>
    </div>

  ) 
}
export default App
