import {motion} from 'framer-motion';
const About = () => {
  return (
    <motion.section   initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} transition={{duration : 2 ,type: "linear"}} viewport={{ once: true }} id="about" className="dark:text-slate-50 mx-40 md:h-screen">
      <h1 className="text-center text-4xl pb-24 pt-10">About Me</h1>
      <div className="md:flex">
        <div className="dark:bg-gray-800 p-3 w-56  md:w-2/5 lg:w-5/12 bg-white flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
        <img alt="profile" src="./images/profilePic.jpg" width="1000" height="1000" decoding="async" data-nimg="1" className="w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100" loading="lazy"/>
          <span className="font-medium font-sans">&lt; I build stuff 🚀/&gt;</span>
        </div>
        <div className="pl-16 pr-16">
          <h1 className="text-4xl font-extrabold mb-3 mt-12">Amin Ehterami</h1>
          <span className="bg-violet-300 text-violet-700 bg-opacity-40 dark:bg-violet-950 dark:text-violet-400 rounded-md py-1 px-2">Software Engineer</span>
          <h2 className="mt-6 mb-14">I am a Front-End Developer based in Qom, Iran. I'm an Software Engineer undergraduate from QUT, and my journey in web development began during my first term of college. I'm passionate about creating beautiful, functional, and user-friendly websites and applications, and I'm constantly pushing myself to learn and grow as a developer. Love building new things.</h2>
          <a href="" className="bg-violet-700 hover:bg-violet-800 text-white py-3 px-7 rounded-lg">Resume</a> 
        </div>
      </div>
    </motion.section>
  );
};
export default About;
