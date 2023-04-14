import Typewriter from 'typewriter-effect';
import {IoIosArrowForward } from 'react-icons/io'
import { Link as ScrollLink } from 'react-scroll';
const Hero = (props) => {
  const titles = [
    'Software Engineering.',
    'FullStack Development.',
    'Web Development.',
  ];
  return ( 
    <section id="hero" className="md:h-full  dark:text-slate-100">
      <div className="md:pt-36 md:pb-40 md:mx-56 flex justify-between ">
        <div>
          <h1 className="text-xl pb-6">
            <img
              src="./images/waving-hand.gif"
              alt="waving-hand"
              className="h-10 inline"
            />
            Hey
          </h1>
          <h1 className="text-7xl font-extrabold">I'm Amin Ehterami.</h1>
          <div className="flex flex-row items-start md:items-center gap-1.5">
            <div className="pt-8 flex gap-2">
              <h2 className="text-lg md:text-2xl">I am into</h2>
              <Typewriter
                options={{
                  strings: titles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                  wrapperClassName:
                    'text-violet-700 dark:text-violet-600 text-lg md:text-2xl font-medium',
                  cursorClassName:
                    'text-violet-700 dark:text-violet-600 text-lg md:text-2xl',
                }}
              />
            </div>
          </div>
          <h3 className="py-6 text-gray-600 font-thin dark:text-gray-400">
            I focus on developing user-friendly web applications that meet the
            client's requirements,
            <br /> with attention to detail, scalability, and performance.
          </h3>

          <ScrollLink
            className="w-fit text-sm md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-violet-600 hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 transition-colors group text-white"
            to={'about'}
            offset={-60}
            smooth={true}
            duration={500}
            isDynamic={true}
          >
            About Me
            <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
          </ScrollLink>
        </div>
        <div className="md:w-3/12">
          <img
            className="h-full w-full object-cover rounded-full"
            src="./images/HeroPic.jpg"
            alt="Picture-Profile"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
