import { motion } from 'framer-motion';
const Skill = (props) => {
  return (
    <div className="flex flex-col justify-center items-center object-cover">
      <motion.a className='cursor-pointer'
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={props?.pic} alt="picture" className='w-16'/>
      <h2 className='text-center'>{props?.name}</h2>
      </motion.a>
    </div>
  )
};
export default Skill;
