import Link from 'next/link';
import React from 'react'

export default function SearchCard(props:any) 
{
  const
  {
    name,
    released,
    background_image,
    id
  }=props

  console.log(props)

  return (
    <div
      key={id}
      className="h-[10rem] flex overflow-hidden border-b-[1px] border-b-[#323644]"
    >
      <section className='flex flex-1'>
         <div
          className='w-[90.5px] border-[1px] rounded-[.4rem] border-[#323644]'
          style={
            {
              backgroundImage:`url(${background_image})`,
              backgroundSize: "cover",
              backgroundRepeat: "none",
              backgroundPosition: "center",
            }
          }
          >

         </div>
         <h3
          className='flex-1'
          >
           {name}
         </h3>
      </section>
      <section className='flex-1'>

      </section>
      {/* <section
        className="flex-[1.5]">
        <div
         className=''
         style={{
          backgroundImage: `url(${background_image})`,
          backgroundSize: "cover",
          backgroundRepeat: "none",
          backgroundPosition: "center",
        }}
         ></div>
      </section> */}
      {/* <section className="flex-[3] p-[1rem]">
        <Link href={'/lol'}>
          <h2 className="text-[#fff] text-[1.5rem] font-bold hover:text-text1">{name}</h2>
        </Link>
      </section> */}
    </div>
  );
}
