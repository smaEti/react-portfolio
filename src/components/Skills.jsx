import { motion } from 'framer-motion';
import Skill from '../components/Skill';
const Skills = () => {
  const mySkills = [
    {
      name: 'JavaScript',
      pic: 'https://img.icons8.com/color/48/null/javascript--v2.png',
    },
    {
      name: 'ReactJS',
      pic: 'https://img.icons8.com/officel/40/null/react.png',
    },
    {
      name: 'Tailwind',
      pic: 'https://img.icons8.com/color/48/null/tailwindcss.png',
    },
    { name: 'PHP', pic: 'https://img.icons8.com/officel/40/null/php-logo.png' },
    {
      name: 'MySQL',
      pic: 'https://img.icons8.com/color/48/null/mysql--v1.png',
    },
    {
      name: 'HTML',
      pic: 'https://img.icons8.com/color/48/null/html-5--v1.png',
    },
    { name: 'CSS', pic: 'https://img.icons8.com/color/48/null/css3.png' },
    { name: 'Git', pic: 'https://img.icons8.com/color/48/null/git.png' },
  ];
  return (
    <motion.section id="skills" className="dark:text-slate-50 ">
      <motion.h1
        className="text-center text-4xl pb-24"
        initial={{ opacity: 0 }}
        transition={{ duration: 2, type: 'ease' }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h1>
      <div className="grid grid-rows-2 gap-x-30 grid-cols-4 mx-48 justify-center gap-y-20">
        {mySkills.map((e, i) => (
          <Skill key={i} name={e.name} pic={e.pic} />
        ))}
      </div>
      <h1 className='text-center mt-20'>OMG!I almost forgot this <img src="https://img.icons8.com/color/48/null/npm.png" className='block mx-auto'/></h1>
    </motion.section>
  );
};
export default Skills;
