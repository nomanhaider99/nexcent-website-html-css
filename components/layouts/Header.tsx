import React from 'react'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { linksData } from '@/data/links'

const Header = () => {
  return (
    <div className='header'>
      {/* Logo */}
      <div>
        <Logo />
      </div>
      {/* links */}
      <div className='links'>
        {
          linksData.map((item, index) => (
            <Link
              href={item.route}
              key={index}
            >
              <div className='link'>{item.link}</div>
            </Link>
          ))
        }
      </div>
      {/* button */}
      <div>
        <Button
          text='Get Started Free'
         />
      </div>
    </div>
  )
}

export default Header