import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

interface CaringCardProps {
    src: string | any,
    description: string,
}

const CaringCard: React.FC<CaringCardProps> = ({
    src,
    description
}) => {
  return (
    <div className='caring-card'>
        {/* Image */}
        <div>
            <Image
                src={src}
                alt=''
                height={200}
                width={250}
             />
        </div>
        {/* Text Box */}
        <div className='caring-card-text-box'>
            <div className='caring-card-t-desc'>{description}</div>
            <div className='caring-button'>Readmore <FaArrowRight size={15} color='#4caf4f' /></div>
        </div>
    </div>
  )
}

export default CaringCard