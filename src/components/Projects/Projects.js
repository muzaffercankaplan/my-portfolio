import React from 'react'
import { Link } from 'react-router-dom'
import Data from "../../projectsData/projectsData.json"

const Projects = () => {

    return (
        <div id='Projects' className='w-full lg:h-screen p-2 mt-5'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <h2 className='uppercase text-hoverc tracking-widest mb-4' >Projects</h2>
                <div className='grid grid-cols-2  lg:grid-cols-3 gap-8 text-center'>
                    {Data.map(({ id, image, name}) => (
                        <div key={id} className="flex flex-col items-center justify-center h-auto w-full shadow-md shadow-white rounded-xl">
                            <p className='my-2 text-xl'> {name} </p>
                            <img src={image} alt='' className='rounded-lg mb-5' />
                            <Link className='text-hoverc uppercase my-2 px-5 py-1 text-xl rounded-lg hover:scale-125 hover:text-tcolor hover:bg-hoverc duration-500 absolute' to={`Details/${id}`}> more info</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects