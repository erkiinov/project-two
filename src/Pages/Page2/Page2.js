import React, {useState, useMemo} from 'react'
import axios from 'axios'
import Card from '../../components/card/Card'
import Button from '../../components/buttton/Button'
import Search from '../../components/search/Search'

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

const Page2 = () => {
    const [api, setApi] = useState([{}])
    axios.get('https://fakestoreapi.com/products').then(res=>setApi(res.data))
  return (
    <div className='page1-container'>
        <Search/>
        <div className='menu-page-1'>
            {menus.map(({title, icon})=>{
                return <Button value={title.toUpperCase()} color='#1F2533' bgc='white' border='2' borderColor='#EFEFEF' iconImg={icon}/>
            })}
        </div>
        <div className='cards-page-1'>
            {
              api.map(({id, title, price, image, rating}) => {
                if(id <= 18){
                  return <Card img={image} starCount={rating.count} title={title} cost={price} id={id}  />
                }
              })
            }
        </div>
    </div>
  )
}

export default Page2