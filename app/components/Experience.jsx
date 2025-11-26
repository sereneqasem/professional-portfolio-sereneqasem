import React from 'react'
import Image from 'next/image'
import { serviceData } from '@/assets/assets'
import { assets } from '@/assets/assets'

const Experience = () => {
  return (
    <div id="experience"className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Take a look at...</h4>
      <h2 className='text-center text-2xl md:text-4xl mb-4 bg-gradient-to-r from-[#e9aca7] via-[#F1746C] to-[#e5645a] bg-clip-text text-transparent font-semibold'>My Experience</h2>

      <p className='text-center max-w-2xl mx-auto mb-6 text-lg text-gray-600 leading-7'>
        While college built my foundation for understanding, gaining real-world experience through internships made me stronger.
      </p>

        <div className = 'grid grid-cols-4 gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index) => (
                <div key={index}
                className='border border-gray-400 rounded-lg px-8 py-12'>
                    <Image src={icon} alt='' className='w-16'/>
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt='' className='w-4'/></a>


                </div>

            ))}
        </div>
    </div>
  )
}

export default Experience
