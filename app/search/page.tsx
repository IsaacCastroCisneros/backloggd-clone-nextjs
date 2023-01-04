import React from 'react'
import Results from './components/Results/Results';

interface props
{
  searchParams:searchParams
}

interface searchParams
{
  games?:string
}

export default function page(/* {searchParams}:props */) 
{
/*   const{games}=searchParams
  console.log(searchParams) */

  return (
      <main className="custom-container">
       {/*  <Results param={games||''} /> */}
      </main>
  );
}
