import React from 'react'
import {useQuery} from "@tanstack/react-query"

import { fetchDictionary } from '../utils'
import { log } from 'console'

const Home = () => {
  const {data} = useQuery({
    queryKey: ['dictionary'],
    queryFn: fetchDictionary
  })

  console.log("reading data", data);
  
 
  return (
    <div>
      <h2>Home key</h2>
      {
        data?.list?.map((props:any)=>(
          <p>{props?.definition}</p>
        ))
      }
    </div>
  )
}

export default Home