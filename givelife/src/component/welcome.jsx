import { useState } from "react";
import qst from '../assets/landing/Ph33.svg'

const Welcome = () => {
    const [DonationPorcentage,setDonPor]=useState(75)
    const [MedicalPorcentage,setMedPor]=useState(90)

    return ( 
    <div className="mb-8 flex md:flex-row flex-col justify-around items-center container">
        <div className=" md:max-w-[50%] w-full mt-8 ">
            <h3 className="md:text-[16px] text-[14px] font-semibold mb-2 lg:mb-3 ">Welcome to Charity</h3>
            <h1 className="md:text-[30px] text-[28px] font-bold mb-2 lg:mb-3">Let Us Come Together To Make a Difference​</h1>
            <p className="lg:text-[20px] md:text-[18px] text-[16px] font-light sm:w-[80%] mb-2 lg:mb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.</p>
            <div className="flex justify-around  items-center w-full">
                <div className="bg-[#EDF7F5] px-4 pt-4 pb-8 rounded-md mb-8 pr-4 ">
                    <h3 className="text-[#219D80] text-[24px] font-bold text-center  ">Our Mission</h3>
                    <p className="text-[16px]  mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                </div>
                <div className="bg-[#EDF7F5] px-4 pt-4 pb-8 rounded-md mb-8 ml-4">
                    <h3 className="text-[#219D80] text-[24px] font-bold text-center ">Our vision</h3>
                    <p className="text-[16px]  mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                </div>
            </div>
            <div className="flex w-full justify-between text-[20px] font-bold">
                <h3>Donations</h3>
                <h3>{DonationPorcentage} %</h3>
            </div>
            <div className="flex flex-row h-3 mt-2 w-full">
                  <div className="bg-my-green" style ={{width: `${DonationPorcentage}%`}}></div>
                  <div className="bg-my-light-green" style ={{width: `${100-DonationPorcentage}%`}}></div>
            </div>
            <div className="flex w-full justify-between text-[20px] font-bold mt-2">
                <h3>Medical Help</h3>
                <h3>{MedicalPorcentage} %</h3>
            </div>
            <div className="flex flex-row h-3 mt-2 w-full md:mb-[200px] mb-[40px]">
                  <div className="bg-my-green" style ={{width: `${MedicalPorcentage}%`}}></div>
                  <div className="bg-my-light-green" style ={{width: `${100-MedicalPorcentage}%`}}></div>
            </div>
        </div>  
        <div className="relative flex flex-col  md:self-start md:mt-[100px] ">
            <img src={qst} alt='' className="lg:w-[400px] md:w-[300px]"/>
            <div className="md:block hidden absolute lg:-right-[60px] md:-right-[40px] -bottom-[150px] z-50 lg:h-[350px] lg:w-[350px] md:w-[275px] md:h-[275px] bg-[#219D80] bg-opacity-20  p-4">
                <div className=" bg-white  w-[100%]  h-[100%] px-1 font-semibold">
                    <h3 className="lg:text-[16px] md:text-[13px] lg:leading-7 md:leading-4 text-[#219D80]"><span className="font-bold text-[48px]">.</span> Together, we're going to make the future</h3>
                    <h3 className="lg:text-[16px] md:text-[13px] lg:leading-10 md:leading-4"><span className="font-bold text-[48px] ">.</span> children where we are able to fulfill all</h3>
                    <h3 className="lg:text-[16px] md:text-[13px] lg:leading-10 md:leading-4"><span className="font-bold text-[48px] ">.</span> their requirements to keep them safe from withered world</h3>
                    <h3 className="lg:text-[16px] md:text-[13px] lg:leading-10 md:leading-4"><span className="font-bold text-[48px] ">.</span> We have already stepped out and start changing the world</h3>
                </div>

            </div>
        </div> 
    </div> );
}
 
export default Welcome;