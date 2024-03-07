import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-3 px-6 shadow-lg border-b-[1px]'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFW13zXZV3JFKVMunc87H6aDip8agjPziTUtJc8qUa0anNIxJIX7FsoSdsStQXnVLsCM&usqp=CAU'
      alt='LOGO'
      width={100}
      height={100}
      />
      <div className=' hidden md:flex gap-5'>
        <h2 className='hover:bg-black px-3 p-2 rounded-md hover:text-white cursor-pointer'>Home</h2>
        <h2 className='hover:bg-black px-3 p-2 rounded-md hover:text-white cursor-pointer'>History</h2>
        <h2 className='hover:bg-black px-3 p-2 rounded-md hover:text-white cursor-pointer'>Contact Us</h2>
      </div>





      <UserButton/>
    </div>
  )
}

export default Navbar