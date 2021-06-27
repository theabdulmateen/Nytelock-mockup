import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'

export default function Home() {

  return (
    <main className='select-none'>
      <Header />

      <section className='grid place-items-center mt-20 p-10'>
        <div className='bg-[#3D3D3D] w-full h-96 rounded-2xl py-32 px-12'>
          <div>
            <div className='highlighter relative ml-[25px] text-[#FFCC29] uppercase font-semibold tracking-widest'>
              What services do we offer?
            </div>

            <div className='text-4xl text-white font-medium mt-5'>
              Stand Out From The Rest With Professional Branding
            </div>
          </div>

          <div>
            <button>Get a Quote</button>
          </div>
        </div>
      </section>
    </main>
  )
}
