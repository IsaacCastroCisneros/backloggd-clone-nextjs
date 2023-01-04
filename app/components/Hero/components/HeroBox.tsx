import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface props
{
   styles?:string;
   headerLabel:string;
   icon:IconProp;
   list:list[]
}

interface list
{
    icon:IconProp;
    text:string;
}

export default function HeroBox(props:props) 
{
  const
  {
    styles,
    headerLabel,
    icon,
    list
  }=props

  return (
    <div className={`${styles}`}>
      <section className="bg-bg3 flex items-center gap-[1rem] p-[.8rem] rounded-[.3rem] mb-[1rem]">
        <div className=" bg-bg rounded-[100%] w-[2.2rem] h-[2.2rem] flex items-center justify-center text-bg2">
          <FontAwesomeIcon icon={icon} />
        </div>
        <p className=" text-text1 text-[1.5rem] mob:text-[1.8rem]">{headerLabel}</p>
      </section>
      <section>
        {
          <ul>
            {list.map((item,pos) => {
              return (
                <li key={pos} className="list-none flex items-center gap-[.5rem]">
                  <span className="text-myPurple">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <p className="text-text1 text-[1.1rem] mob:text-[1.7rem] font-thin">{item.text}</p>
                </li>
              );
            })}
          </ul>
        }
      </section>
    </div>
  );
}
