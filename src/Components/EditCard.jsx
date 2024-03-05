import React, { useRef, useState, useEffect } from 'react';

function EditCard({ onSaveClick }) {
    const [isLoading, setIsLoading] = useState(true); // State variable to track loading
    const [image, setImage] = useState("/vite.svg");
    const fileInputRef = useRef(null);

    // Simulate loading effect with useEffect
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Simulating a 2 second loading time

        return () => clearTimeout(timeout);
    }, []); // Run only once on component mount

    // Function to handle image change
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setImage(e.target.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <>
            {isLoading ? (
                <div className="loader text-white">Loading...</div>
            ) : (
                <div>
                     <div className='flex justify-end pb-4 ' onClick={onSaveClick}>
                        <button className='px-4 py-2 bg-[#22c55e] text-white rounded-lg'>
                            Save
                        </button>
                    </div>
                    <div className="block w-full md:max-w-[700px]  md:max-h-[340px] py-4 backdrop-blur-lg bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20">
                        <div className='grid grid-cols-12 space-x-4 items-center'>
                            <div className='col-span-12 md:col-span-5 lg:col-span-5'>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        {/* Display uploaded image */}
                                        <img className="rounded w-40 cursor-pointer hover:opacity-50 duration-200 ease-in-out" src={image} alt="" onClick={() => fileInputRef.current.click()} />
                                        {/* Hidden label to trigger file input */}
                                        <label className="hidden">
                                            <input ref={fileInputRef} type="file" onChange={handleImageChange} accept="image/*" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="border-l h-full opacity-40"></div>
                            <div className='col-span-12 md:col-span-6 lg:col-span-6 flex justify-start max-w-[314px] mt-3 md:mt-0 '>
                                <div className='space-y-3 px-2'>
                                    <div className='flex items-center space-x-4'>
                                        <span className='bg-transparent border px-[13px] py-2 border-white rounded-full text-white hover:bg-white hover:text-[#333] duration-200 ease-in-out'>
                                            <i className="fa-solid fa-user"></i>
                                        </span>

                                        <div className=''>
                                            <input type="text" className="text-white w-full text-lg bg-transparent border-none outline-none" defaultValue="CA ONE AG" />

                                            <input type="text" className="text-white w-full text-md bg-transparent border-none outline-none" defaultValue="Aldo Luck" />
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-4'>
                                        <span className='bg-transparent border px-3 py-2  border-white rounded-full text-white hover:bg-white hover:text-[#333] duration-200 ease-in-out'>
                                            <i className="fa-solid fa-phone"></i>
                                        </span>
                                        {/* Editable input for phone */}
                                        <input type="text" className="text-white w-full text-md bg-transparent border-none outline-none" defaultValue="123456789012" />
                                    </div>
                                    <div className='flex items-center space-x-4'>
                                        <span className='bg-transparent border px-3 py-2 border-white rounded-full text-white hover:bg-white hover:text-[#333] duration-200 ease-in-out'>
                                            <i className="fa-solid fa-globe"></i>
                                        </span>
                                        {/* Editable input for email and website */}
                                        <div>
                                            <input type="email" className="text-white w-full text-md bg-transparent border-none outline-none" defaultValue="mail@pascalheimlicher.com" />
                                            <input type="url" className="text-white w-full text-sm bg-transparent border-none outline-none " defaultValue="http://www.caoneag.com" />
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-4 max-w-[300px]'>
                                        <span className='bg-transparent border px-[14px] py-2 border-white rounded-full text-white hover:bg-white hover:text-[#333] duration-200 ease-in-out'>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </span>
                                        {/* Editable input for address */}
                                        <textarea
                                            rows="2"
                                            className="text-white w-full text-md bg-transparent border-none outline-none max-w-[300px]">
                                            Sonnenbergstrasse 74, 8603 Schwerzenbach, Switzerland
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default EditCard;
