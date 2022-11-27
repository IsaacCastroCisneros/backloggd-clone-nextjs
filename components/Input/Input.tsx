'use client'
import React,{useState} from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'

interface props
{
  placeHolder:string;
  icon?:React.ReactNode|string;
  type?:string
  phOpacity?:string;
  styles?:string;
  errMsg?:string;
  underText?:string;
  onChange?:React.ChangeEventHandler<HTMLInputElement>|undefined
}

export default function Input(props:props) 
{
  const[border,setBorder]=useState<boolean>(false)

  const
  {
    placeHolder,
    phOpacity='text-placeHolder2',
    icon,
    styles='',
    errMsg='',
    underText='',
    type='text',
    onChange=undefined   
  }=props

  return (
    <div>
      <div
        className={`bg-field py-[.2rem] px-[.5rem] border-[1px] border-[transparent] rounded-[.2rem] flex ${styles} ${border?'border-[#839df9]':''}`}
        onFocus={()=>setBorder(true)}
        onBlur={()=>setBorder(false)}
      >
        <input
          type={type}
          placeholder={placeHolder}
          className={`bg-[transparent] font-normal text-[#fff] outline-none placeholder:${phOpacity} flex-1`}
          onChange={onChange}
        />
        {icon&&
          <button className="hover:text-[#fff] block pl-[.5rem] text-text2">
            {icon}
          </button>
        }
      </div>
      <span className="text-[#ff0000]">{errMsg || underText}</span>
    </div>
  );
}
