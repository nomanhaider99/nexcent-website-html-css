import React from 'react'
import CaringCard from '../ui/CaringCard'
import WomenImage from '@/public/images/Women.png'
import FirstLaptopImage from '@/public/images/FirstLaptop.png'
import SecondLaptopImage from '@/public/images/SecondLaptop.png'

const Caring = () => {
  return (
    <div className='caring'>
        {/* text-area */}
        <div className='caring-textarea'>
            <div className='caring-t-head'>Caring is the new marketing</div>
            <div className='caring-t-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolore nobis sed, porro placeat aut maiores nemo commodi <br /> quibusdam mollitia minima. Officiis, temporibus? Quas voluptatum nesciunt eum ad dolore velit.</div>
        </div>
        <div className='caring-cards'>
          <CaringCard
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolore nobis sed, porro placeat aut maiores nemo commodi quibusdam mollitia minima.'
            src={WomenImage}
           />
           <CaringCard
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolore nobis sed, porro placeat aut maiores nemo commodi quibusdam mollitia minima.'
            src={FirstLaptopImage}
           />
           <CaringCard
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolore nobis sed, porro placeat aut maiores nemo commodi quibusdam mollitia minima.'
            src={SecondLaptopImage}
           />
        </div>
    </div>
  )
}

export default Caring