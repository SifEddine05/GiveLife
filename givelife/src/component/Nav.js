import { useState } from 'react';
import logo from '../assets/all/logo.png'
import menu from '../assets/all/menu.png'
const Nav = () => {
    const [menuActive , setMenuActive]=useState(false)
    const handlClick =()=>{
        setMenuActive(false)
    }
    return ( 
    <div className=" items-center container bg-transparent">
        <div className=' flex justify-between items-center p-2 '>
          <a href="/#Home" className='w-[90px]'>
            <img  src={logo} alt="logo" className='w-full' />
          </a>
          <div className="md:flex text-base md:text-lg lg:text-xl justify-around gap-16 p-2 font-semibold items-center hidden ">
                <a href='/#Home' className='hover:font-bold hover:bg-my-light-green hover:text-my-green rounded-lg px-6 py-2 '>Home</a>
                <a href='/#About' className='hover:font-bold hover:bg-my-light-green hover:text-my-green rounded-lg px-6 py-2'>About</a>
                <a href='/#Statistics' className='hover:font-bold hover:bg-my-light-green hover:text-my-green rounded-lg px-6 py-2 '>Statistics</a>
                <a href='/#FAQ' className='hover:font-bold hover:bg-my-light-green hover:text-my-green rounded-lg px-6 py-2 '>FAQ</a>
                <a href='/#Contact' className='hover:font-bold hover:bg-my-light-green hover:text-my-green rounded-lg px-6 py-2 '>Contact Us</a>
          </div>
          <div className='w-[50px] '>
            <button className='bg-[#219D80] hover:bg-[#0a3a2f] text-white font-semibold p-2 rounded-lg md:text-[16px] text-[14px]'>Join</button>
          </div>
          <button className='w-[45px] md:hidden block' onClick={() => setMenuActive(!menuActive)}>
            <img src={menu} alt='menu' className='w-full'/>
         </button>
        </div>
        <div className={`bg-[#219D80] md:hidden fixed z-5 transition-transform top-[80px] -right-[100vw] ${
          menuActive && "-translate-x-[100vw]"} w-[100%] h-fit p-6 flex flex-col gap-6 text-lg text-primary capitalize xl:static xl:flex-row xl:h-fit xl:w-fit xl:items-center xl:text-base xl:gap-12`} >
            <div className='h-screen md:hidden flex flex-col gap-10'>
                <div className='w-full p-1 flex justify-center hover:bg-gray-400 items-center'>
                    <a href='#Home' onClick={handlClick} className='hover:font-bold hover:cursor-pointer '>Home</a>
                </div>
                <div className='w-full p-1 flex justify-center hover:bg-gray-400'>
                    <a href='#About' onClick={handlClick} className='hover:font-bold '>About</a>
                </div>
                <div className='w-full p-1 flex justify-center hover:bg-gray-400'>
                    <a href='#Statistics' onClick={handlClick} className='hover:font-bold '>Statistics</a>
                </div>
                <div className='w-full p-1 flex justify-center hover:bg-gray-400'>
                    <a href='#FAQ' onClick={handlClick} className='hover:font-bold '>FAQ</a>
                </div>
                <div className='w-full p-1 flex justify-center hover:bg-gray-400'>
                    <a href='#Contact' onClick={handlClick} className='hover:font-bold '>Contact Us</a>
                </div>
            </div>
            
        </div> 
    </div> 
    );
}
 
export default Nav;