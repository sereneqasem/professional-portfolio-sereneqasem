import React from 'react'
import { workData } from '@/assets/assets'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Projects = () => {
  return (
    <div id="projects" className='w-full px-4 md:px-[12%] py-12 scroll-mt-20 bg-gradient-to-br from-gray-50/80 via-white to-gray-100/60 relative overflow-hidden'>
      <div className='absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#F1746C]/8 to-[#e5645a]/4 rounded-full blur-3xl animate-pulse opacity-70'></div>
      <div className='absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tl from-[#e9aca7]/6 to-[#F1746C]/3 rounded-full blur-3xl animate-pulse delay-1000 opacity-50'></div>
      <div className='absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-[#F1746C]/5 to-transparent rounded-full blur-2xl animate-pulse delay-500'></div>
      
      <div className='max-w-6xl mx-auto relative z-10'>
        <h4 className='text-center mb-1 text-lg'>Some cool projects I have been apart of!</h4>
        <h2 className='text-center text-2xl md:text-4xl mb-2 bg-gradient-to-r from-[#e9aca7] via-[#F1746C] to-[#e5645a] bg-clip-text text-transparent font-semibold'>Projects</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
          {workData.map((project, index) => (
            <div key={index} className='relative group'
                 style={{animationDelay: `${index * 100}ms`}}>
              <div className='absolute inset-0 bg-gradient-to-br from-white/80 via-gray-50/40 to-white/60 rounded-2xl transform scale-105 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10'></div>
              
              <div className='absolute -inset-2 bg-gradient-to-r from-[#F1746C]/10 via-[#e9aca7]/5 to-[#e5645a]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg -z-10'></div>
              
              <a href='Serene A Qasem Resume .pdf' className='block aspect-[5/4] bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.03] border border-white/50 backdrop-blur-sm' 
                   style={{backgroundImage: `url(${project.bgImage})`}}> 
              
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent group-hover:from-black/50 group-hover:via-black/15 transition-all duration-500'></div>
                
                <div className='absolute inset-0 bg-gradient-to-br from-[#F1746C]/0 via-[#F1746C]/5 to-[#e5645a]/10 group-hover:from-[#F1746C]/5 group-hover:to-[#e5645a]/15 transition-all duration-500 rounded-2xl'></div>
              
                <div className='bg-white/95 backdrop-blur-md w-11/12 rounded-lg absolute bottom-3 left-1/2 -translate-x-1/2 p-3 flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-all duration-400 shadow-xl border border-white/70'>
                  <div className='flex-1'>
                    <h3 className='text-sm font-semibold text-gray-800 mb-0.5 leading-tight group-hover:text-[#F1746C] transition-colors duration-300'>{project.title}</h3>
                    <p className='text-xs text-gray-600 leading-tight'>{project.description}</p>
                  </div>
                  
                  <div className='ml-3 flex-shrink-0'>
                    <div className='p-2 rounded-full bg-gradient-to-br from-[#F1746C] to-[#e5645a] shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300'>
                      <Image src={assets.send_icon} alt='send icon' className='w-4 h-4 filter brightness-0 invert' />
                    </div>
                  </div>
                </div>

                <div className='absolute inset-0 border-2 border-transparent group-hover:border-[#F1746C]/30 rounded-2xl transition-all duration-500'>
                  <div className='absolute inset-0 border border-transparent group-hover:border-[#F1746C]/60 rounded-2xl transition-all duration-700'></div>
                </div>
              </a>
              
              <div className='absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-[#F1746C] to-[#e5645a] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border-2 border-white z-20 transform group-hover:scale-110 transition-transform duration-300'>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
