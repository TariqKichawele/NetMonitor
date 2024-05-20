import Image from 'next/image'
import Logo from '../../public/Logo-4.svg';
import Facebook from '../../public/Facebook-3.svg';
import Twitter from '../../public/X.svg';
import Feed from '../../public/Feed.svg';
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[80px] pb-[40px]'>
        <div className='flex justify-between sm:items-start items-center flex-col sm:flex-row'>
            <div className='flex items-center gap-x-[12px] pt-5'>
                <Image src={Logo} alt='logo'/>
                <p className='font-bold text-[#36485C] text-[17px]'>
                    NetMonitor
                </p>
            </div>

            <div className='flex flex-col sm:items-start items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row justify-center sm:gap-x-20 sm:pt-5'>
                <ul>
                    Features
                    <li className='font-bold pt-5 hidden sm:flex'>Growth</li>
                    <li className='font-bold pt-3 hidden sm:flex'>Sales</li>
                    <li className='font-bold pt-3 hidden sm:flex'>Chat</li>
                </ul>
                <ul>
                    Pricing
                    <li className='font-bold pt-5 hidden sm:flex'>Free Trial</li>
                    <li className='font-bold pt-3 hidden sm:flex'>Standard</li>
                    <li className='font-bold pt-3 hidden sm:flex'>Business</li>
                </ul>
                <ul>
                    Enterprise
                    <li className='font-bold pt-5 hidden sm:flex'>Personalize</li>
                    <li className='font-bold pt-3 hidden sm:flex'>Automation</li>
                    <li className='font-bold pt-3 hidden sm:flex'>Invoicing</li>
                    <li className='font-bold pt-3 hidden sm:flex'>24/7 Support</li>
                </ul>
                <ul>
                    Careers
                    <li className='font-bold pt-5 hidden sm:flex'>Open Positions</li>
                    <li className='font-bold pt-3 hidden sm:flex'>Part-Time</li>
                    <li className='font-bold pt-3 hidden sm:flex'>Contractual</li>
                    <li className='font-bold pt-3 hidden sm:flex'>Contact Us</li>
                </ul>
            </div>
        </div>

        

        <div className='flex items-center justify-between gap-x-[56px] pt-[40px] flex-col sm:flex-row gap-y-5'>
            <p className='pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5'>
                © Copyright 2024. NetMonitor. All rights reserved.
            </p>
            <div className='flex gap-x-2'>
                <Image src={Facebook} alt="Facebook" />
                <Image src={Feed} alt="Feed" />
                <Image src={Twitter} alt="Twitter" />
            </div>
        </div>
    </div>
  )
}

export default Footer