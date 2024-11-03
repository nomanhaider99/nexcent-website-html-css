import React from 'react'
import CommunityCard from '../ui/CommunityCard'
import { CiBank } from 'react-icons/ci'
import { BsBuildingsFill } from 'react-icons/bs'
import { FaArrowsSpin } from 'react-icons/fa6'

const Community = () => {
  return (
    <div className='community'>
        {/* Text area */}
        <div className='community-textarea'>
            <div className='c-t-heading'>Manage your entire community <br /> in a single system</div>
            <div className='c-t-para'>Who is Nexcent suitable for?</div>
        </div>
        {/* Cards area */}
        <div className='c-card-area'>
        <CommunityCard
        title="Membership Organizations"
        icon={<CiBank size={40} color='#000' />}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto maxime est modi quae facere dignissimos, excepturi rem unde exercitationem. Perferendis?"
      />
      <CommunityCard
        title="Volunteer Groups"
        icon={<BsBuildingsFill size={40} color='#000' />}
        description="Dedicated to giving back to the community through organized volunteer efforts and initiatives."
      />
      <CommunityCard
        title="Social Clubs"
        icon={<FaArrowsSpin size={40} color='#000' />}
        description="A place to meet new people, engage in fun activities, and build lasting friendships."
      />
        </div>
    </div>
  )
}

export default Community