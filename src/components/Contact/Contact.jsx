export default function Contact() {
    return <>
        <div className="w-full h-auto mb-6">
            <div className='container m-auto text-center'>
                <h1 className="pt-40 text-5xl font-bold text-[#2c3e50]">CONTACT SECTION</h1>
                <div className='flex justify-center text-[#2c3e50] items-center py-6'>
                    <div className='w-24 h-1 bg-[#2c3e50]'></div>
                    <i className='fa-solid fa-star px-3'></i>
                    <div className='w-24 h-1 bg-[#2c3e50]'></div>
                </div>
                <div className="flex flex-col justify-center m-auto rounded-xl mt-10 w-2/3 gap-y-12 p-6 bg-[#006A67]">
                    <input className="form-control focus:outline-none shadow-md placeholder-[#006A67] text-[#006A67]" type="text" placeholder="userName" />
                    <input className="form-control focus:outline-none shadow-md placeholder-[#006A67] text-[#006A67]" type="number" placeholder="userAge" />
                    <input className="form-control focus:outline-none shadow-md placeholder-[#006A67] text-[#006A67]" type="email" placeholder="userEmail"/>
                    <input className="form-control focus:outline-none shadow-md placeholder-[#006A67] text-[#006A67]" type="password" placeholder="userPassword"/>
                    <button className="text-left bg-[#1abc9c] w-fit px-4 py-3 rounded-md text-white">Send Message</button>

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