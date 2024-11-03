import React from 'react'
import CounterCard from '../ui/CounterCard'
import { IoCalendar, IoCard, IoCash, IoPeople } from 'react-icons/io5'

const Helping = () => {
  return (
    <div className='helping'>
        {/* Text Area */}
        <div className='helping-textarea'>
            <div className='helping-t-head'>Helping a local <br /> <span>bussiness reinvent itself</span></div>
            <div className='helping-t-para'>We reached here with our hard work and dedication</div>
        </div>
        {/* Counter */}
        <div className='counter'>
        <CounterCard
            icon={<IoPeople size={25} color="#000" />}
            title="Members"
            count="2,221,142"
        />
        <CounterCard
            icon={<IoCalendar size={25} color="#000" />}
            title="Clubs"
            count="1,512"
        />
        <CounterCard
            icon={<IoCash size={25} color="#000" />}
            title="Payments"
            count="$5,432,876"
        />
        <CounterCard
            icon={<IoCard size={25} color="#000" />}
            title="Event Bookings"
            count="12,039"
        />
        </div>
    </div>
  )
}

export default Helping