'use client';

import * as Accordion from '@radix-ui/react-accordion';
import Plus from '../../public/Plus.svg';
import React from 'react'
import Image from 'next/image';

const items = [
    {
      question: "What is a website monitoring tool?",
      answer:
        "A website monitoring tool is a software application or service that continuously checks the performance, availability, and functionality of websites. These tools are essential for website owners, developers, and administrators to ensure their websites are running smoothly and efficiently at all times.",
    },
    {
        question: "What features are included in the monitoring tool?",
        answer:
          "Detailed list of features such as real-time monitoring, customizable dashboards, alerts, performance analytics, uptime tracking, etc.",
    },
    {
      question: "What integrations are available with the tool?",
      answer:
        "Notification and Communication Tools: Slack: Receive real-time alerts and notifications in your Slack channels. Analytics and Reporting Google Analytics: Combine performance monitoring with traffic and user behavior analytics.",
    },
    {
      question: "How does the alert system work?",
      answer: "This tool is designed to notify users of issues, changes, or important events related to their website's performance, availability, and security. The system ensures that users can respond quickly to problems, minimizing downtime and maintaining optimal website functionality"
    },
];

const Faq = () => {
  return (
    <div className='flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6'>
        <div className='lg:w-1/3 lg:py-[32px] lg:pr-[56px]'>
            <h3 className='text-[#EB2891] text-[14px] font-medium lg:text-base'>
                Frequently Asked Questions
            </h3>
            <h1 className='py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>
                Let&apos;s clarify some of your questions
            </h1>
            <p className='text-[#36485C] pb-[24px]'>
                Here as some frequently asked questions we get from our potential customers and users
            </p>
        </div>

        <div className='lg:w-2/3'>
            <Accordion.Root
                type='single'
                defaultValue='item-1'
                collapsible
                className='flex flex-col gap-y-4'
            >  
                {items.map((item, index) => (
                    <div key={index}>
                        <Accordion.Item
                            value={`item-${index + 1}`}
                            className='bg-[#E3F1FF] p-[16px] rounded-[8px]'
                        >
                            <Accordion.Header>
                                <Accordion.Trigger className='flex w-full items-center justify-between'>
                                    <p className='text-left font-medium text-[#172026] lg:text-[18px]'>
                                        {item.question}
                                    </p>
                                    <span>
                                        <Image 
                                            src={Plus}
                                            alt='See-more'
                                            className='h-10 w-10 lg:w-6 lg:h-6'
                                        />
                                    </span>
                                </Accordion.Trigger>
                            </Accordion.Header>

                            <Accordion.Content>
                                <p className='pt-2 text-[#36485C]'>
                                    {item.answer}
                                </p>
                            </Accordion.Content>
                        </Accordion.Item>
                    </div>
                ))}
            </Accordion.Root>
        </div>
    </div>
  )
}

export default Faq