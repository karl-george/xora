import { Element } from 'react-scroll';
import { links, logos } from '../../constants';
import Marker from '../components/Marker';

const Download = () => {
  return (
    <section>
      <Element
        name='download'
        className='relative pt-24 pb-32 g7 max-lg:mb-24 max-md:py-16'
      >
        <div className='container'>
          <div className='flex items-center'>
            <div className='relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100'>
              <div className='mb-10'>
                <img
                  src='/images/xora.svg'
                  alt='xora'
                  width={160}
                  height={55}
                />
              </div>
              <p className='max-w-md mb-10 body-1'>
                Try it now for free on iso, Android, PC, Web - Whatever your
                flavour, we have it!
              </p>

              <ul className='flex flex-wrap items-center gap-6'>
                {links.map((link) => (
                  <li
                    key={link.id}
                    className='download_tech-link download_tech-link_last-before download_tech-link_last-after'
                  >
                    <a
                      href={link.url}
                      className='relative flex items-center justify-center duration-500 border-2 size-22 download_tech-icon_before rounded-half border-s3 bg-s1 transition-borderColor'
                    >
                      <span className='absolute rotate-90 -top-2'>
                        <Marker />
                      </span>
                      <img
                        src='images/lines.svg'
                        alt='lines'
                        className='absolute object-contain size-13/20'
                      />
                      <span className='download_tech-icon'>{link.icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='mb-10 max-md:hidden'>
              <div className='download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6'>
                <div className='relative px-6 pb-6 rounded-3xl bg-s1 pt-14'>
                  <span className='download_preview-dot left-6 bg-p2' />
                  <span className='download_preview-dot left-11 bg-s3' />
                  <span className='download_preview-dot left-16 bg-p1/15' />
                  <img
                    src='/images/screen.jpg'
                    alt='screen'
                    width={855}
                    height={655}
                    className='rounded-xl'
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className='flex justify-center mt-24 max-lg:hidden'>
            {logos.map((logo) => (
              <li key={logo.id} className='mx-10'>
                <img
                  src={logo.url}
                  alt='logos'
                  width={logo.width}
                  height={logo.height}
                />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;
