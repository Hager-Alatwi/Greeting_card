'use client';

import React from 'react'
import Image from 'next/image'
import { Background } from '@/public/bg'


const Hero = () => {
    const handleScrollClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    }
    return (
        <div>
            <div className='bg-gradient-to-r from-[#3D7EB9] via-[#0DA9A6] to-[#07A869]'>
                <Image src={Background} alt="Eid Mubarak" width={300} height={300} className='object-cover h-screen w-full opacity-25' />
                <p className="text-white absolute md:top-[49%] top-[51%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center md:text-[20px] text-[10px]">
                    المتوسطة التاسعة والثلاثون تهنئكم بقدوم
                </p>
                <p className="text-white font-[Amiri] absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-2xl md:text-4xl">
                    عِيْدُ الفِطْرِ المُبَارَكُ
                </p>
                <p className="text-white absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center md:text-[20px] text-[10px]">
                    سائلين المولى عز وجل أن  يعيده علينا وعليكم بالخير واليمن والبركات
                </p>

                <div
                    onClick={handleScrollClick}
                    className="absolute md:top-[96%] top-[95%] left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className=" w-3 h-3 md:w-4 md:h-4 text-white "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className=" w-3 h-3 md:w-4 md:h-4 text-white "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Hero; 