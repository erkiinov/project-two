import React from 'react'
import Title from '../title/Title'

const HelpToGrow = () => {
  return (
    <div className='HelpsToGrow'>
        <div className='left'>
            <Title title='Seedra helps to grow fast and efficiant'/>
            <br/> <br/>
            <Title description='SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George'/>
            <br/>
            <Title description='Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.'/>
            <Title description='Your easy growing experience is our guarantee'/>
            <Title description='Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more'/>
            <br/>
            <Title description='Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product'/>
        </div>
        <img src='./assets/screenshot_15.png' alt=''/>
    </div>
  )
}

export default HelpToGrow