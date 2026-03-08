import SpecialistsImg1 from '../assets/VSoft-Logo.png'
import SpecialistsImg2 from '../assets/eipl.webp'
import SpecialistsImg3 from '../assets/vsplash.jpg'
import SpecialistsImg4 from '../assets/youngsoft_india_logo.jpg'
import SpecialistsImg5 from '../assets/weblabs.jpg'
import SpecialistsImg6 from '../assets/meritel.jpg'
import SpecialistsImg7 from '../assets/meritel.jpg'
import SpecialistsImg8 from '../assets/qtek_sols.png'
import SpecialistsImg9 from '../assets/pws.jpg'
import {FaStar, FaRegStar, FaSuitcase, FaBlackTie} from 'react-icons/fa';

const Projects = () => {
    const specialists = [
        {
            id:1,
            name:'V-soft Consulting Corporation Pvt. Ltd',
            role:'Senior Web Developer',
            image:SpecialistsImg1,
            bio: 'Mar 2022 - Jun 2025 · 3 yrs 4 mos',
            rating: 5,
            specialties: ['Hyderabad, Telangana, India · On-site']
        }, 
        {
            id:2,
            name:'East India Petroleum Pvt Ltd',            
            role:'Web Designer and Front End Developer',
            image:SpecialistsImg2,
            bio: 'Oct 2019 - Mar 2022 (2 yrs, 5 m)',
            rating: 4,
            specialties: ['Hyderabad, Telangana, India · On-site']
        }, 
        {
            id:3,
            name:'VSplash Techlabs',
            role:'HTML Integrator',
            image:SpecialistsImg3,
            bio: 'Jan 2019 - Jun 2019 (5 m)',
            rating: 5,
            specialties: ['Hyderabad, Telangana, India · On-site']
        },
        {
            id:4,
            name:'Ritwik Software Technologies',
            role:'Creative Web Designer',
            image:SpecialistsImg4,
            bio: 'Oct 2015 - Dec 2018',
            rating: 5,
            specialties: ['Hyderabad, Telangana, India · On-site']
        }, 
        {
            id:5,
            name:'Weblabs IT Solutions',
            role:'Web Designer',
            image:SpecialistsImg5,
            bio: 'Sep 2014 - Oct 2015',
            rating: 5,
            specialties: ['Hyderabad, Telangana, India · On-site']
        },         
        {
            id:6,
            name:'Meritel Group',
            role:'Web Graphic Designer',
            image:SpecialistsImg6,
            bio: 'May 2010 - Aug 2014',
            rating: 5,
            specialties: ['Hyderabad, Telangana, India · On-site']
        },  
        {
            id:7,
            name:'IDS Soft',
            role:'Graphic & Web Designer',
            image:SpecialistsImg4,
            bio: 'Jul 2009 - May 2010',
            rating: 5,
            specialties: ['Hyderabad, Telangana, India · On-site']
        },               
        {
            id:8,
            name:'Qtek Solutions',
            role:'Web Designer',
            image:SpecialistsImg8,
            bio: 'May 2008 - May 2009',
            rating: 5,
            specialties: ['Hyderabad, Telangana, India · On-site']
        },        
        {
            id:9,
            name:'Premium Web Services',
            role:'Web Developer',
            image:SpecialistsImg9,
            bio: 'Jun 2007 - Apr 2008',
            rating: 5,
            specialties: ['Hyderabad, Telangana, India · On-site']
        }                                   
    ];    
    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
        i > rating ? 
        <FaRegStar key={i} className='text-yellow-400 inline' aria-hidden='true' /> :
        <FaStar key={i} className='text-yellow-400 inline' aria-hidden='true' />
        ));
    }
;
  return (
    <section id="projects" 
    className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700">
        <div class="container mx-auto px-4">
            <header data-aos='fade-up' data-aos-delay='400' className='text-center my-16 relative'>
                <span className='absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20
                rounded-full bg-indigo-800 opacity-30 z-0' aria-hidden='true'></span>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-100 mb-4 relative z-10'>
                    My <span className='text-indigo-600'>Notable Projects</span>
                </h2>
                <span className='absolute -bottom-6 right-1/4 h-16 rounded-full bg-purple-100
                opacity-20 z-0' aria-hidden='true'></span>
            </header>
            <ul data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-4 gap-8 mb-16'>
                {
                    specialists.map((doctor) => (
                       <li key={doctor.id} className='group relative'>
                            <article className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl
                            transition-all duration-300 h-full'>
                                {/* <figure className='relative h-80 overflow-hidden'>
                                    <img
                                    src={doctor.image}
                                    className='w-full h-full object-scale-down transition-transform duration-500
                                    group-hover:scale-105'
                                    loading='lazy'/>
                                    <span className='absolute inser-0 bg-gradient-to-t from-black/60
                                    to-transparent' aria-hidden='true'></span>
                                </figure> */}
                                <div className="p-6 relative -mt-10">
                                    <div className="bg-slate-100 rounded-lg shadow-mg p-6">
                                        <header>
                                            <h3 className="text-xl font-bold text-slate-800 mb-1">{doctor.name}</h3>
                                            <p className="text-slate-600 font-medium mb-3">{doctor.role}</p>
                                        </header>
                                        <p className="text-gray-600 mb-4">{doctor.bio}</p>
                                        <ul className="flex">
                                            {doctor.specialties.map((spec, i)=>(
                                            <li key={i}>
                                                <span className="bg-slate-100 text-indigo-600 text-xs font-medium rounded-full">
                                                    {spec}
                                                </span>
                                            </li>
                                            ))}   
                                        </ul>  
                                        {/* <figure className='absolute top-0 left-1/2 ml-[-21px] bg-indigo-600 text-white p-3 rounded-full shadeow-lg'
                                        aria-hidden='true'>
                                            <FaBlackTie className='text-lg'/>
                                        </figure>       */}
                                    </div>
                                </div>
                            </article>
                        </li>
                    ))
                }
            </ul>       
        </div>
    </section>
  );
};

export default Projects;