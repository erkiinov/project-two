import React, { useEffect, useMemo, useState } from 'react'
import Button from '../../components/buttton/Button'
import Showcase from '../../components/showcase/Showcase'
import Title from '../../components/title/Title'
import './page1.scss'
import Card from '../../components/card/Card'
import axios from 'axios'
import Grid from '../../components/grid/Grid'
import HelpToGrow from '../../components/helps-to-grow/app'


const menus = [
  {
    title: 'All',
    icon: './assets/Frame 16.png',
  },
  {
    icon: './assets/Frame 16.png',
    title: 'BUNDLES',
  },
  {
    icon: './assets/Frame 16.png',
    title: 'HERBS',
  },
  {
    icon: './assets/Frame 16.png',
    title: 'Vegetables',
  },
  {
    icon: './assets/Frame 16.png',
    title: 'Fruits',
  },
  {
    title: 'Supplies',
    icon: './assets/Frame 16.png',
  },
  {
    title: 'Flowers',
    icon: './assets/Frame 16.png',
  },
]

const grid = [
  {
    img: './assets/card/image 2 (1).png',
    title: 'How to plant spinach correctly in winter',
    time: '12.09.2021',
    description: 'In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...',
    bgc: '#EAF1EB'
  },
  {
    img: './assets/card/Ellipse 1.png',
    title: 'How to plant spinach correctly in winter',
    time: '12.09.2021',
    bgc: '#EFF2F8'
  },
  {
    img: './assets/card/Ellipse 1.png',
    title: 'How to plant spinach correctly in winter',
    time: '12.09.2021',
    bgc: '#EFF2F8'
  },
  {
    img: './assets/card/garden.png',
    description: 'In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...',
    title: 'How to plant spinach correctly in winter',
    time: '12.09.2021',
    bgc: '#EFF2F8'
  },
]


function Page1() {
  // const [api, setApi] = useState([{}])
  
  // axios.get('https://fakestoreapi.com/products').then(res=>setApi(res.data))
  
  return (
    <div className='page1-container'>
        <Showcase/>

        <div className='title-page-1'>
            <Title title='Our products.'/>
            <Button value='View all (12)' color='#359740' bgc='#ffffff' border='1' borderColor='#EFEFEF'/>
        </div>

        <div className='menu-page-1'>
            {menus.map(({title, icon})=>{
                return <Button value={title.toUpperCase()} color='#1F2533' bgc='white' border='2' borderColor='#EFEFEF' iconImg={icon}/>
            })}
        </div>
        
        {/* <div className='cards-page-1'>
            {
              api.map(({id, title, price, image, rating}) => {
                if(id <= 6){
                  return <Card img={image} starCount={rating.count} title={title} cost={price} id={id}  />
                }
              })
            }
        </div> */}
        <div className='title-page-1'>
            <Title title='Our blog.'/>
            <Button value='Go to our blog' color='#359740' bgc='#ffffff' border='1' borderColor='#EFEFEF'/>
        </div>

        <div className='grid-page-1'>
          {
            grid.map(({time, title, description, img, bgc}) => <Grid time={time} title={title} description={description} img={img} bgc={bgc}/>)
          }
        </div>

        <HelpToGrow/>
    </div>
  )
}

export default Page1