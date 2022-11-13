import React from 'react'

interface props
{
   label:React.ReactNode|string;
   styles?:string
}

export default function Button({label,styles=''}:props) {
  return (
    <button className={`bg-accept font-medium text-[#fff] px-[.7rem] py-[.2rem] rounded-[.3rem] hover:brightness-[120%] transition-all duration-[200ms] ${styles}`}>
      {label}
    </button>
  )
}
