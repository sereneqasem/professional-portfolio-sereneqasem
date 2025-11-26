import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { infoList } from '@/assets/assets'
import { toolsData } from '@/assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-2xl md:text-4xl mb-10 bg-gradient-to-r from-[#e9aca7] via-[#F1746C] to-[#e5645a] bg-clip-text text-transparent font-semibold'>About me</h2>
        <div className='flex w-full flex-col lg:flex-row items-start gap-10'>
            <div className='w-full lg:w-1/2'>
                <Image src={assets.user_image} alt='user me' className='w-96 rounded-3xl mx-auto'/>
            </div>
            <div className='max-w-2xl'>
                <p className='text-lg leading-7 text-gray-600 mb-6 text-center'>
                    I concentrated in Data Science and Analytics within my major because I am interested in dealing with data through building Reports, Apps, Machine Learning, and LLM models. Below are highlights of the most used frameworks in my development processes, see my resume for more information!
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                        <li className='relative bg-white rounded-xl p-6 cursor-pointer group transition-all duration-300 hover:shadow-lg'
                            key={index}>
                            <div className='absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity'></div>
                            <div className='relative z-10'>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className ='text-gray-600 text-sm'>{description}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <h4 className='my-6 text-gray-700'>Tools I use:</h4>

                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <li key = {index}>
                            <Image src={tool} alt='Tool' className='w-8 sm:w-12'/>
                        </li>
                        
                    ))}
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default About
