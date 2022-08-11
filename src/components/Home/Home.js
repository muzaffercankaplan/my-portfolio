import React from 'react'
// import Avatar from "../../assets/Avatar.png"

const Home = () => {
    return (
        <div id="Home" className='w-full h-screen text-center' >
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest'>let's build something</p>
                    <h1 className='pt-4'> Hi, I'm <span className='uppercase text-hoverc'>muzaffer</span></h1>
                    <h1 className='py-4'> A Front-end Developer</h1>
                    <p className='sm:max-w-[70%] m-auto '>
                        I’m focused on building responsive front-end web and mobile applications.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home