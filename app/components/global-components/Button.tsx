'use client'
import React from 'react'

interface props
{
   label:React.ReactNode|string;
   styles?:string;
   type?:"submit" | "button" | "reset" | undefined;
}

export default function Button({label,styles='',type='button'}:props) 
{
  return (
    <button
      type={type}
      className={`bg-accept font-medium text-[#fff] px-[.7rem] py-[.2rem] rounded-[.3rem] hover:brightness-[120%] transition-all duration-[200ms] ${styles}`}
    >
      {label}
    </button>
  );
}
