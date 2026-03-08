import React from 'react';
import {FaMapMarkerAlt, FaMobile, FaEnvelope, FaGit, FaLinkedin, FaLink } from 'react-icons/fa';
import contactImg from '../assets/contactImg.png'

const Contact = () => {
    const contactItems = [
        {   icon:<FaMapMarkerAlt className='text-indigo-600 text-xl' />,
             title: "Address",
            content: (
                <p className='text-gray-600'>
                    Rajendra Nagar, Hyderabad-500030</p>
            )        
        },
        {
            icon: <FaMobile className='text-indigo-600 text-xl'/>,
            title: "Mobile Number",
            content: (
                <p>
                   <a href="#" className='hover:text-indigo-600'>+91 99 898 58068</a>
                </p>
            )            
        }, 
        {
            icon: <FaEnvelope className='text-indigo-600 text-xl'/>,
            title: "Email Id",
            content: (
                <p>
                    <a href="mailto:manoj0254@gmail.com" className='hover:text-indigo-600'>manoj0254@gmail.com</a>
                </p>
            )            
        }                   
    ];
{/* <FaGit/>, <FaLinkedin /> */}
    const contactURLs =[
        {icon: <FaGit className='text-indigo-600 text-xl'/>, title:"Github", url: "https://github.com/manoj0254"},
        {icon: <FaLinkedin className='text-indigo-600 text-xl' />, title:"LinkedIn", url: "https://www.linkedin.com/in/manoj-kumar-rauta-6a007810/"}, 
        {icon: <FaLink className='text-indigo-600 text-xl' />, title:"Indeed", url: "https://profile.indeed.com/p/manojr-3lxcbk5"},  
		
		{icon: <FaLink className='text-indigo-600 text-xl' />, title:"Pixabay", url: "https://pixabay.com/users/manoj0254-6293283/"},  		
        
        
    ];
	
	


return (
<article id="contact" className='py-20 overflow-hidden bg-slate-800'
>
    <div className="container mx-auto px-4">
        <header data-aos='fade-up' data-aos-delay='400' className='text-center mb-16 relative'>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full
            bg-pink-100 opacity-30 z-0"></div>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-100 mb-4 relative z-10'>
                    Contact <span className='text-indigo-600'>Me</span>
                </h1>
                <p className="text-lg text-white max-w-2xl mx-auto relative z-10">
                    My contact details and more information to reach out to me</p>
            
        </header>
        <main className="flex flex-col lg:flex-row gap-12">
            <aside data-aos='fade-up' data-aos-delay='500' className="lg:w-1/5">
                <section className='bg-white rounded-2xl shadow-xl p-8 h-full'>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
                    <address className='space-y-6'>
                        {
                            contactItems.map((item, index) => (
                                <article key={index} className='flex items-start'>
                                    <figure className='bg-slate-100 p-3 rounded-lg mr flex-shrink-0 mr-10'>
                                        {item.icon}
                                    </figure>
                                    <div>
                                        <h3 className='font-medium text-gray-800 mb-1 font-semibold'>{item.title}</h3>
                                        {item.content}
                                    </div>
                                </article>
                            ))
                        }
                    </address>               
                </section>
            </aside>
            <aside data-aos='fade-up' data-aos-delay='500' className="lg:w-2/5">
                <section className='bg-white rounded-2xl shadow-xl p-8 h-full'>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Online Profiles</h2>
                    <address className='space-y-6'>
                        {
                            contactURLs.map((item, index) => (
                                <article key={index} className='flex items-start '>
                                    <figure className='bg-indigo-100 p-3 rounded-lg mr-3 flex-shrink-0'>
                                        {item.icon}
                                    </figure>
                                    <div>
                                        <h3 className=' text-gray-800 mb-1 font-semibold min-w-[100px] mr-1'>{item.title}</h3>
                                        <a href={item.url} target='_blank' className='hover:text-indigo-600'>{item.url}</a>
                                    </div>
                                </article>
                            ))
                        }
                    </address>               
                </section>
            </aside> 
            <aside data-aos='fade-up' data-aos-delay='500' className="lg:w-2/5">
                <figure dsata-aos='fade-up' data-aos-delay='600' 
            className="mt-0 bg-white p-8 rounded-2xl shadow-xl overflow-hidden">
                <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.12%2C51.50%2C-0.10%2C51.52&layer=mapnik"
                width="100%"
                height="300"
                style={{border:0}}
                allowFullScreen=""
                loading='lazy'
                title='Clinic Location Map'
                className='rounded-0'
                aria-label='Map showing clinic location'></iframe>
            </figure>    
        </aside>                   
        </main>
               
    </div>
</article>
  );
};

export default Contact;