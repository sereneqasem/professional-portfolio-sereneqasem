import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'

// lets come back to this if you have time to implement a mobile phone view!!
const Navbar = () => {
    return (
        <>
            <nav
                className='w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-0 flex items-center justify-between z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20'
                style={{
                    backgroundImage: `url(${assets.header_bg_color.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "multiply",
                }}
            >
                <a href="#top">
                    <Image src={assets.logo} alt="" className='w-28 cursor-pointer mr-14'/>
                </a>

                <ul className='flex items-center gap-10 list-none rounded-full px-8 py-3 bg-white/80 backdrop-blur-sm border'
                    style={{ borderColor: '#F1746C' }}
                >
                    <li><a href="#top" className='transition-colors'
                        onMouseEnter={(e) => e.target.style.color = '#F1746C'}
                        onMouseLeave={(e) => e.target.style.color = ''}
                    >Home</a></li>

                    <li><a href="#about" className='transition-colors'
                        onMouseEnter={(e) => e.target.style.color = '#F1746C'}
                        onMouseLeave={(e) => e.target.style.color = ''}
                    >About me</a></li>

                    <li><a href="#experience" className='transition-colors'
                        onMouseEnter={(e) => e.target.style.color = '#F1746C'}
                        onMouseLeave={(e) => e.target.style.color = ''}
                    >Experience</a></li>

                    <li><a href="#projects" className='transition-colors'
                        onMouseEnter={(e) => e.target.style.color = '#F1746C'}
                        onMouseLeave={(e) => e.target.style.color = ''}
                    >Projects</a></li>

                    <li><a href="#contact" className='transition-colors'
                        onMouseEnter={(e) => e.target.style.color = '#F1746C'}
                        onMouseLeave={(e) => e.target.style.color = ''}
                    >Contact me</a></li>
                </ul>

                <div className='flex items-center'>
                    <a href="#contact"
                       className='flex items-center gap-2 text-gray-700 px-6 py-2 rounded-full transition-colors'
                       style={{ backgroundColor: '#e9aca7ff' }}
                       onMouseEnter={(e) => e.target.style.backgroundColor = '#e5645a'}
                       onMouseLeave={(e) => e.target.style.backgroundColor = '#e9aca7ff'}
                    >
                        Contact
                        <Image src={assets.arrow_icon} alt="arrow icon" className='w-3'/>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
