import Image from 'next/image'
import React from 'react'
import Active from '@/public/images/Active.png'
import Coding from '@/public/images/Coding.png'
import Interface from '@/public/images/Interface.png'

const Grow = () => {
    return (
        <div className='grow'>
            <div className='grow-header'>
                <div className='grow-header-heading'>How To Grow Your Bussiness</div>
                <div className='grow-header-para'>Class aptent taciti sociosqu ad litora torquen conubia nostramase inceptos himenaeo. Phasellus metus nisl euismod eget lorem.</div>
            </div>
            <div className='grow-cards'>
                {/* Card 1 */}
                <div className="card">
                    <div>
                        <Image alt="" src={Active} width={50} height={50} />
                    </div>
                    <div className="card-title">Active User Analytics</div>
                    <div className="card-desc">Class aptent taciti sociosqu litora torquent conubia nostra.</div>
                </div>

                {/* Card 2 */}
                <div className="card">
                    <div>
                        <Image alt="" src={Coding} width={50} height={50} />
                    </div>
                    <div className="card-title">User Growth Insights</div>
                    <div className="card-desc">Discover trends and patterns in user behavior effortlessly.</div>
                </div>

                {/* Card 3 */}
                <div className="card">
                    <div>
                        <Image alt="" src={Interface} width={50} height={50} />
                    </div>
                    <div className="card-title">Performance Metrics</div>
                    <div className="card-desc">Track and improve performance with detailed analytics.</div>
                </div>
            </div>
        </div>
    )
}

export default Grow