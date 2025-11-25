import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const HeaderHome = () => {
    return (
        <div className="min-h-screen flex items-start justify-center px-5 lg:px-8 xl:px-[8%] pt-40">
            <div className="text-center">
                <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 blur-lg opacity-30 scale-110"></div>
                    <Image src={assets.profile_img} alt='' className='relative rounded-full w-32 mx-auto shadow-xl'/>
                </div>
                <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 justify-center bg-gradient-to-r from-[#e9aca7] via-[#F1746C] to-[#e5645a] bg-clip-text text-transparent font-semibold'>
                    Welcome, I am Serene Qasem!
                </h3>
                <h1 className='text-xl sm:text-4xl lg:text-[35px] mb-6 text-gray-800 leading-tight'>
                    Computer Science student based in Baton Rouge, Louisiana.
                </h1>
                <p className='max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed mb-8'>
                    I am a developer with 4 years of internship experience in multiple companies like Shell, BASF, and Cajun Industries as well as a full-time student at Louisiana State University pursuing a Bachelor's degree in Computer Science and a minor in Mathematics.
                </p>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto'>
                    <a href="https://www.linkedin.com/in/serene-qasem-742636281" target="_blank" rel="noopener noreferrer" 
                       className='px-10 py-3 rounded-full text-gray-700 flex items-center gap-2 transition-colors'
                       style={{ backgroundColor: '#e9aca7' }}
                       onMouseEnter={(e) => e.target.style.backgroundColor = '#e5645a'}
                       onMouseLeave={(e) => e.target.style.backgroundColor = '#e9aca7'}
                    >   {/*right_arrow_white is actually a linkdln icon lmao*/}
                        Connect with me <Image src={assets.right_arrow_white} alt='' className='w-4'/>
                    </a>

                    <a href="Serene A Qasem Resume .pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-50 transition-colors'>
                        My resume <Image src={assets.download_icon} alt='' className='w-4'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeaderHome