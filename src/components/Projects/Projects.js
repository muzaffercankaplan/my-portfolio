import React from 'react'

const Projects = () => {

    const Data = [
        {
            id: 1,
            title: "react",
            name: "To-do",
            link: "https://github.com/muzaffercankaplan/React-todo",
        },
        {
            id: 2,
            title: "React",
            name: "Weather-app",
            link: "https://github.com/muzaffercankaplan/wheather-app-React",
        },
        {
            id: 3,
            title: "React Native",
            name: "To-do",
            link: "https://github.com/muzaffercankaplan/ToDoList",
        },
        {
            id: 4,
            title: "React Native",
            name: "User Login",
            link: "https://github.com/muzaffercankaplan/UserLogin",
        },
        {
            id: 5,
            title: "Js",
            name: "Calculator",
            link: "https://github.com/muzaffercankaplan/calculator",
        },
    ]

    return (
        <div id='Projects' className='w-full lg:h-screen p-2 mt-5'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <h2 className='uppercase text-hoverc tracking-widest mb-4' >Projects</h2>
                <div className='grid grid-cols-2  lg:grid-cols-4 gap-8 text-center'>
                    {Data.map(({ id, title, name, link }) => (
                        <div key={id} className="flex flex-col items-center justify-center h-auto w-full shadow-md shadow-white rounded-xl">
                            <p className='my-2 text-xl'> {name} </p>
                            <img src='https://picsum.photos/id/1/200' alt='' className='rounded-lg' />
                            <p className='mt-2 uppercase text-sm tracking-widest'> {title} </p>
                            <button className='border-hoverc border my-2 px-5 py-1 text-xl rounded-lg hover:scale-125 hover:text-tcolor hover:bg-hoverc duration-500' > <a href={link} >Code</a> </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects