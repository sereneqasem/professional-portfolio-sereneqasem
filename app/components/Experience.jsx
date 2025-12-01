import React from 'react'
import Image from 'next/image'
import { serviceData } from '@/assets/assets'
import { assets } from '@/assets/assets'

const Experience = () => {
  return (
    <div id="experience" className='w-full px-4 md:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-gray-50/50 to-white'>
      <div className='max-w-7xl mx-auto'>
        <h4 className='text-center mb-2 text-lg'>Take a look at...</h4>
        <h2 className='text-center text-2xl md:text-4xl mb-4 bg-gradient-to-r from-[#e9aca7] via-[#F1746C] to-[#e5645a] bg-clip-text text-transparent font-semibold'>My Experience</h2>

        <p className='text-center max-w-2xl mx-auto mb-12 text-lg text-gray-600 leading-7'>
          While college built my foundation for understanding, gaining real-world experience through internships made me stronger.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-8 sm:my-10'>
          {serviceData.map(({icon, title, description, link}, index) => (
            <div key={index}
            className='group bg-white border-2 border-[#F1746C]/20 hover:border-[#F1746C]/60 rounded-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 shadow-sm hover:shadow-xl 
                       transition-all duration-300 ease-in-out hover:-translate-y-1 
                       relative overflow-hidden'>
              
              <div className='absolute inset-0 bg-gradient-to-br from-[#e9aca7]/5 to-[#e5645a]/5 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              <div className='relative z-10'>
                <div className='flex justify-center mb-6'>
                  <div className='p-3 bg-gray-50 rounded-xl group-hover:bg-[#F1746C]/10 
                                 transition-colors duration-300 group-hover:scale-105 
                                 transform transition-transform'>
                    <Image src={icon} alt={`${title} logo`} className='w-16 h-16 object-contain'/>
                  </div>
                </div>
                
                <h3 className='text-lg my-4 text-gray-700 text-center font-medium 
                              group-hover:text-gray-800 transition-colors duration-300'>{title}</h3>
                
                <p className='text-sm text-gray-600 leading-5 text-center mb-6'>{description}</p>
                
                <a href={link} className='flex items-center justify-center gap-2 text-sm text-[#F1746C] 
                                        hover:text-[#e5645a] transition-all duration-300 
                                        group-hover:gap-3 font-medium'>
                  Read more 
                  <Image src={assets.right_arrow} alt='arrow' className='w-4 transition-transform duration-300 group-hover:translate-x-1'/>
                </a>
              </div>

              <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl 
                             from-[#F1746C]/10 to-transparent rounded-bl-3xl 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
