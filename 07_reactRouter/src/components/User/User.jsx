import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Github() {

    const {userid} = useParams()
    
    const [data, setData] = useState([])

    useEffect( () => {
        fetch(`https://api.github.com/users/${userid}`)
        .then( response => response.json() )
        .then( data => {
            console.log(data);
            setData(data)
        } )
    }, [] )

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-4xl p-4'>Github Followers: {data.followers}
    <img src={data.avatar_url} />
     </div>
  )
}

export default Github