import React from 'react'
import FooterLogo from '../ui/FooterLogo'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='footer'>
        {/* Intro and Logo */}
        <div className='intro'>
            {/*  logo  */}
            <div>
                <FooterLogo />
            </div>
            <div className='footer-intro-para'>Copyright 2020 Landify UI kit <br />All rights reserved</div>
            <div className='footer-socialicons'>
                <FaInstagram size={20} color='#fff' />
                <FaFacebook size={20} color='#fff' />
                <FaLinkedin size={20} color='#fff' />
                <FaTwitter size={20} color='#fff' />
            </div>
        </div>
        {/* Links & Other */}
        <div className='footer-links'>
            <div className='company-links'>
                <div className='footer-link-head'>Companny</div>
                <div className='footer-sub-links'>
                    <div>About Us</div>
                    <div>Contact</div>
                    <div>Blog</div>
                    <div>Pricing</div>
                    <div>Testimonials</div>
                </div>
            </div>
            <div className='support-links'>
            <div className='footer-link-head'>Support</div>
                <div className='footer-sub-links'>
                    <div>Help center</div>
                    <div>Terms & service</div>
                    <div>Legal</div>
                    <div>Privacy policy</div>
                    <div>status</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer