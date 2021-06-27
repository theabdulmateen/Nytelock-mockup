import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <header className='relative flex h-32 sm:h-32 md:h-28 lg:h-20 xl:h-24 2xl:h-32 bg-red-400'>
            <nav
                className='w-full md:px-28 sm:px-5 flex items-center text-gray-800'
            >
                <div className='mr-auto'>
                    <div>
                        <h1 className=''>
                            <Image src='/logo.jpg' alt='logo' width={300} height={100} />
                        </h1>
                    </div>
                </div>
                <ul
                    className='mx-10 hidden xl:flex flex-wrap sm:gap-8 gap-3 text-gray-600 uppercase text-sm'
                    style={{ letterSpacing: '0.1875rem' }}>
                    <li>
                        <a to='/'>Home</a>
                    </li>
                    <li>
                        <a to='/'>About</a>
                    </li>
                    <li>
                        <a to='/'>Services</a>
                    </li>
                    <li>
                        <a to='/'>Portfolio</a>
                    </li>
                    <li>
                        <a to='/'>Blog</a>
                    </li>
                    <li>
                        <a to='/'>Contact</a>
                    </li>
                    <li>
                        <a to='/'>Get a Quote</a>
                    </li>
                </ul>
                <div className='ml-auto'>
                    <div>
                        <h1 className=''>
                            search
                        </h1>
                    </div>
                </div>
                {/* <button
            className='ml-auto xl:hidden w-6 h-6 focus:outline-none'>
            s
          </button> */}
            </nav>
        </header>
    )
}
