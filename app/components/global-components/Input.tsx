import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'

interface props
{
  placeHolder:string;
  icon?:React.ReactNode|string;
  styles?:string
}

export default function Input(props:props) 
{
  const
  {
    placeHolder,
    icon,
    styles=''   
  }=props

  return (
    <div className={`bg-field py-[.3rem] px-[.5rem] rounded-[.2rem] flex ${styles}`}>
      <input
        type="text"
        placeholder={placeHolder}
        className="bg-[transparent] font-normal text-[#fff] outline-none placeholder:text-placeHolder flex-1"
      />
      <button className='hover:text-[#fff] block pl-[.5rem] text-text2'>{icon}</button>
    </div>
  );
}
