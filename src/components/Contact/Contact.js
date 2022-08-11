import React from 'react'

const Contact = () => {
    return (
        <div id='Contact' className='w-full lg:h-screen mt-5 p-2 '>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <h2 className='tracking-widest uppercase text-hoverc mb-4' >Contact</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 py-10 flex flex-col justify-around text-center lg:col-span-2 w-full h-full'>
                        <div className=' items-center'>
                            <h2>
                                If Not Now, When?
                            </h2>
                            <h2>
                                Let's work Togerther!!
                            </h2>
                        </div>
                        <div>
                            <p className='my-4 max-w-[70%] mx-auto '>
                                I am available for full-time positions. Contact
                                me and let's talk.
                            </p>
                        </div>
                        <div className='text-5xl flex  justify-center items-center'>
                            <p className='hover:text-hoverc hover:scale-125 cursor-pointer duration-700'>
                                [̲̅m̲̅]
                            </p >
                            <p className='hover:text-hoverc hover:scale-125 cursor-pointer duration-700 mx-2 mb-7'>
                                [̲̅C̲̅]
                            </p>
                            <p className='hover:text-hoverc hover:scale-125 cursor-pointer duration-700'>
                                [̲̅k̲̅]
                            </p>
                        </div>
                    </div>
                    <div className='col-span-3 py-10 justify-center text-center w-full h-full'>
                        <form action='https://getform.io/f/9b2ac89d-2e50-475c-9a93-85a1ba1283be' method='POST' className='mx-10 '>
                            <div className='flex flex-col '>
                                <label className='uppercase mb-1 text-sm'>Name</label>
                                <input name='Name' className='rounded-xl p-2 text-back outline-0' />
                            </div>
                            <div className='flex flex-col my-3 text-sm'>
                                <label className='uppercase my-1'>Email</label>
                                <input name='Email' className='rounded-xl p-2 outline-0 text-back' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm mb-1'>Message</label>
                                <textarea name='Message' className='rounded-xl resize-none outline-0 p-2 text-back' rows={4}>

                                </textarea>
                            </div>
                            <button className='border-hoverc border mt-5 px-5 py-1 uppercase text-xl rounded-lg hover:scale-105 hover:bg-hoverc duration-500' >
                                send message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact