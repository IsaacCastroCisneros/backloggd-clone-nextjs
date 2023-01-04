'use client'

import axios from 'axios'
import React, { useEffect } from 'react'
import SearchCard from '../components/SearchCard'
import {QueryFunctionContext, useInfiniteQuery} from 'react-query'
import {useInView} from 'react-intersection-observer';
import { QueryClientProvider,QueryClient } from "react-query"

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  }
);

interface props
{
  query:string
}
/* interface queryProps
{
  queryKey:string;
  pageParam:undefined|string
} */

export default function Results({query}:props) 
{
  return(
    <QueryClientProvider client={queryClient}>
      <Listing query={query}/>
    </QueryClientProvider>
  )
}

function Listing({query}:props)
{
  const{ref,inView}=useInView()

  const url =`https://api.rawg.io/api/games?key=3d53a095c9ba4dbea25f8e0e580df904&search=${query}`

  const
   {
    data:gameList,
    hasNextPage,
    fetchNextPage,
    isFetching
   }=useInfiniteQuery(['results',url],getGames,
  {
    getNextPageParam:(page)=>
    {
       return page.next
    }
  })

  async function getGames({queryKey,pageParam=undefined}:QueryFunctionContext<Array<string>,string>)
  {
    let url = queryKey[1];

    if (pageParam !== undefined) {
      url = pageParam;
    }

    const res = await axios.get(url);
    return res.data;
  }

  useEffect(()=>
  {
     if(inView&&hasNextPage)
     { 
        fetchNextPage()
     }
  },[inView])

  return (
    <>
      {
        isFetching&&<div className='text-white'>loading...</div>
      }
      <div className="flex flex-col gap-[1rem]">
        {gameList?.pages.map(page=>
          {
             return(
              page?.results.map((gaem: any) => {
               return <SearchCard {...gaem} />;
             })
            )
          })}
      </div>
      <div ref={ref} className="opacity-0 pointer-events-none" >fff</div>
    </>
  );
}


