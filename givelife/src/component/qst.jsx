import { useState } from "react";

const Qst = ({title,text}) => {

  const [details,setDetails]=useState('+')
  const [show, setShow]=useState(false)
  const [color,setColor]=useState('bg-transparent') // bg-[#D0E7E2]
  const more =()=>{
    if(details=='+')
    {
      setDetails('-')
      setColor("bg-[#D0E7E2]")
    } 
    else 
    {
      setDetails('+')
      setColor("bg-transparent")

    }
    setShow(!show)
  }


    return ( 
        <div className={`border-b-2 pb-4   ${color } p-2 w-full`}>
        <div className="flex  justify-between items-center hover:cursor-pointer " onClick={more}>
          <h3 className="lg:text-[22px] md:text-[18px] sm:text-[14px] text-[12px] font-bold">{title}</h3>
          <button className="lg:text-[22px] md:text-[18px] sm:text-[14px] text-[12px]  font-bold" onClick={more}>{details}</button>
        </div>
       {show && <p className="pt-2"> {text}</p>}
      </div>
 );
}
 
export default Qst;