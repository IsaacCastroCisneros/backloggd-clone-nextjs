import axios from 'axios'
import React from 'react'

async function getGames(game)
{
    const res = await axios.get(`https://api.rawg.io/api/games?key=3d53a095c9ba4dbea25f8e0e580df904&search=${game}`)
    return res.data
}

export default async function Games({searchParams}) 
{
  const{games}=searchParams
  const gameList = await getGames(games)

  return (
    <div>
       {
         gameList.results.map(gaem=>
          {
            return (
               <img src={gaem.background_image} alt="" />
            )
          })
       }
    </div>
  )
}
