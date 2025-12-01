import React from 'react'
import { useState } from 'react';
import {assets} from '@/assets/assets'
import image from 'next/image';

function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "448f36aa-786d-4d8b-81e3-cc5b38a46e7f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className='w-full px-4 md:px-[12%] py-10 scroll-mt-20 bg-gradient-to-b from-gray-50/50 to-white bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-lg'>Connect with me</h4>
      <h2 className='text-center text-2xl md:text-4xl mb-4 bg-gradient-to-r from-[#e9aca7] via-[#F1746C] to-[#e5645a] bg-clip-text text-transparent font-semibold'>Get in touch</h2>

       <p className='text-center max-w-2xl mx-auto mb-10 text-lg text-gray-600 leading-7'>
          I'd love to hear from you! If you have any questions or just want to say hello, feel free to reach out below.
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 mb-6'>
                <input type="text" placeholder='Enter your name' required
                    className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                    name='name'
                />
                <input type ="email" placeholder='Enter your email' required
                    className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                    name='email'
                />
            </div>
            <textarea rows='6' placeholder='Your message here...' required
                className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
                name='message'
            ></textarea>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <button type='submit' 
                        className='py-3 px-6 sm:px-8 w-full sm:w-max flex items-center justify-center gap-2 text-gray-700 rounded-full transition-colors text-sm sm:text-base'
                        style={{ backgroundColor: '#e9aca7ff' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#e5645a'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#e9aca7ff'}
                >Submit now</button>
                
                {result && <p className='text-sm text-gray-600 text-center sm:text-left'>{result}</p>}
            </div>
        </form>
    </div>
  )
}

export default Contact
