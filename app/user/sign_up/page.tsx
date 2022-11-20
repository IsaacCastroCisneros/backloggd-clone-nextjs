'use client'

import React ,{useState} from 'react'
import Button from '../../components/global-components/Button'
import Input from '../../components/global-components/Input'

export default function Page() 
{
  const[userParams,setUserParams]=useState({})

  return(
    <main className='custom-container'>
      <form className='custom-container-2 flex flex-col gap-[1rem]'>
        <h1 className='text-text text-title'>
           Registration
        </h1>
        <Input placeHolder='Username'
         onChange={(e)=>
          {
           setUserParams(prev=>
             {
               return {...prev,userName:e.target.value}
             })
          }}
         />
        <Input placeHolder='Email address'
          onChange={(e)=>
          {
           setUserParams(prev=>
             {
               return {...prev,email:e.target.value}
             })
          }}
         />
        <Input placeHolder='Password'
          onChange={(e)=>
          {
           setUserParams(prev=>
             {
               return {...prev,password:e.target.value}
             })
          }}
         />
        <Input placeHolder='Password Confirmation' 
          onChange={(e)=>
          {
           setUserParams(prev=>
             {
               return {...prev,passwordRetry:e.target.value}
             })
          }}
         />
        <Button label="Register" type='submit'/>
      </form>
    </main>
  )
}
