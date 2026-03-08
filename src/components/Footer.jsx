
import {FaGit, FaLinkedin} from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { SiNetlify } from 'react-icons/si';

const Footer = ()=> {
    const socialLinks = [
        
        {icon: <FaLinkedin className="text-lg"/>, label:"LinkedIn", socialurl:"https://www.linkedin.com/in/manoj-kumar-rauta-6a007810/"},
        {icon: <FaGit className="text-lg"/>, label:"Github", socialurl:"https://github.com/manoj0254"},        
        {icon: <SiNetlify className="text-lg"/>, label:"Netlify", socialurl:"https://netlify.com"}
    ];

    const quickLinks = [
        {text: "Home", href:"#"},
        {text: "About Me", href:"#about"},
        {text: "Skills", href:"#skills"},
        {text: "Experience", href:"#experience"},
        {text: "Contact Me", href:"#contact"},
    ];

    const constactInfo = [
        {
            icon: <MdPhone className="text-indigo-600 text-xl mt-1 flex-shrink-0"/>,
            content: <a href="Tel:+91 99 898 58068" className="text-gray-400 hover:text-indigo-600 transition">
                +91 99 898 58068</a>
            
        },        
        {
            icon: <MdEmail className="text-indigo-600 text-xl mt-1 flex-shrink-0"/>,
            content: <a href="mailto:manoj0254@gmail.com" className="text-gray-400 hover:text-indigo-600 transition">
                manoj0254@gmail.com</a>
            
        },
    ]

const legalLinks = [
    {text:"Privacy Policy", href:"#"},
    {text:"SiteTerms of Services", href:"#"},
    {text:"Sitemap", href:"#"},
]    
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-6 md:grid-col-6 gap-12 mb-12">
                <section className="col-span-6 sm:col-span-2">
                    <header className="flex items-center mb-6">
                        <h2 className="text-2xl font-bold">Manoj Kumar Rauta</h2>
                    </header>
                    <p className="text-gray-400 mb-6">I am a web professional because I am passionate about websites.</p>                
                </section>
                <section className="col-span-3 sm:col-span-1">
                    <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0
                    after:bottom-0 after:w-12 after:h-1 after:bg-indigo-600">
                        Quick Links
                    </h3>
                    <nav aria-label="Quick Links">
                        <ul className="space-y-3">
                            {quickLinks.map((link, index)=>(
                                <li key={index}>
                                    <a href={link.href} className="text-gray-400 hover:text-indigo-600 transition">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </section>                
                <section className="col-span-3 sm:col-span-1">
                    <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0
                    after:bottom-0 after:w-12 after:h-1 after:bg-indigo-600">
                        Social Links
                    </h3>
                    {/* <p className="text-gray-400 mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, rem ipsam? Consequatur dolor dicta eveniet alias, culpa laborum obcaecati voluptate.</p> */}
                    <nav aria-label="Social media links">
                        <ul className="flex space-x-4 flex-col">
                            {socialLinks.map((item, index)=>(
                            <li key={index}>
                                <a href={item.socialurl} className="hover:bg-indigo-600 flex rounded p-1 w-full sm:w-[200px]"  >
                                <span href={item.socialurl} target='_blank' className="bg-gray-800 hover:text-indigo-600 w-10 h-10 rounded flex items-center justify-center transition mr-5" aria-label={item.label} title={item.label}>
                                    {item.icon}
                                </span>
                                <span href={item.socialurl} target='_blank' className="w-auto h-10 rounded-full flex items-center justify-center transition" aria-label={item.label} title={item.label}><p>{item.label}</p>
                                </span>
                                </a>
                            </li>
                            ))}
                        </ul>
                    </nav>                    
                </section>                 
                <section className="col-span-6 sm:col-span-2">
                    <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute 
                    after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-indigo-600">Contact Options</h3>
                    <address>
                    <ul className='space-y-4'>
                        {constactInfo.map((info, index)=>(
                            <li key={index} className="flex items-start align-center">
                                <span className='bg-gray-800 hover:text-indigo-600 w-10 h-10 rounded flex items-center justify-center transition mr-5'>{info.icon}</span>
                                <span className='hover:text-indigo-600 h-10 rounded flex items-center justify-center transition mr-5'>{info.content}</span>
                            </li>
                        ))}
                    </ul>
                    </address>
                </section>                
            </div>
           
            <footer className='pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-center'>
                <p className='text-gray-500 text-lg text-strong'>2021 &lt;-&gt; 2026 </p>          
            </footer>            
        </div>
    </footer>
  );
}

export default Footer;