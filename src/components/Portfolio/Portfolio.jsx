import port1 from '../../assets/port1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
// import { useState } from 'react';
export default function Portfolio() {

    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [currentImage, setCurrentImage] = useState(null);

    // const openModal = (image) => {
    //     setCurrentImage(image);
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    //     setCurrentImage(null);
    // };


    return <>
        <div className="w-full h-auto pb-9 box-border">
            <div className='container m-auto text-center'>
                <h1 className="pt-40 text-5xl font-bold text-[#2c3e50]">PORTFOLIO COMPONENT</h1>

                <div className='flex justify-center text-[#2c3e50] items-center py-6'>
                    <div className='w-24 h-1 bg-[#2c3e50]'></div>
                    <i className='fa-solid fa-star px-3'></i>
                    <div className='w-24 h-1 bg-[#2c3e50]'></div>
                </div>

                <div className='grid grid-cols-3 gap-8 cursor-pointer'>
                    <div className='group relative cursor-pointer'>
                        <img className='w-full rounded-xl' src={port1} alt="" />
                        <div className="layer absolute w-full h-full top-0 left-0 bg-[#1abc9c] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex justify-center items-center">
                            <i className='fa-solid fa-plus text-8xl text-white'></i>
                        </div>
                    </div>
                    <div className='group relative cursor-pointer'>
                        <img className='w-full rounded-xl' src={port2} alt="" />
                        <div className="layer absolute w-full h-full top-0 left-0 bg-[#1abc9c] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex justify-center items-center">
                            <i className='fa-solid fa-plus text-8xl text-white'></i>
                        </div>
                    </div>
                    <div className='group relative cursor-pointer'>
                        <img className='w-full rounded-xl' src={port3} alt="" />
                        <div className="layer absolute w-full h-full top-0 left-0 bg-[#1abc9c] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex justify-center items-center">
                            <i className='fa-solid fa-plus text-8xl text-white'></i>
                        </div>
                    </div>
                    <div className='group relative cursor-pointer'>
                        <img className='w-full rounded-xl' src={port1} alt="" />
                        <div className="layer absolute w-full h-full top-0 left-0 bg-[#1abc9c] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex justify-center items-center">
                            <i className='fa-solid fa-plus text-8xl text-white'></i>
                        </div>
                    </div>
                    <div className='group relative cursor-pointer'>
                        <img className='w-full rounded-xl' src={port2} alt="" />
                        <div className="layer absolute w-full h-full top-0 left-0 bg-[#1abc9c] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex justify-center items-center">
                            <i className='fa-solid fa-plus text-8xl text-white'></i>
                        </div>
                    </div>
                    <div className='group relative cursor-pointer'>
                        <img className='w-full rounded-xl' src={port3} alt="" />
                        <div className="layer absolute w-full h-full top-0 left-0 bg-[#1abc9c] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex justify-center items-center">
                            <i className='fa-solid fa-plus text-8xl text-white'></i>
                        </div>
                    </div>
                </div>


                {/* <div className='grid grid-cols-3 gap-4 !cursor-pointer'>
                    {[port1, port2, port3, port1, port2, port3].map((image, index) => (
                        <><div key={index} className='group relative !cursor-pointer'>
                            <img className='w-full rounded-xl cursor-pointer' src={image} onClick={() => openModal(image)} alt="" />
                            <div className="layer absolute w-full h-full top-0 left-0 !cursor-pointer bg-[#1abc9c] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex justify-center items-center">
                                <i className='fa-solid fa-plus text-8xl text-white'></i>
                            </div>
                        </div>
                        </>
                    ))}
                </div> */}
            </div>
        </div>
        {/* {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <img src={currentImage} alt="Modal Content" className="max-w-full max-h-screen rounded-lg" />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )} */}
        <div className='bg-[#2c3e50] w-full h-64'>
            <div className='w-11/12 m-auto pt-16'>
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