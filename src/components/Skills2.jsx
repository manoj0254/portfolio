import React from 'react';
import { FaClinicMedical, FaUserMd, FaRegSmile, FaSyringe} from 'react-icons/fa';
import HTMLlogo from '../assets/skill-logos/html.png';
import CSSlogo from '../assets/skill-logos/css-logo.png';
import JavaScriptlogo from '../assets/skill-logos/javascript-logo.png';
import ReactJS from '../assets/skill-logos/react-logo.png';
import Bootstrap from '../assets/skill-logos/bootstrap-logo.png';
import Redux from '../assets/skill-logos/Redux-logo.png';

import jQuery from '../assets/skill-logos/jquery-logo.png';
import TailwindCSS from '../assets/skill-logos/tailwind-logo.png';
import MaterialUI from '../assets/skill-logos/mui-logo.png';
import Axios from '../assets/skill-logos/axios-logo.png';
import Photoshop from '../assets/skill-logos/psd-logo.png'; 
import Illustrator from '../assets/skill-logos/ai-logo.png';
import Photopea from '../assets/skill-logos/photopea-logo.png';
import Wordpress from '../assets/skill-logos/wordpress-logo.png';
import Hubspot from '../assets/skill-logos/hubspot-logo.png';

const Services = () => {
const skills = {
    primary: [
      { icon: HTMLlogo, title: "HTML" },
      { icon: CSSlogo, title: "CSS" },
      { icon: JavaScriptlogo, title: "JavaScript" },
      {icon: ReactJS, title: "React"},
      {icon: Bootstrap, title: "Bootstrap"},
      {icon: Redux, title: "Redux"},
      {icon: TailwindCSS, title: "Tailwind"},
      {icon: Axios, title: "Axios"},
      {icon: jQuery, title: "jQuery"},
      {icon: MaterialUI, title: "MUI"},
    ],
    secondary: [
      { icon: Photoshop, title: "Photoshop" },
      { icon: Illustrator, title: "Illustrator" },
      { icon: Photopea, title: "Photopea" },
      { icon: Wordpress, title: "Wordpress" },
      { icon: Hubspot, title: "Hubspot" },
    ],
  };
  return (
   <section
   id='skills'
   className='py-20 overflow-hidden bg-slate-800'
   aria-labelledby='skills-heading'>
    <div className='container mx-auto px-4'>
        <header data-aos='fade-up' data-aos-delay='500' className='text-center mb-16'>
            <h2 id='skills-heading' className='text-3xl md:text-4xl font-bold text-white mb-4'>
                My <span className='text-indigo-600'>Skillset</span>
            </h2>
            <p className='text-lg text-gray-100 max-w-2xl mx-auto'>
                Please Go go through my skill-set
            </p>
        </header>
        
            {Object.keys(skills).map((skillType, index) => (
            <div key={index} className='lg:w-full aos-init aos-animate'>
                <ul data-aos='fade-up' data-aos-delay='500'
                 className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-10 gap-8'>
                
                    {skills[skillType].map((skill, skillIndex) => (
                    <li key={skillIndex} data-aos-delay='500' className='mb-4'>
                        <article className='bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300  hover:translate-y-[-5px] h-full flex flex-col'>
                        <img src={skill.icon} alt={skill.title} />
                        <h3 className='text-md font-bold text-gray-800 mb-3 text-center'>{skill.title}</h3>
                        </article>
                    </li>
                    ))}
                </ul>
            </div>
            ))}
    </div>
   </section>
  );
};



export default Services;