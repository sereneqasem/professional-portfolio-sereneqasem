import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <footer className='w-full px-4 md:px-[12%] py-8 bg-gray-50 border-t border-gray-200'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
        <p className='text-gray-600 text-sm'>© 2025 Serene Qasem. All rights reserved.</p>
        
        <div className='flex items-center gap-2 text-sm text-gray-500'>
          <span>Built with</span>
          <span className='font-medium text-gray-700'>Next.js</span>
          <span>&</span>
          <span className='font-medium text-[#06B6D4]'>Tailwind</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
