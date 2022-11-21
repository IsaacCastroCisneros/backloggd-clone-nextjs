import type { NextApiRequest, NextApiResponse } from 'next'
import {pool} from '../../../config/db'

type Data = {
  name: string
}

export default async function handler(req:NextApiRequest,res:NextApiResponse) 
{
 
  console.log(req.body)
  
  /* await pool.query("INSERT INTO users SET ?",req.body) */

  res.status(200).json({ name: 'register' })
}