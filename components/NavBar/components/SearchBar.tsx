'use client'

import React,{useState} from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

interface searchParams
{
   param?:string
}

export default function SearchBar() 
{
  const router = useRouter();
  const[searchParams,setSearchParams]=useState<searchParams>({})

  return (
    <>
{/*      <form onSubmit={submittingParams}> */}
      <Input
        placeHolder="Search"
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} size={"lg"} />}
        onChange={(e)=> router.push(`/search?games=${e.target.value}`)}
      />
      <Button
        label={
          <p>
            <span className="font-bold text-[1.2rem] leading-[0px]">+</span>
            Log a Game
          </p>
        }
      />
 {/*     </form> */}
    </>
  );
}
