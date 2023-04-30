import React from 'react';
import cro from '../assets/associations/croissant.png'
import cro1 from '../assets/associations/tadamoun.png'
import cro2 from '../assets/associations/islam.png'
import cro3 from '../assets/associations/kafil.png'

function Associations(props) {
    return (
        <div className="flex flex-col items-center py-10">
            <div className="grid place-items-center grid-cols-2 lg:flex lg:flex-row justify-center gap-10 lg:gap-24 items-center">
                <img src={cro} alt="" className="noir-et-blanc w-[150px]" />
                <img src={cro1} alt="" className="noir-et-blanc w-[150px]" />
                <img src={cro2} alt="" className="noir-et-blanc w-[300px]" />
                <img src={cro3} alt="" className="noir-et-blanc w-[150px]" />
            </div>
        </div>
        
    );
}

export default Associations;