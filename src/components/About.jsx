const About = () => {
  return (
    <section id="about" className="dark:text-slate-50 mx-40">
      <h1 className="text-center text-4xl pb-24">About Me</h1>
      <div className="md:flex">
        <div className="p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white dark:bg-grey-800 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
        <img alt="profile" src="" width="1000" height="1000" decoding="async" data-nimg="1" className="w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100" loading="lazy"/>
          <span className="font-medium font-sans">&lt; I build stuff 🚀/&gt;</span>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">Amin Ehterami</h1>
          <h2 className=""></h2>
        </div>
      </div>
    </section>
  );
};
export default About;
