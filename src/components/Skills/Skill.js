import React from 'react'
import { css, firebase, github, html, javascript, react, tailwind } from "../../assets/skills/index"

const data = [
    {
        id: 1,
        title: "html",
        image: html,
        style: "shadow-red"
    },
    {
        id: 2,
        title: "css",
        image: css,
        style: "shadow-blue"
    },
    {
        id: 3,
        title: "javascript",
        image: javascript,
        style: "shadow-yellow"
    },
    {
        id: 4,
        title: "react",
        image: react,
        style: "shadow-light_blue"
    },
    {
        id: 5,
        title: "github",
        image: github,
        style: "shadow-white"
    },
    {
        id: 6,
        title: "tailwind",
        image: tailwind,
        style: "shadow-light_blue"
    },
    {
        id: 7,
        title: "firebase",
        image: firebase,
        style: "shadow-yellow"
    },
    {
        id: 8,
        title: "react native",
        image: react,
        style: "shadow-light_blue"
    }
]


const Skill = () => {
    return (
        <div id='Skills' className='w-full lg:h-screen p-2 mt-5'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <h2 className='tracking-widest uppercase text-hoverc mb-4'>
                    Skills
                </h2>
                <div className='grid grid-cols-2  lg:grid-cols-4 gap-8 text-center'>

                    {data.map(({ id, title, image, style }) => (

                        <div key={id} className={`p-6 rounded-xl shadow-md hover:scale-90 duration-500 ease-out text-center ${style}`}>
                            <div className='grid gap-3'>
                                <div className='m-auto w-20'>
                                    <img src={image} alt="" />
                                    <p>{title} </p>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default Skill