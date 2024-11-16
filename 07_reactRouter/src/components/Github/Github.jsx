
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect( () => {
    //     fetch(`https://api.github.com/users/aazad-tiwari`)
    //     .then( response => response.json() )
    //     .then( data => {
    //         console.log(data);
    //         setData(data)
    //     } )
    // }, [] )

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-4xl p-4'>Github Followers: {data.followers}
    <img src={data.avatar_url} />
     </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/aazad-tiwari`)
  return response.json()
}