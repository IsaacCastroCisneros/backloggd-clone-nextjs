import type { NextApiRequest, NextApiResponse } from 'next'
import { signUp } from '../../../public/helpers/validations'
import {pool} from '../../../config/db'
import { OkPacket, RowDataPacket } from 'mysql2'

import errors from '../../../app/interfaces/errors' 


export default async function handler(req:NextApiRequest,res:NextApiResponse) 
{
 
  const{error}=signUp.validate(req.body)

  if(error)
  {
    return res.json({status:'error'})
  }

  const{userName,email,password}=req.body

  const [isSame] = await
  pool.query<RowDataPacket[]>(
    `SELECT
    distinct
    CASE WHEN name = ? THEN name END AS name,
    CASE WHEN email = ? THEN email END AS email,
    CASE WHEN password = ? THEN password END AS password
    FROM users`,
    [
      userName,
      email,
      password
    ]
  );

  if(isSame.length>1)
  {
    let errors:errors[] = []

    isSame.forEach(entry=>
      {
        if(entry.name!==null)
        {
          errors = [{err:`the user "${entry.name}" already exist`},...errors]
        }
        if(entry.email!==null)
        {
          errors = [{err:`the email "${entry.email}" already exist`},...errors]
        }
        if(entry.password!==null)
        {
          errors = [{err:`the password already exist`},...errors]
        }
      })

      return res.json({status:'same',data:errors} )
  }

  await pool.query("INSERT INTO users SET ?",{name:userName,password,email})

  return res.json({status:'ok',data:req.body})
  
}