import React, {useState} from "react";

const Header = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
 
    const navLinks = [
        {href:'#home', label:'Home'},
        {href:'#skills', label:'Skills'},
        {href:'#about', label:'About Us'},
        {href:'#experience', label:'Experience'},
        // {href:'#projects', label:'Projects'},
        {href:'#contact', label:'Contact'},
    ]
    return (
      <header className='bg-[#273341] sticky top-0 z-50'>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className='flex items-center focus:outline-none focus:ring-2 focus:ring-violet-600 rounded'>
              <h1 className='text-2xl font-bold text-indigo-500 hover:text-indigo-400'>Manoj Kumar Rauta</h1>
            </a>
            <nav aria-label='Primary Navigation'>
                <ul className='hidden md:flex space-x-8'>
                    {navLinks.map((link, index)=>(
                        <li key={index}>
                            <a 
                            href={link.href}
                            className="text-white hover:text-indigo-400 transition-colors duration-200
                            focus:outline-none focus:ring-indigo-600 focus:rounded">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button 
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
            onClick={toggleMenu}
            aria-label='Toggle Menu'
           
            aria-controls='mobile-menu'>
                <svg className='w-6 h-6 text-indigo-600' fill='none' stroke='currentColor' viewBox="0 0 24 24">
                    {isMenuOpen ? (
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={5} d='M6 18L18 6M6 6l12 12'></path>
                        ):(
                            <>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={5} d='M4 6h16M4 h116M4 18h16'></path>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={5} d='M4 12h16M4 h116M4 18h16'></path>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={5} d='M4 18h16M4 h116M4 18h16'></path>
                            </>
                        )}
                </svg>
            </button>
            {isMenuOpen && (
                <aside
                id='mobile-menu'
                className='md:hidden absolute top-16 left-0 right-0 bg-gray-900 shadow-lg py-4 px-4'
                aria-label='Mobile menu'
                >
                    <nav aria-label='Mobile Navigation'>
                        <ul className="flex flex-col space-y-4">
                            {navLinks.map((link, index)=>(
                                <li key={index}>
                                    <a href={link.href}
                                    className='block 
                                    text-white hover:text-indigo-600 
                                    transition-colors duration-200 py-2 
                                    focus:out-of-none focus:ring-2 focus:ring-indigo-600 focus:rounded'
                                    onClick={toggleMenu}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            )}
        </div>
      </header>
    );
};

export default Header;









