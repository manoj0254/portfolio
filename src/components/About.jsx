import React from 'react';
import { 
  FaUserMd, 
  FaAward, 
  FaHeart, 
  FaClinicMedical
} from 'react-icons/fa';
import { FaArrowCircleRight } from "react-icons/fa";
import aboutImage from '../assets/ui.jpg'

const About = () => {
    const stats = [
        {value: "10+", label:"Years of Experience", icon: <FaArrowCircleRight className="text-pink-500" aria-hidden='true'></FaArrowCircleRight>},
        {value: "2.5", label:"Happy Clients", icon: <FaArrowCircleRight className="text-pink-500" aria-hidden='true'></FaArrowCircleRight>},
        {value: "15+", label:"Expert Doctors", icon: <FaArrowCircleRight className="text-pink-500" aria-hidden='true'></FaArrowCircleRight>},
        {value: "10+", label:"Treatment", icon: <FaArrowCircleRight className="text-pink-500" aria-hidden='true'></FaArrowCircleRight>},
    ];

    const approachItems = [
        {
            icon: <FaArrowCircleRight className="text-indigo-500 mt-1" aria-hidden='true'/>,
            text: "Excellent understanding of all the phases of a UX process lifecycle.",                       
        },
        {
            icon: <FaArrowCircleRight className="text-indigo-500 mt-1" aria-hidden='true'/>,
            text: "Visual design, typography and user experience design skills.",
        },
        {
            icon: <FaArrowCircleRight className="text-indigo-500 mt-1" aria-hidden='true'/>,
            text: "Expertise to create mocks in Photoshop and HTML conversion of mockup.",
        },    
        {
            icon: <FaArrowCircleRight className="text-indigo-500 mt-1" aria-hidden='true'/>,
            text: "Hands on in HTML5, CSS3, JavaScript,React and jQuery.",
        },
        {
            icon: <FaArrowCircleRight className="text-indigo-500 mt-1" aria-hidden='true'/>,
            text: "Experience working with responsive web design.",
        },

        {
            icon: <FaArrowCircleRight className="text-indigo-500 mt-1" aria-hidden='true'/>,
            text: "Self-motivated in exploring latest technologies.",
        },
        {
            icon: <FaArrowCircleRight className="text-indigo-500 mt-1" aria-hidden='true'/>,
            text: "On-Page SEO knowledge.",
        },
        {
            icon: <FaArrowCircleRight className="text-indigo-500 mt-1" aria-hidden='true'/>,
            text: "Knowledge of Wordpress CMS, and hands on experience in theme customization."
        },    
        {
            icon: <FaArrowCircleRight className="text-indigo-500 mt-1" aria-hidden='true'/>,
            text: "Ability to analyze and resolve technical bug related to UI.",
        },
        {
            icon: <FaArrowCircleRight className="text-indigo-500 mt-1" aria-hidden='true'/>,
            text: "Hands on experience in Mobile App UI Mockup and Icons"
        }
    ]

  return (
   <section id="about" className='py-20 bg-slate-800 py-14 overflow-hidden'>
        <div className='container mx-auto px-4'>
            <header className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            About <span className='text-indigo-600'>Me</span>
                        </h2>
                        <p className="text-lg text-gray-100 mb-6">
                            Excellent understanding of web development life cycle which includes wireframe, mockup, prototyping and bug fixing. Passionate about anything regarding UI Development. My skillset includes graphic design, web design, UI development.
                        </p>
                    </header>
            <article data-aos="fade-up" data-aos-delay="400" className="flex flex-col lg:flex-row items-center gap-12">
                <figure className="lg:w-5/12 relative">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-[100%] max-w-md mx-auto">
                        <img 
                        src={aboutImage}
                        className="w-full h-auto object-cover aspect-[4/5]"
                        loading="lazy"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden='true'>
                        </div>
                    </div>
                    <span className="hidden lg:block absolute -bottom-8 w-32 h-32 rounded-full
                    bg-indigo-500 opacity-20 z-0" aria-hidden='true'>
                    </span>                    
                    <span className="hidden lg:block absolute -right-8 w-40 h-40 rounded-full
                    bg-indigo-600 opacity-20 z-0" aria-hidden='true'>
                    </span>
                    <aside className="absolute bottom-1 -right-5 bg-white p-3 rounded-xl shadow-lg z-20">
                        <strong className="text-2xl font-bold text-indigo-600">15+</strong>
                        <small className="block text-xs font-medium text-gray-600">Years Experience</small>
                    </aside>
                </figure>

                <div data-aos='fade-up' data-aos-delay='600' className='lg:w-7/12'>
                    
                    <section className="ml-0 my-8">
                        <h3 className="text-xl font-semibold text-gray-100 mb-4">Approach</h3>
                        <ul className="space-y-0 sm:space-y-3 container flex lg:flex-row gap-6 grid grid-cols-1 sm:grid-cols-2">
                            {approachItems.map((item, index) =>(
                                <li key={index} className="shadow-sm flex">
                                    <figure className="p-0 rounded-full mr-3">
                                        {item.icon}
                                    </figure>
                                    <p className="text-gray-100">{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </article>
            <aside className="mt-20 rounded-2xl p-6 md:p-12 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-800">
                <span 
                className="absolute -top-200 -right-20 w-64 h-64 rounded-full bg-pink-500 opacity-40" 
                aria-hidden='true'></span>
                <div className="relative z-10 ">
                    <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
                    <blockquote className="text-lg text-gray-100 mb-6">
                        "As a web professional, my ambition is to design digital experiences that are visually striking, user-friendly, and inclusive. I strive to merge creativity with cutting-edge technology, building websites and applications that empower users, drive engagement, and deliver meaningful impact across diverse platforms and audiences."
                    </blockquote>
                </div>
            </aside>
        </div>
   </section>
  );
};

export default About;