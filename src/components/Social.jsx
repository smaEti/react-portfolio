import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
const Social = () => {
  const SocialLinks = [
    ['https://www.linkedin.com/in/amin-ehterami-0aa86724b/', <FaLinkedin />],
    ['https://github.com/smaEti', <FaGithub />],
    ['instagram', <FaInstagram />],
    ['twitter', <FaTwitter />],
  ];
  return (
    <div className="flex flex-col gap-3  justify-items-start absolute bottom-9 left-9 z-10">
      {SocialLinks.map((e, i) => (
        <a
          key={i} target="_blank"
          className="rounded-full bg-violet-700 text-md w-10 h-10 flex justify-center items-center hover:animate-bounce text-slate-50"
          href={e[0]}
        >
          {e[1]}
        </a>
      ))}
    </div>
  );
};
export default Social;
