import React from 'react'
import { useQuery} from '@tanstack/react-query'
import { fetchDictionary } from '../utils'

const Home = () => {	
	const {data} = useQuery({
		queryKey: ['dictionary'],
		queryFn: fetchDictionary
	})


  return (
	<div>
		<h3>Home Key</h3>
		{
			data?.list?.map((props:any)=>(
				<p>{props?.definition}</p>
			))
		}
	</div>
  )
}

export default Home