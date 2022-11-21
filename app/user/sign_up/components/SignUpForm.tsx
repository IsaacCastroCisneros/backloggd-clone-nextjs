'use client'

import React ,{useState} from 'react';
import { signUp } from '../../../../public/helpers/validations';
import Button from '../../../components/global-components/Button';
import Input from '../../../components/global-components/Input';
import useErrList from '../../../custom-hooks/useErrList';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export interface userParams
{
  [index: string]:string|undefined;
  userName?:string;
  email?:string;
  password?:string;
  passwordRetry?:string;
  status?:string;
}

async function submitting(e:React.FormEvent,userParams:userParams,refresh:()=>void)
{
   e.preventDefault();
   await axios.post('http://localhost:3000/api/user/register',userParams);
   refresh();
}


export default function SignUpForm() 
{
    const[userParams,setUserParams]=useState<userParams>({})

    const router = useRouter();
    const[errList]=useErrList(userParams,signUp)

    return(
      <main className='custom-container'>
        <form className='custom-container-2 flex flex-col gap-[1rem]'
         onSubmit={(e)=>submitting(e,userParams,router.refresh)}
         >
          <h1 className='text-text text-title'>
             Registration
          </h1>
          <Input placeHolder='Username'
           errMsg={errList.userName}
           onChange={(e)=>
            {
             setUserParams(prev=>
               {
                 return {...prev,userName:e.target.value}
               })
            }}
           />
          <Input placeHolder='Email address'
            errMsg={errList.email}
            onChange={(e)=>
            {
             setUserParams(prev=>
               {
                 return {...prev,email:e.target.value}
               })
            }}
           />
          <Input placeHolder='Password'
            errMsg={errList.password}
            onChange={(e)=>
            {
             setUserParams(prev=>
               {
                 return {...prev,password:e.target.value}
               })
            }}
           />
          <Input placeHolder='Password Confirmation' 
            errMsg={errList.passwordRetry}
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
