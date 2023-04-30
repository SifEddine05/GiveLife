import hero from '../assets/landing/Hero.png' 
import hero1 from '../assets/landing/Green.png' 
import Nav from './Nav';


const Hero = () => {
    return ( 
    <div id='Home'>
        <div className='w-full relative  flex items-start justify-center lg:items-center overflow-hidden  '>
            <div className='-z-20 absolute top-0 right-0 h-screen sm:bg-transparent bg-[#3B8174] sm:w-fit w-full '>
                <img src={hero} alt='Hero' className='w-full h-full  sm:block  hidden '/>
            </div>
            <div className='-z-10 absolute top-0 left-0  h-screen max-w-[70%] '>
                <img src={hero1} alt='Green' className='w-full h-full '/>
            </div>
            <div className='text-white flex flex-col justify-start items-center lg:mt-[200px] lg:mb-[155px]  mt-[150px] mb-[200px]  md:w-[600px] w-[350px]  '>
                <h3 className='md:text-[24px] text-[16px]  text-center md:mt-0 mt-4'>give hope for homeless</h3>
                <h2 className='md:text-[48px] text-[26px] text-center font-bold '>Helping each other can make world better</h2>
                <h3 className='md:text-[24px]  text-[16px] text-center '>We Seek out world changers and difference makers around the globe,and equip them to fulfill their unique purpose.</h3>
                <div className='flex jsutify-center items-center mt-[50px] '>
                    <button className='sm:bg-[#219D80] bg-transparent  hover:bg-[#0a3a2f] border-2 shadow-lg p-2 px-4 '>Donate Now</button>
                    <button className='border-2   p-2 px-4 shadow-lg ml-4  hover: sm:hover:bg-gray-400'>Know About Us</button>
                </div>
            </div>
    </div>
    </div> );
}
 
export default Hero;