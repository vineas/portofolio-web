import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
    return (
        <div id="services" className='bg-gray-200 py-20'>
            <div className='w-11/12 md:container mx-auto'>
                <h3 className='text-5xl font-bold text-center mb-5'>Skills</h3>
                <p className='text-gray-500 text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore illum autem ex!</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* services card */}
                    <div className='flex space-x-5 py-8 px-8 bg-white rounded-xl items-start'>
                        <img src="https://placehold.co/100" alt="services" />
                        <div className=''>
                            <h5 className='text-2xl font-bold mb-5'>Data Analytics</h5>
                            <p className='text-gray-500 mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam minima ea assumenda soluta eius ipsam, aperiam iure vero hic.</p>
                            <Link href={"/"} className='hover:text-gray-500'> read more</Link>
                        </div>
                    </div>                    
                    {/* services card 2 */}
                    <div className='flex space-x-5 py-8 px-8 bg-white rounded-xl items-start'>
                        <img src="https://placehold.co/100" alt="services" />
                        <div className=''>
                            <h5 className='text-2xl font-bold mb-5'>Social Media Asisstant</h5>
                            <p className='text-gray-500 mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam minima ea assumenda soluta eius ipsam, aperiam iure vero hic.</p>
                            <Link href={"/"} className='hover:text-gray-500'> read more</Link>
                        </div>
                    </div>              
                    {/* services card 3*/}
                    <div className='flex space-x-5 py-8 px-8 bg-white rounded-xl items-start'>
                        <img src="https://placehold.co/100" alt="services" />
                        <div className=''>
                            <h5 className='text-2xl font-bold mb-5'>Developer & Maintanance</h5>
                            <p className='text-gray-500 mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam minima ea assumenda soluta eius ipsam, aperiam iure vero hic.</p>
                            <Link href={"/"} className='hover:text-gray-500'> read more</Link>
                        </div>
                    </div>    
                    {/* services card 4*/}
                    <div className='flex space-x-5 py-8 px-8 bg-white rounded-xl items-start'>
                        <img src="https://placehold.co/100" alt="services" />
                        <div className=''>
                            <h5 className='text-2xl font-bold mb-5'>24/7 Protection</h5>
                            <p className='text-gray-500 mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam minima ea assumenda soluta eius ipsam, aperiam iure vero hic.</p>
                            <Link href={"/"} className='hover:text-gray-500'> read more</Link>
                        </div>
                    </div>                                                                                  
                </div>
            </div>
        </div>
    )
}

export default Services
