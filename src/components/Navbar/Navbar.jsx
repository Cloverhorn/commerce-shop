import React, { useRef, useState } from 'react'
import assets from '../../assets/assets'
import { IoMdSearch } from "react-icons/io"
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';


const Menu = [
    {
        id: 1,
        name: 'Home',
        link: '/#',
    },
    {
        id: 2,
        name: 'Top Rated',
        link: '/#services',
    },
    {
        id: 3,
        name: 'Services',
        link: '/#',
        dropdown: [
            {
                id: 1,
                name: 'Renovation',
                link: '/#Renovation',
            },
            {
                id: 2,
                name: 'Design',
                link: '/#Design',
            },
            {
                id: 3,
                name: 'Landscape',
                link: '/#Landscape',
            },
        ]
    },
    {
        id: 4,
        name: 'Materials',
        link: '/#Materials',
    },
    {
        id: 5,
        name: 'Design',
        link: '/#Design'
    },
    {
        id: 6,
        name: 'Top Rated',
        link: '/#TopRated',
        dropdown: [
            {
                id: 1,
                name: 'Guided rails',
                link: '/#GuidedRails',
            },
            {
                id: 2,
                name: 'Wood chisels',
                link: '/#WoodChisels',
            },
            {
                id: 3,
                name: 'Screwdriver bits',
                link: '/#ScrewdriverBits',
            },
        ]
    },
]



const Navbar = ({ handleOrderPopup }) => {
    const myRef = useRef(null)

    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            {/* upper nav */}
            <div className='bg-primary/80 py-2'>
                <div className='container flex justify-between items-center'>
                    <div>
                        <a href=""
                            className='font-bold text-2xl sm:text-xl flex gap-2 items-center'>
                            <img src={assets.logo} alt=""
                                className='w-10 uppercase' />
                            Hardware store
                        </a>
                    </div>
                    {/* search bar order button*/}
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='search'
                                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400 focus:border-primary dark:border-gray-500 dark:bg-gray-800' />
                            <IoMdSearch className='text-gray-500 group-hover:text-primary absolute right-3 top-1/2 -translate-y-1/2' />
                        </div>
                        {/* order button */}
                        <button
                            onClick={() => handleOrderPopup()}
                            className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                            <span className='group-hover:block hidden transition-all duration-200'>
                                Order
                            </span>
                            <FaCartShopping
                                className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>
                        {/* Dark mode switch */}
                        <div className=''>
                            <DarkMode></DarkMode>
                        </div>
                    </div>
                </div>
            </div>
            {/* lower nav */}
            <div className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {Menu.map((item) => (

                        <li key={item.id} className='flex items-center relative group py-1'
                            onClick={(event) => {
                            }}
                        >
                            <a href={item.link}
                                className='inline-block px-4 hover:text-primary duration-200'>
                                {item.name}
                            </a>

                            {/* Dropdown icon show if there is one in Menu */}
                            {item.dropdown && (
                                <a href="#" className=''>
                                    <span className='absolute right-[-1px] top-[55%] -translate-y-1/2'>
                                        <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'>
                                        </FaCaretDown>
                                    </span>
                                </a>
                            )}
                            {/* Dropdown items */}
                            {item.dropdown && (
                                // REF
                                <ul className='bg-white absolute top-[32px] right-[-30px] transition-all duration-200 z-[99999] rounded-md text-nowrap hidden group-hover:block shadow-md' ref={myRef}>
                                    {item.dropdown.map((dropItem) => (
                                        <li key={dropItem.id} className='px-4 py-1 hover:bg-primary/20 dark:text-black'>
                                            <a href={dropItem.link}>{dropItem.name}</a>
                                        </li>
                                    ))}
                                </ul>

                            )
                            }
                        </li>


                    ))}
                    {/* Dropdown and links */}
                    {/* <li>
                        <a href="#">
                            <span>
                                <FaCaretDown></FaCaretDown>
                            </span>
                        </a>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar