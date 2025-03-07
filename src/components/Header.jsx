import React from 'react';
import companyLogo from "../assets/Images/Shared/Header_companyLogo.png"
import { BsTelephoneFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
const Header = () => {
    return (
        <div className='sticky top-0 z-50 flex justify-between items-center bg-[#FFFFFF] xl:px-12 lg:px-10 md:px-8 px-4 xl:py-4 lg:py-3 md:py-4 py-[14px]'>
        {/* <div className='fixed w-full z-50 flex justify-between items-center bg-[#FFFFFF] xl:px-12 lg:px-10 md:px-8 px-4 xl:py-4 lg:py-3 md:py-4 py-[14px]'> */}
            <img className='xl:w-60 lg:w-48 md:w-40 w-36' src={companyLogo} alt="companyLog" />
            <div className='flex items-center lg:gap-8 md:gap-5 gap-[10px]'>
                <div className='flex items-center lg:gap-2 md:gap-[6px] gap-1 text-[#102442] font-bold xl:text-lg lg:text-base md:text-[15px] text-[14.3px]'>
                    <BsTelephoneFill />
                    <p>470-518-5965</p>
                </div>
                <button className='lg:block hidden xl:py-3 lg:py-[10px] xl:w-52 lg:w-48 rounded-lg bg-[#00AA6C] text-white border-2 hover:border-[#00AA6C] hover:text-[#00AA6C] hover:bg-white font-semibold xl:text-[17px] lg:text-[15.9px]'>Book a Tour Today</button>
                <GiHamburgerMenu className="md:text-2xl text-[22px] lg:hidden visible cursor-pointer" />
            </div>
        </div>
    );
};

export default Header;