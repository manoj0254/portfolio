import React from 'react';
import hero from '../assets/proPic.jpg'

const Hero = () => {
    const stats = [
        {value: "15+ years", label: "IT Experience"},
        {value: "10 years", label: "UI Experience"},
        // {value: "50+", label: "Treatments"},
        // {value: "10+", label: "Years"},
    ];    
  return (
    <section id='home' className='relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700'>
        <article className='container mx-auto px-4 py-14 md:py-20 flex flex-col-reverse flex-col:sm md:flex-row items-center'>
            <div className='md:w-1/2 mb-10 md:mb-0'>
                <hgroup data-aos='fade-up' data-aos-delay='500'>
                    <h1 className='text-4xl md:text-3xl lg:text-4xl font-bold text-white mb-4'>
                        A Passionate <br/><mark className='text-indigo-600 md:text-5xl lg:text-6xl bg-transparent'>UI Developer</mark>
                    </h1>
                    <p className="text-lg text-white mg-8 max-w-lg mb-10">
                        Excellent understanding of web development life cycle which includes wireframe, mockup, prototyping and bug fixing. Passionate about anything regarding UI Development. My skillset includes UI development, graphic design, web design, Front End Technologies.
                        </p>
<p className="text-lg text-white mg-8 max-w-lg mb-10">My skillset includes Web Design and UI development.  
                    </p>
                </hgroup>
                <nav data-aos='fade-up' data-aos-delay='600' className="flex flex-col sm:flex-row gap-4 mb-12">
                    <a href="#about" 
                    className='
                    bg-indigo-600 hover:bg-indigo-700 
                    text-white text-center 
                    px-8 py-3
                    transition shadow-lg 
                    g-blue-500 
                    font-bold
                    rounded' 
                    aria-label='Book a consultation'>Know more About Me</a>
                    {/* <a 
                    href="#services" 
                    className='border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full 
                    text-center transition'
                    aria-label='Explore Our Services'>
                        Explore Services
                    </a> */}
                </nav>
                <aside data-aos='fade-up' data-aos-delay='800' className="py-4">
                    <ul className='flex flex-wrap justify-center sm:justify-left gap-4 md:gap-8 text-center'>
                        {stats.map((stat, index) =>(
                            <li key={index} className='px-2'>
                                <strong className='text-2xl font-bold text-indigo-600 '>{stat.value}</strong>
                                <small className='block text-sm text-gray-300 '>{stat.label}</small>
                            </li>
                        )
                    )}               
                    </ul>
                </aside>
            </div>
            <figure data-aos='fade-up' data-aos-delay='700' className='md:w-1/2 flex justify-center'>
                <div className='relative w-full max-w-md'>
                    <span 
                    className='bg-indigo-500 rounded-full w-80 h-80 absolute -top-10 -left-10 opacity-20' 
                    aria-hidden='true'>
                    </span>
                    <span 
                    className='bg-indigo-950 rounded-full w-full h-80 absolute -bottom-10 -right-10 opacity-20' 
                    aria-hidden='true'>
                    </span>
                    <img src={hero} alt="cosmetic treatment"
                    className='relative z-10 rounded-full shadow-2xl w-full max-w-xs md:max-w-sm object-cover' 
                    width='400' height='400' 
                    loading='eager'
                    />
                </div>
            </figure>
        </article>
    </section>
  );
};

export default Hero;