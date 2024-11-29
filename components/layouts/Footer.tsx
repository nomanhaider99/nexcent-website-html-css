import React from 'react'
import Logo from '../ui/Logo'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <div><Logo /></div>
            <div className='footer-para'>Phasellus pulvinar porta turpis sit amet facilis sapien bibendum eu praesent massa.</div>
            <div className='footer-left-contact'>
                <div>(888) 1234-5678</div>
                <div>info@example.com</div>
            </div>
            <div>@All Rights Reserved</div>
        </div>
        <div className='footer-right'>
            <div className='footer-right-box'>
                <div className='footer-right-tabname'>Useful Links</div>
                <div className='footer-right-tabs'>
                    <div>Features</div>
                    <div>About</div>
                    <div>Service</div>
                    <div>Team</div>
                </div>
            </div>
            <div className='footer-right-box'>
                <div className='footer-right-tabname'>Help & Support</div>
                <div className='footer-right-tabs'>
                    <div>FAQs</div>
                    <div>Blogs</div>
                    <div>Contact Us</div>
                    <div>Support</div>
                </div>
            </div>
            <div className='footer-right-box'>
                <div className='footer-right-tabname'>Resources</div>
                <div className='footer-right-tabs'>
                    <div>Guides and resources</div>
                    <div>Team</div>
                    <div>Tools</div>
                    <div>Support</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer