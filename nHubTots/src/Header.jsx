import React from 'react'


const Header = () => {
  return <>
    <header className='flex justify-between'>
        <h1 className="text-sm"> Abdulkadir Usman</h1>
        <div className=' flex justify-between space-x-2  mr-10 lg:space-x-20'> 
          <h1 className='text-sm'> Introduction</h1>
          <h1 className='text-sm'> Projects</h1>
          <h1 className='text-sm'> Contact</h1>
        </div>

    </header>
    </>
}

export default Header