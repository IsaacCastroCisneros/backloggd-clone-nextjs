import React from 'react';
import Link from 'next/link'

interface props
{
  url:string;
  label:string;
  underline?:boolean
};

export default function UserNavOption({url,label,underline}:props) 
{
  return (
    <li className={underline?'border-b-[1px] border-text':''} >
      <Link href={url} className="block text-text3 capitalize font-normal px-[.5rem] py-[.1rem] text-[1rem] hover:bg-[hsla(0,0%,100%,.1882352941)] w-[100%]">
        {label}
      </Link>
    </li>
  );
}
