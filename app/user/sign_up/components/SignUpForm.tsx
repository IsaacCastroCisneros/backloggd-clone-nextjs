'use client'

import React ,{useState} from 'react';
import { signUp } from '../../../../public/helpers/validations';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import useErrList from '../../../custom-hooks/useErrList';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import PopUp from '../../../../components/PopUp/PopUp';

import popUpOptions from '../../../interfaces/popUpOptions';
import userParams from '../../../interfaces/userParams';


async function submitting(
  e: React.FormEvent,
  userParams: userParams,
  refresh: () => void,
  errList: userParams,
  setShowPopUp:(value:popUpOptions)=>void
) 
{
  e.preventDefault();

  if (errList.status !== "ok")
  {
    setShowPopUp({title:'nope!',msg:'checkout your inputs', isShow:true})
    return
  }

  const req = await axios.post(
    "http://localhost:3000/api/user/register",
    userParams
  );
  
  const{status,data} = await req.data;
  
  if(status==='same')
  {
    setShowPopUp({
      title: "hey!!",
      msg: "looks like some fields already exist...",
      isShow: true,
      list: data,
    });
    return;
  }
  if(status==='ok')
  {
    setShowPopUp({
      title: "OK",
      msg: "you are sucessfully registered",
      isShow: true,
    });
  }
  if(status==='error')
  {
    setShowPopUp({
      title: "WTF",
      msg: "hey what are you doing",
      isShow: true,
    });
  }

  refresh();
}


export default function SignUpForm() 
{
    const[userParams,setUserParams]=useState<userParams>({})
    const[showPopUp,setShowPopUp]=useState<popUpOptions>({isShow:false})

    const router = useRouter();
    const[errList]=useErrList(userParams,signUp);

    return (
      <>
        <PopUp options={showPopUp} setShow={setShowPopUp}/>
        <main className="custom-container">
          <form
            className="custom-container-2 flex flex-col gap-[1rem]"
            onSubmit={(e) =>
              submitting(e, userParams, router.refresh, errList, setShowPopUp)
            }
          >
            <h1 className="text-text text-title">Registration</h1>
            <Input
              placeHolder="Username"
              errMsg={errList.userName}
              onChange={(e) => {
                setUserParams((prev) => {
                  return { ...prev, userName: e.target.value };
                });
              }}
            />
            <Input
              placeHolder="Email address"
              errMsg={errList.email}
              onChange={(e) => {
                setUserParams((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />
            <Input
              placeHolder="Password"
              errMsg={errList.password}
              type={'password'}
              onChange={(e) => {
                setUserParams((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
            />
            <Input
              placeHolder="Password Confirmation"
              errMsg={errList.passwordRetry}
              type={'password'}
              onChange={(e) => {
                setUserParams((prev) => {
                  return { ...prev, passwordRetry: e.target.value };
                });
              }}
            />
            <Button label="Register" type="submit" />
          </form>
        </main>
      </>
    );
}
