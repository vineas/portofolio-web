import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    return (
        <>
            <div className='bg-gray-900 sticky top-0'>
                <div className='text-white w-11/12 md:container mx-auto py-4 flex justify-between items-center'>
                    <h2 className='text-3xl font-bold'><Link href={"/"}>VineasWeb</Link></h2>
                    <ul className='menu hidden md:flex bg-gray-900 '>
                        <li className='px-7 py-1 hover:text-gray-500'><Link href={"#services"}>Skills</Link></li>
                        <li className='px-7 py-1 hover:text-gray-500'><Link href={"#portofolio"}>Portofolio</Link></li>
                        <li className='px-7 py-1 hover:text-gray-500'><Link href={"#about"}>About</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
