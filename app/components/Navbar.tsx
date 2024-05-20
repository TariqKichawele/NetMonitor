import Logo from '../../public/Logo-4.svg';
import User from '../../public/User-2.svg';
import Menu from '../../public/Menu-2.svg'

import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
    { name: "Features", link: "#features"},
    { name: "Pricing", link: "#pricing" },
    { name: "Enterprise", link: "#enterprise"},
    { name: "Careers", link: "#careers" },
];

const Navbar = () => {
  return (
    <nav className='flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20'>
        <div className='flex items-center'>
            <Image src={Logo} alt="Logo"/>

            <div className='hidden lg:flex pl-[74px] gap-x-[56px]'>
                {navLinks.map((item, index) => (
                    <Link href={item.link} className='text-[#36485C] font-medium' key={index}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>

        <div className='flex gap-x-5'>
            <p className='hidden lg:block font-medium text-[#36485C] pr-[56px]'>
                Open an account
            </p>

            <div className='flex items-center gap-x-2'>
                <Image src={User} alt='user-profile'/>
                <span className='hidden font-medium text-[#36485C] lg:block'>
                    Sign in
                </span>
            </div>

            <div className='lg:hidden flex'>
                <Sheet>
                    <SheetTrigger asChild>
                        <Image src={Menu} alt='menu' />
                    </SheetTrigger>
                    <SheetContent>
                            <SheetTitle className='flex gap-4 mb-5'>
                                <Image src={Logo} alt='logo'/> NetMonitor
                            </SheetTitle>
                            {navLinks.map((item, index) => (
                                <Link 
                                    href={item.link} 
                                    className='text-[#36485C] font-medium flex flex-col items-center p-5 hover:underline hover:font-bold' 
                                    key={index}
                                >
                                    {item.name}
                                </Link>
                            ))}
                    </SheetContent>
                </Sheet>

            </div>

        </div>
    </nav>
  )
}

export default Navbar