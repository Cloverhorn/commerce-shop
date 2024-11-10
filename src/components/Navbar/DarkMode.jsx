import React, { useEffect, useState } from 'react'
import assets from '../../assets/assets'


const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light'
    )

    const element = document.documentElement

    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
        else {
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [theme])


    return (
        <div className='relative'>
            <img src={assets.lightModeButton} alt=""
                onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light') }}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'
                    }`}
            />
            <img src={assets.darkModeButton} alt=""
                onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}
                className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ' />
        </div>
    )
}

export default DarkMode