import { socials } from '../../constants';

const Footer = () => {
  return (
    <footer>
      <div className='container py-10'>
        <div className='flex w-full max-md:flex-col'>
          <div className='flex flex-wrap items-center justify-center flex-1 gap-5 small-compact'>
            <p className='opacity-70'>Copyright, Karl</p>
          </div>
          <div className='flex items-center justify-center sm:ml-auto'>
            <p className='relative transition-all duration-500 legal-after mr-9 text-p5 hover:text-p1'>
              Privacy Policy
            </p>
            <p className='transition-all duration-500 text-p5 hover:text-p1'>
              Terms of Use
            </p>
          </div>

          <ul className='flex justify-center flex-1 gap-3 max-md:mt-10 md:justify-end'>
            {socials.map((social) => (
              <li key={social.id}>
                <a href={social.url} className='social-icon'>
                  <img
                    src={social.icon}
                    className='object-contain size-1/3'
                    alt='socials'
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
