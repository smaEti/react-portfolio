import { FiMoon ,FiSun} from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll'
import { useState , useEffect ,useRef } from 'react';
const Header = (props) => {
  const navs = ['home', 'about','skills', 'projects', 'experience', 'contact'];
  return (
    <header className='z-50 text-md bg-white bg-opacity-40 dark:bg-opacity-40 dark:border-b-slate-700 border-gray-300 border-b dark:text-slate-100 dark:bg-darkblack backdrop-filter backdrop-blur-lg sticky top-0'>
      <nav className="md:flex hidden md:justify-between md:py-9 md:items-center md:h-12 md:mx-auto md:w-10/12 2xl:w-4/5">
        <ul>
          <li>
            <a href="">LOGO</a>
          </li>
        </ul>
        <ul className='flex items-center gap-8'>
                    {navs.map((e, i) => (
                        <li key={i}>
                            <ScrollLink
                                className='hover:text-violet-700 hover:dark:text-violet-500 transition-colors capitalize cursor-pointer'
                                to={e}
                                offset={-60}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                            >
                                {e}
                            </ScrollLink>
                        </li>
                    ))}
                    <span
                        onClick={props.darkToggle}
                        className='hover:bg-gray-100 hover:dark:bg-violet-700 p-1.5 rounded-full cursor-pointer transition-colors'>
                        {props.mode == true ? <FiSun /> : <FiMoon />}
                    </span>
                </ul>
      </nav>
    </header>
  );
};

export default Header;
