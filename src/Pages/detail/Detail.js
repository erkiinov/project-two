import React, {useEffect, useState} from 'react'
import CardDetail from '../../components/detail/CardDetail'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductInfo from '../../components/product-info/ProductInfo'
import Title from '../../components/title/Title'
import './style.scss'
import Button from '../../components/buttton/Button'

import Card from '../../components/card/Card'
import CustomerReview from '../../components/customer-review/CustomerReview'

function Detail() {
  const params = useParams()
  const [api, setApi] = useState([{}])
  const [cardAll, setCardAll] = useState([{}])
  axios.get(`https://fakestoreapi.com/products/${params.id}`).then(res=>setApi([res.data]))
  axios.get(`https://fakestoreapi.com/products/`).then(res=>setCardAll(res.data))
  return (
    <div className='page1-container'>
        {api.map(({id, title, price, description, category, image, rating}) => {
          return <CardDetail id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
        })}
          
          
        <div className='ProductInfo-div' style={{paddingTop: '40px'}}>

          <div className='titleSearch' style={{width: '100%', borderBottom: '1px solid #EFEFEF', paddingBottom: '25px'}}><Title title='Product information.'/></div>
          
          <div className='grid-product-info'>

            <ul>
              <li><Title description='EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and professional instructions created by PhD Helga George'/></li>
              <li><Title description='Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee'/></li>
              <li><Title description='Cilantro common culinary uses: salsa, guacamole, pesto, salads, chutney, baked breads, pad thai, pico de gallo, rice, grilled shrimp skewers, falafel, and more'/></li>
              <li><Title description='Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product'/></li>
              <li><Title description='SEEDRA customer service - please contact us directly through Amazon with any questions or concerns about our products. We care about each customer and do our best to provide you with 100% satisfaction'/></li>
            </ul>

            <ProductInfo/>
          </div>


        </div>
        <div className='title-page-1'>
            <Title title='Customer reviews.'/>
            <Button value='Make review' color='#359740' bgc='#ffffff' border='1' borderColor='#EFEFEF'/>
        </div>
        <CustomerReview img='yes'/>
        <CustomerReview  img='no'/>
        <Title title='Related products.'/>
        

        <div className='RetaletPr'>
          {
            cardAll.map(({id, title, price, description, category, image, rating}) => {
              if(id > 1 && id <= 4){
                return <Card img={image} title={title} starCount={rating.count} cost={price} id={id} />
              } 
            })
          }
        </div>

       
     

    </div>
  )
}

export default Detail