import React from 'react'
import Avatar from "../../assets/Avatar.jpg"

const About = () => {
    return (
        <div id='About' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <h2 className='text-hoverc tracking-widest uppercase'>ABOUT</h2>
                    <p className='mt-10'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <p className='mx-20 my-5 font-signature text-xl'>
                        I know I'm not the best, but I know that the best go through this phase.
                    </p>
                </div>
                <div className='my-4 w-full h-auto m-auto flex items-center justify-center  hover:scale-105 duration-500'>
                    <img className='rounded-lg' src={Avatar} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default About