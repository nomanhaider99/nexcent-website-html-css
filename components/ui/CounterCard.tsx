import React from 'react'

interface CounterCardProps {
    icon: any,
    count: string,
    title: string
}

const CounterCard: React.FC<CounterCardProps> = ({
    icon,
    count,
    title
}) => {
  return (
    <div className='counter-card'>
        {/* icon */}
        <div>{icon}</div>
        {/* count and title */}
        <div className='count-and-title'>
            <div className='count-count'>{count}</div>
            <div className='count-title'>{title}</div>
        </div>
    </div>
  )
}

export default CounterCard