import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div>
            <header className="flex justify-center">
                <Image src="/Logo_white.png" alt="logo" width={90} height={90} />
            </header>
        </div>
    )
}

export default Header;