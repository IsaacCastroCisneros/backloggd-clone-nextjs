'use client'
import Link from 'next/link';
import React from 'react'

interface props
{
   label:React.ReactNode|string;
   styles?:string;
   href:string;
}

export default function LinkButton({label,styles='',href=''}:props ) 
{
  return (
    <Link
      href={href}
      className={`bg-accept font-medium text-[#fff] px-[.7rem] py-[.2rem] rounded-[.3rem] hover:brightness-[120%] transition-all duration-[200ms] ${styles} inline-block`}
    >
      {label}
    </Link>
  );
}
