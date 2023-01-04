import axios from 'axios'
import React from 'react'
import Results from './components/Results';
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
        <Results query={games||''} />
      </main>
  );
}
