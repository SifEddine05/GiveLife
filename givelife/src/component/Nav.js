import { useState } from 'react';

const Nav = () => {
    const [menuActive , setMenuActive]=useState(false)
    const handlClick =()=>{
        setMenuActive(!menuActive)
    }
    return ( 
    <div className=" items-center container bg-transparent">
        <div className=' flex justify-between items-center p-2 '>
          <a href="/#Home" className='w-[90px]'>
            <img  src="/assets/Logo.svg" alt="logo" className='w-full' />
          </a>
          <div className="md:flex text-base md:text-lg lg:text-xl justify-around gap-16 p-2 font-semibold items-center hidden ">
                <a href='/#Home' className='hover:font-bold hover:bg-my-light-green hover:text-my-green rounded-lg px-6 py-2 '>Home</a>
                <a href='/#About' className='hover:font-bold hover:bg-my-light-green hover:text-my-green rounded-lg px-6 py-2'>About</a>
                <a href='/#Causes' className='hover:font-bold hover:bg-my-light-green hover:text-my-green rounded-lg px-6 py-2 '>Causes</a>
                <a href='/#Pages' className='hover:font-bold hover:bg-my-light-green hover:text-my-green rounded-lg px-6 py-2 '>Pages</a>
                <a href='/#Blogs' className='hover:font-bold hover:bg-my-light-green hover:text-my-green rounded-lg px-6 py-2 '>Blogs</a>
          </div>
          <div className='w-[50px] '>
            <button className='bg-[#219D80] hover:bg-[#0a3a2f] text-white font-semibold p-2 rounded-lg md:text-[16px] text-[14px]'>ADD</button>
          </div>
          <button className='w-[45px] md:hidden block' onClick={() => setMenuActive(true)}>
            <img src='/assets/menu.png' alt='menu' className='w-full'/>
         </button>
        </div>
        <div className={`bg-[#0a3a2f] hidden md:lock absolute z-5 transition-transform top-0 -right-[100vw] ${menuActive && "-translate-x-[100vw]"} w-screen h-[300px] p-6 flex flex-col gap-6 text-lg text-primary capitalize md:static md:flex-row md:h-fit md:w-fit md:items-center md:text-base md:gap-12`} >
            <button className='w-[25px] ' onClick={() => setMenuActive(false)}>
                <img src='/assets/landing/cancel.png' alt="cancel" className='w-full' />
            </button>
            <div className='h-screen hidden md:block'>
                <div className='w-full p-1 flex justify-center hover:bg-gray-400 items-center'>
                    <a href='#Home' className='hover:font-bold hover:cursor-pointer '>Home</a>
                </div>
                <div className='w-full p-1 flex justify-center hover:bg-gray-400'>
                    <a href='#About' className='hover:font-bold '>About</a>
                </div>
                <div className='w-full p-1 flex justify-center hover:bg-gray-400'>
                    <a href='#Causes' className='hover:font-bold '>Causes</a>
                </div>
                <div className='w-full p-1 flex justify-center hover:bg-gray-400'>
                    <a href='#Pages' className='hover:font-bold '>Pages</a>
                </div>
                <div className='w-full p-1 flex justify-center hover:bg-gray-400'>
                    <a href='#Blogs' className='hover:font-bold '>Blogs</a>
                </div>
            </div>
            
        </div> 
    </div> 
    );
}
 
export default Nav;