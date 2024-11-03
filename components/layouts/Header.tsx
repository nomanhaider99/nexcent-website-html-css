import React from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import Link from 'next/link'

const Header = () => {
  return ( 
    <div className='header'>
        {/* Logo */}
        <div>
            <Logo />
        </div>
        {/* Links and Button */}
        <div className='links-button'>
            <div className='links'>
                <div><Link className='each-link' href={"/"}>Home</Link></div>
                <div><Link className='each-link' href={"/features"}>Features</Link></div>
                <div><Link className='each-link' href={"/community"}>Community</Link></div>
            </div>
            <div className='button'>
                <Button
                    text='Register now'
                 />
            </div>
        </div>
    </div>
  )
}

export default Header