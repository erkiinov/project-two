import React, {useEffect, useState} from 'react'
import CardDetail from '../../components/detail/CardDetail'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Detail() {
  const params = useParams()
  const [api, setApi] = useState([{}])
  axios.get(`https://fakestoreapi.com/products/${params.id}`).then(res=>setApi([res.data]))
  return (
    <div className='page1-container'>
        {api.map(({id, title, price, description, category, image, rating}) => {
          return <CardDetail id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
        })}

    </div>
  )
}

export default Detail