import React from 'react'

function Card({ onEditClick }) {
    return (
        <>

            <div className='flex justify-end pb-4 ' onClick={onEditClick}>

                <button className='px-4 py-2 bg-[#22c55e] text-white rounded-lg'>
                    Edit
                </button>
            </div>
            <div

                className="block md:min-w-[700px]  md:max-h-[340px] py-4 backdrop-blur-lg bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20"
            >
                <div className='grid grid-cols-12 space-x-4 items-center '>
                    <div className='col-span-12 md:col-span-5 lg:col-span-5'>
                        <div className='text-center'>
                            <div className='flex justify-center'>
                                <img className="rounded w-44" src="/vite.svg" alt="" />
                            </div>

                        </div>

                    </div>
                    <div className="border-l h-full opacity-40"></div>

                    <div className='col-span-12 md:col-span-6 lg:col-span-6 flex justify-start '>

                        <div className='space-y-3 px-2'>
                            <div className='flex items-center space-x-4'>
                                <span className='bg-transparent border px-[13px] py-2 border-white rounded-full text-white hover:bg-white hover:text-[#333] duration-200 ease-in-out'> <i className="fa-solid fa-user "></i></span>
                                <div>
                                    <h2 className='text-white text-lg  '>CA ONE AG</h2>
                                    <h2 className='text-white text-md  '>Aldo Luck</h2>

                                </div>


                            </div>


                            <div className='flex items-center space-x-4'>
                                <span className='bg-transparent border px-3 py-2 border-white rounded-full text-white hover:bg-white hover:text-[#333] duration-200 ease-in-out'> <i className="fa-solid fa-phone"></i></span>
                                <h2 className='text-white text-md  '>123456789012</h2>


                            </div>


                            <div className='flex items-center space-x-4'>
                                <span className='bg-transparent border px-3 py-2 border-white rounded-full text-white hover:bg-white hover:text-[#333] duration-200 ease-in-out'> <i className="fa-solid fa-globe"></i></span>
                                <div>
                                    <h2 className='text-white text-md  '>mail@pascalheimlicher.com</h2>
                                    <a className='text-white text-sm mt-3 hover:underline ' href="#">http://www.caoneag.com</a>
                                </div>



                            </div>


                            <div className='flex items-center space-x-4 max-w-[300px]'>
                                <span className='bg-transparent border px-[14px] py-2 border-white rounded-full text-white hover:bg-white hover:text-[#333] duration-200 ease-in-out'> <i className="fa-solid fa-location-dot"></i></span>
                                <div>
                                    <h2 className='text-white text-md  '>Sonnenbergstrasse 74, 8603 Schwerzenbach , Switzerland
                                    </h2>

                                </div>



                            </div>
                        </div>


                    </div>
                </div>
            </div>






        </>


    )
}

export default Card
