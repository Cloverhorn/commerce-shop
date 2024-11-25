import React from 'react'
import assets from '../../assets/assets'
import { FaInstagram, FaFacebook, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'


const BannerImg = {
    backgroundImage: `url(${assets.footerPattern})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
}

const FooterLinks = [
    {
        id: 1,
        title: 'Home',
        link: '/#',
    },
    {
        id: 2,
        title: 'About',
        link: '/#About',
    },
    {
        id: 3,
        title: 'Contact',
        link: '/#Contact',
    },
    {
        id: 4,
        title: 'Blog',
        link: '/#Blog',
    },
]

const Footer = () => {
    return (
        <div className='text-white bg-primary/80'
            >
            <div className='container'>
                <div className='grid md:grid-cols-3 pb-44 lg:pb-14 md:pb-20 pt-5'>
                    {/* Company details */}
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                            <img src={assets.logo} alt="" className='max-w-[50px] text-white' />
                            Junkstore</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quis commodi nemo? Dolores, repellat dolore?</p>
                    </div>
                    {/* Footer links*/}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        {/* Important links */}
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul className='flex flex-col gap-1'>
                                {FooterLinks.map((data) => (
                                    <li key={data.id} className='hover:text-primary hover:translate-x-1 duration-300'>
                                        <a href={data.link}>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Links */}
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'> Links</h1>
                            <ul className='flex flex-col gap-1'>
                                {FooterLinks.map((data) => (
                                    <li key={data.id} className='hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                        <a href={data.link}>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Social */}
                        <div className='py-8 px-4'>
                            <div className='flex items-center gap-3'>
                                <a href="#/">
                                    <FaInstagram className='text-3xl'></FaInstagram>
                                </a>
                                <a href="#/">
                                    <FaFacebook className='text-3xl'></FaFacebook>
                                </a>
                                <a href="#/">
                                    <FaLinkedin className='text-3xl'></FaLinkedin>
                                </a>
                            </div>
                            <div className='mt-6'>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow></FaLocationArrow>
                                    <p>Stormwind, Lordaeron</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaMobileAlt></FaMobileAlt>
                                    <p>+7-777-777-77-77</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer