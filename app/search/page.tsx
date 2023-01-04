import axios from 'axios'
import React from 'react'
import Results from './components/Results/Results';
import postRequest from './components/Results/utils/postRequest';

interface props
{
  searchParams:searchParams
}
interface searchParams
{
  games?:string
}

export default async function page({searchParams}:props) 
{
  const{games}=searchParams

  return (
      <main className="custom-container">
        <Results param={games||''} />
      </main>
  );
}
