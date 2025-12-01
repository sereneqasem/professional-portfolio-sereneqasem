import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav
                className='w-full fixed top-0 px-4 sm:px-5 lg:px-8 xl:px-[8%] py-2 sm:py-0 flex items-center justify-between z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20'
                style={{
                    backgroundImage: `url(${assets.header_bg_color.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "multiply",
                }}
            >
                <a href="#top">
                    <Image src={assets.logo} alt="" className='w-20 sm:w-24 lg:w-28 cursor-pointer'/>
                </a>

                {/* web menu */}
                <ul className='hidden md:flex items-center gap-6 lg:gap-10 list-none rounded-full px-4 lg:px-8 py-2 lg:py-3 bg-white/80 backdrop-blur-sm border'
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

                {/* web contact button */}
                <div className='hidden md:flex items-center'>
                    <a href="#contact"
                       className='flex items-center gap-2 text-gray-700 px-4 lg:px-6 py-2 rounded-full transition-colors text-sm lg:text-base'
                       style={{ backgroundColor: '#e9aca7ff' }}
                       onMouseEnter={(e) => e.target.style.backgroundColor = '#e5645a'}
                       onMouseLeave={(e) => e.target.style.backgroundColor = '#e9aca7ff'}
                    >
                        Contact
                        <Image src={assets.arrow_icon} alt="arrow icon" className='w-3'/>
                    </a>
                </div>

                {/* mobile menu button */}
                <button 
                    onClick={toggleMenu}
                    className='md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors'
                    aria-label='Toggle menu'
                >
                    <Image 
                        src={isMenuOpen ? assets.close_black : assets.menu_black} 
                        alt='Menu' 
                        className='w-6 h-6'
                    />
                </button>
            </nav>

            {/* mobile menu  */}
            {isMenuOpen && (
                <div className='md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md z-40 border-t border-gray-200'>
                    <div className='flex flex-col p-6 space-y-6'>
                        <a href="#top" 
                           onClick={() => setIsMenuOpen(false)}
                           className='text-lg font-medium text-gray-700 hover:text-[#F1746C] transition-colors py-2 border-b border-gray-100'
                        >Home</a>
                        <a href="#about" 
                           onClick={() => setIsMenuOpen(false)}
                           className='text-lg font-medium text-gray-700 hover:text-[#F1746C] transition-colors py-2 border-b border-gray-100'
                        >About me</a>
                        <a href="#experience" 
                           onClick={() => setIsMenuOpen(false)}
                           className='text-lg font-medium text-gray-700 hover:text-[#F1746C] transition-colors py-2 border-b border-gray-100'
                        >Experience</a>
                        <a href="#projects" 
                           onClick={() => setIsMenuOpen(false)}
                           className='text-lg font-medium text-gray-700 hover:text-[#F1746C] transition-colors py-2 border-b border-gray-100'
                        >Projects</a>
                        
                        {/* mobile contact button */}
                        <a href="#contact"
                           onClick={() => setIsMenuOpen(false)}
                           className='flex items-center justify-center gap-2 text-gray-700 px-6 py-3 rounded-full transition-colors mt-4 text-lg font-medium'
                           style={{ backgroundColor: '#e9aca7ff' }}
                        >
                            Contact me
                            <Image src={assets.arrow_icon} alt="arrow icon" className='w-4'/>
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
