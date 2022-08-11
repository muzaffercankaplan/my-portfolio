import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi"
import { Link } from 'react-scroll'

const Navbar = () => {

    const Links = [
        {
            id: 1,
            title: "Home"
        },
        {
            id: 2,
            title: "About"
        },
        {
            id: 3,
            title: "Skills"
        },
        {
            id: 4,
            title: "Projects"
        },
        {
            id: 5,
            title: "Contact"
        }
    ]

    const [show, setShow] = useState(false)
    const [shadow, setShadow] = useState(false)

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 100) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div className={!shadow ? 'p-3 flex items-center justify-between w-full h30 fixed' : 'p-3 flex items-center justify-between w-full h30 bg-secondry fixed'}>
            <div className='text-3xl ml-2 text-hoverc hover:scale-110 cursor-pointer duration-300'>
                <Link to='Home' smooth duration={500}>
                    [̲̅m̲̅][̲̅C̲̅][̲̅k̲̅]
                </Link>
            </div>
            <ul className=' hidden md:flex'>
                {Links.map(({ title, id }) => (
                    <li key={id} className=' font-medium px-4 hover:text-hoverc hover:scale-110 duration-200'>
                        <Link to={title} smooth duration={300}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setShow(!show)} className='z-10 cursor-pointer pr-4 z-1 hover:text-hoverc md:hidden '>
                {show ? <GiCrossMark size={30} /> : <GiHamburgerMenu size={30} />}
            </div>

            {show && (
                <ul className='flex text-3xl bg-primary bg-opacity-80 flex-col justify-center items-center absolute top-0 left-0 w-full h-screen '>
                    {Links.map(({ title, id }) => (

                        <li key={id} className='py-3 hover:text-hoverc hover:scale-125 duration-200'>
                            <Link onClick={() => setShow(!show)} to={title} smooth duration={300}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default Navbar