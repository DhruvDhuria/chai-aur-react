import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    

  return (
    <div className='text-center h-3/5 w-3/6 flex flex-col justify-center align-middle p-8 m-4 text-black text-3xl rounded-3xl bg-transparent border border-orange-400'>
        Github Followers: {data.followers}
        <img className='p-4 m-4' src={data.avatar_url} alt="Github Picture" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}