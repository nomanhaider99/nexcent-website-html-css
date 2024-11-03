import React from 'react'

interface CommunityCardProps {
    icon: any,
    title: string,
    description: string
}

const CommunityCard: React.FC<CommunityCardProps> = ({
    icon,
    title,
    description
}) => {
  return (
    <div className='community-card'>
        {/* Icon */}
        <div className='c-c-icon'>{icon}</div>
        {/* Title */}
        <div className='c-c-title'>{title}</div>
        {/* Description */}
        <div className='c-c-desc'>{description}</div>
    </div>
  )
}

export default CommunityCard