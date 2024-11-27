export default function About() {
    return <>
        <div className="w-full h-screen bg-[#1abc9c] flex justify-center items-center">
            <div className='w-3/4 m-auto text-center text-white'>
                <h1 className="text-5xl py-7 font-bold">ABOUT COMPONENT</h1>
                <div className='flex justify-center items-center'>
                    <div className='bg-white w-24 h-1 text-white'></div>
                    <i className='fa-solid fa-star px-3 text-white'></i>
                    <div className='bg-white w-24 h-1 text-white'></div>
                </div>
                <div className="flex space-x-10 text-lg py-8">
                    <p className="text-left">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className="text-left">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>


        </div>
        <div className='bg-[#2c3e50] w-full h-64'>
            <div className='w-auto m-auto p-16'>
                <div className='flex justify-between items-center text-center text-white'>
                    <div className='card px-20'>
                        <h2 className='text-3xl py-2 font-semibold'>LOCATION</h2>
                        <p className='py-3'>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className='card'>
                        <h2 className='font-semibold text-3xl'>AROUND THE WEB</h2>
                        <div className='py-4'>
                            <i className='border rounded-full p-3 mx-1 fa-brands fa-facebook'></i>
                            <i className='border rounded-full p-3 mx-1 fa-brands fa-twitter'></i>
                            <i className='border rounded-full p-3 mx-1 fa-brands fa-linkedin-in'></i>
                            <i className='border rounded-full p-3 mx-1 fa-solid fa-globe'></i>
                        </div>
                    </div>
                    <div className='card'>
                        <h2 className='text-3xl py-2 font-semibold'>ABOUT FREELANCER</h2>
                        <p className='py-2'>Freelance is a free to use, licensed Bootstrap theme</p>
                        <p>created by mohamed said</p>
                    </div>
                </div>
            </div>
        </div>
        <footer className='w-full h-24 flex justify-center items-center bg-[#1a252f] text-white text-lg'>
            <p>Copyright © Your Website 2024</p>
        </footer>


    </>
}