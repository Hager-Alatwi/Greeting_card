import React from 'react'
import Image from 'next/image'
import { Logo } from '@/public/bg'


const Header = () => {
    return (
        <div>
            <header className="flex justify-center">
                <Image src={Logo} alt="logo" width={90} height={90} />
            </header>
        </div>
    )
}

export default Header;