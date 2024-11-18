import Link from 'next/link'
import React from 'react'

const Portofolio = () => {
    return (
        <div id='portofolio' className='py-20 bg-white'>
            <div className="mb-12">
                <h3 className='text-5xl font-bold text-center mb-3'>Portofolio</h3>
                <p className='text-gray-500 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, veritatis.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 w-11/12 md:container mx-auto gap-8'>
                {/* portofolio card 1 */}
                <div className='shadow-xl'>
                    <Link href={"/"}>
                        <img src="https://placehold.co/600x400" className='w-full' />

                        <div className='py-3 px-5'>
                            <h4 className='text-center font-bold'>Website 1</h4>
                        </div>
                    </Link>
                </div>
                {/* portofolio card 2 */}
                <div className='shadow-xl'>
                    <Link href={"/"}>
                        <img src="https://placehold.co/600x400" className='w-full' />

                        <div className='py-3 px-5'>
                            <h4 className='text-center font-bold'>Website 2</h4>
                        </div>
                    </Link>
                </div>
                {/* portofolio card 3 */}
                <div className='shadow-xl'>
                    <Link href={"/"}>
                        <img src="https://placehold.co/600x400" className='w-full' />

                        <div className='py-3 px-5'>
                            <h4 className='text-center font-bold'>Website 3</h4>
                        </div>
                    </Link>
                </div>
                {/* portofolio card 4 */}
                <div className='shadow-xl'>
                    <Link href={"/"}>
                        <img src="https://placehold.co/600x400" className='w-full' />

                        <div className='py-3 px-5'>
                            <h4 className='text-center font-bold'>Website 4</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portofolio
