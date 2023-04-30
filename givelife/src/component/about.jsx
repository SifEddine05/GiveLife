import ab from '../assets/landing/photoss.svg'


const About = () => {
    return ( 
    <div id="About" className="container  flex  sm:flex-row flex-col-reverse justify-around gap-6 p-8 items-center mb-4">
        <img src={ab} alt="photo1" className="  lg:w-[500px] md:w-[350px] sm:w-[250px] w-full" />
        <div className="sm:max-w-[40%] w-full ">
            <h3 className="md:text-[18px] text-[14px] font-semibold mb-4 lg:mb-8 ">About Us</h3>
            <h1 className="md:text-[32px] text-[28px] font-bold mb-4 lg:mb-8">Your Support is Really Powerful.​</h1>
            <p className="lg:text-[22px] md:text-[18px] text-[16px] font-light sm:w-[80%] mb-4 lg:mb-8">The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
            <button className="px-4 py-2 mt-4 sm:mt-8 bg-[#219D80] hover:bg-[#0a3a2f] text-white text-[16px] font-semibold">Read More</button>
        </div>
    </div> 
    );
}
 
export default About;