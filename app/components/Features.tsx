import Image from 'next/image'
import React from 'react'

import Feature1 from '../../public/feature-1.svg';
import Feature2 from '../../public/feature-2.svg';
import Feature3 from '../../public/feature-3.svg';
import Check from '../../public/check.svg';
import bluebutton from '../../public/blue-button.svg';
import greenbutton from '../../public/green-button.svg'
import pinkbutton from '../../public/pink-button.svg'


const Features = () => {
  return (
    <div className='flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]' id='features'>
        <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
            <Image 
                src={Feature1}
                alt='feature-img'
                className='hidden w-1/2 sm:block'
            />
            <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                <h3 className='font-medium text-[#0085FF] lg:text-[18px]'>
                    Sales Monitoring
                </h3>
                <h1 className='pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px]'>
                    Simplify your sales <span className='mt-5 inline-block'>monitoring</span>
                </h1>
                <Image 
                    src={Feature1}
                    alt='feature1-img'
                    className='pt-[24px] sm:hidden'
                />
                <p className='py-[24px] text-[#36485C] lg:text-[18px]'>
                    Stay on top of things and revamp your work process with our
                    game-changing feature. Get a birds eye view with our customizable
                    dashboard.
                </p>

                <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                    <li className='flex items-center gap-x-2 text-[#36485C]'>
                        <span>
                            <Image src={Check} alt='checkmark'/>
                        </span>
                        Access up-to-the-minute sales data to make informed decisions quickly.
                    </li>
                    <li className="flex items-center gap-x-2 text-[#36485C]">
                        <span>
                            <Image src={Check} alt="Checkmark" />
                        </span>
                        Identify sales trends and patterns with advanced analytics.
                    </li>
                    <li className="flex items-center gap-x-2 text-[#36485C]">
                        <span>
                            <Image src={Check} alt="Checkmark" />
                        </span>
                        Set up custom alerts to notify you of important changes or milestones.
                    </li>
                </ul>

                <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]'>
                    Learn More{" "}
                    <span>
                        <Image src={bluebutton} alt='Learn more'/>
                    </span>
                </p>
            </div>
        </div>

        <div className='flex flex-col gap-x-6 sm:flex-row'>
            <Image 
                src={Feature2}
                alt='feature2img'
                className='hidden w-1/2 sm:block'
            />
            <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
                <h3 className='font-medium text-[#00A424] lg:text-[18px]'>
                    Customer Supprt
                </h3>
                <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                    Get in touch with your customers
                </h1>
                <Image
                    src={Feature2}
                    alt="feature 1 image"
                    className="pt-[24px] sm:hidden"
                />
                <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                    Stay on top of things and revamp your work process with our
                    game-changing feature. Get a birds eye view with our customizable
                    dashboard.
                </p>

                <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                    <li className="flex items-center gap-x-2 text-[#36485C]">
                        <span>
                            <Image src={Check} alt="Checkmark" />
                        </span>
                        Handle customer inquiries efficiently with our round-the-clock ticketing system.
                    </li>
                    <li className="flex items-center gap-x-2 text-[#36485C]">
                        <span>
                            <Image src={Check} alt="Checkmark" />
                        </span>
                        Communicate seamlessly with customers via chat, email, and phone integrations.
                    </li>
                    <li className="flex items-center gap-x-2 text-[#36485C]">
                        <span>
                            <Image src={Check} alt="Checkmark" />
                        </span>
                        Monitor and improve customer satisfaction with real-time feedback and analytics.
                    </li>
                </ul>

                <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
                    Learn More{" "}
                    <span>
                        <Image src={greenbutton} alt="Learn more" />
                    </span>
                </p>
            </div>
        </div>

        <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
            <Image
            src={Feature3}
            alt="Feature 1 image"
            className="hidden w-1/2 sm:block"
            />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
            <h3 className="font-medium text-[#EB2891] lg:text-[18px] ">
                Growth Monitoring
            </h3>
            <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                Monitor your sites new subscribers
            </h1>
            <Image
                src={Feature3}
                alt="feature 1 image"
                className="pt-[24px] sm:hidden"
            />
            <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                Stay on top of things and revamp your work process with our
                game-changing feature. Get a birds eye view with our customizable
                dashboard.
            </p>

            <div className="flex w-full gap-x-[24px] ">
                <div className="w-1/2 flex flex-col gap-y-3">
                    <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
                    <p className="text-[#36485C] ">Lorem ipsum dolor sit</p>
                </div>
                <div className="w-1/2 flex flex-col gap-y-3">
                    <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
                    <p className="text-[#36485C]">Conse adipiscing elit</p>
                </div>
            </div>

            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
                Learn More{" "}
                <span>
                    <Image src={pinkbutton} alt="Learn more" />
                </span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Features