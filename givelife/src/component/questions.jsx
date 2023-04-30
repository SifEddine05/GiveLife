import Qst from "./qst";
import { useState } from "react";
import qst from '../assets/landing/Ph33.svg'

const Question = () => {
  const [arr, setArr] = useState([
    {
      "index":1,
      "question": "Let's Do The Right Thing Now",
      "answer": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy "
    },
    {
      "index":2,
      "question": "Can I Donate Anonymously ",
      "answer": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy "
    },
    {
      "index":3,
      "question": "Join Your Hand With Us For A Better Life ",
      "answer": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy "
    },
    {
      "index":4,
      "question": "How Do I Cancel My Recurring Donation ",
      "answer": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy "
    },
  ])
  return (
  <div className="container flex md:flex-row flex-col gap-10 justify-center items-center bg-[#EDF7F5] pt-6 pb-8">
    <div className="flex-1 flex flex-col  justify-center items-start ">
      <h3 className="md:text-[18px] text-[14px] font-semibold mb-4 lg:mb-8 ">Have any Question?</h3>
      <h1 className="md:text-[32px] text-[28px] font-bold mb-4 lg:mb-8">Frequently Asked Questions​</h1>
      <img src={qst} alt='qst' className="lg:w-[375px] md:w-[275px] w-full"/>
    </div>
    <div className=" border-2  shadow-md h-fit  bg-white sm:mt-0 mt-4 ">
      {arr.map((elem)=>{
          return(<Qst title={elem.question} text={elem.answer} key={elem.index}/> ) 
      })}
    </div>
  </div> );
}
 
export default Question;