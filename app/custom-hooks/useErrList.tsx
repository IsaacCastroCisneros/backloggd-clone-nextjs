import { ObjectSchema } from 'joi'
import React,{useEffect,useState} from 'react'
import { userParams } from '../user/sign_up/components/SignUpForm'

export default function useErrList(
  userParams: userParams,
  filter: ObjectSchema
) 
{

  const[errList,setErrList]=useState<userParams>({})

  useEffect(() => 
  {
    const errors:userParams = {}

    const { error } = filter.validate(userParams, { abortEarly: false });
    
    if(error===undefined)return setErrList({status:'ok'})

    error?.details.forEach(entry=>
      {
          const index = entry.context?.key || 'none'
          errors[index]=entry.message
      })
     
    errors.status='err'

    setErrList(errors)
  },[userParams]);

  return[errList]
}
