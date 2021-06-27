import { useState } from 'react'
import Image from 'next/image'
import Carousel from 'react-elastic-carousel'

import { ReactComponent as One } from '../assets/one.svg'
import { ReactComponent as Two } from '../assets/two.svg'
import { ReactComponent as Three } from '../assets/three.svg'
import { ReactComponent as Four } from '../assets/four.svg'
import { ReactComponent as Five } from '../assets/five.svg'
import { ReactComponent as Six } from '../assets/six.svg'

import Header from '../components/Header'
import QuoteButton from '../components/QuoteButton'

const services = [
	{
		id: 0,
		title: 'Creative Branding & Design',
		icon: One,
	},
	{
		id: 1,
		title: '1-on-1 Brand Consultancy',
		icon: Two,
	},
	{
		id: 2,
		title: 'Web Design & Development',
		icon: Three,
	},
	{
		id: 3,
		title: 'Digital Marketign & Lead Generation',
		icon: Four,
	},
	{
		id: 4,
		title: 'Video Production & Editing',
		icon: Five,
	},
	{
		id: 5,
		title: 'Professional Photo Editing',
		icon: Six,
	},
]

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 250, itemsToShow: 1 },
	{ width: 450, itemsToShow: 2 },
	{ width: 550, itemsToShow: 2 },
	{ width: 650, itemsToShow: 3 },
	{ width: 700, itemsToShow: 3 },
	{ width: 850, itemsToShow: 4 },
	{ width: 900, itemsToShow: 5 },
	{ width: 1280, itemsToShow: 6 },
]

export default function Home() {
	const [ active, setActive ] = useState(0)

	return (
		<main className="select-none subpixel-antialiased">
			<Header />

			<section className="grid place-items-center mt-20 p-10 sm:px-4 4xl:px-36">
				<div className="bg-[#3D3D3D] rounded-2xl w-full py-32 px-8 sm:px-12 md:px-12 lg:px-24 xl:px-48">
					<div className="flex flex-col xl:flex-row">
						<div className="max-w-[600px] font-sans mr-auto">
							<div className="highlighter relative ml-[25px] text-[#FFCC29] uppercase font-semibold tracking-widest">
								What services do we offer?
							</div>

							<div className="text-4xl tracking-wider text-white font-medium mt-5">
								Stand Out From The Rest With Professional Branding
							</div>
						</div>

						<div className="self-center mt-10 md:self-start">
							<QuoteButton />
						</div>
					</div>

					<div className="overflow-hidden mt-20 mx-[-30px]">
						<Carousel showArrows={false} breakPoints={breakPoints} className="">
							{services.map((service, index) => {
								const Icon = service.icon

								return (
									<button
										key={service.id}
										className={
											service.id === active ? 'carousel-item carousel-active' : 'carousel-item'
										}
										onClick={() => setActive(service.id)}
									>
										<span
											className={
												service.id === active ? (
													'carousel-icon carousel-icon-active'
												) : (
													'carousel-icon'
												)
											}
										>
											<Icon width={40} height={40} className="transition-all" />
										</span>
										{service.title}
									</button>
								)
							})}
						</Carousel>
					</div>
				</div>
			</section>

			<section className="container mx-auto px-40 sm:px-4 md:px-8 xl:px-40 2xl:px-80">
				<div className="">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
						<article className="">
							<h1 className="text-5xl font-black mb-5 tracking-wide">Creative Design and Branding</h1>
							<p className="text-gray-700 tracking-wider">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries
							</p>
							<ul className="text-gray-900 font-semibold list-disc ml-10 my-5">
								<li>Logos</li>
								<li>Business Cards</li>
								<li>Labels & packagings</li>
								<li>Stickers</li>
								<li>Flyers</li>
							</ul>
							<p className="text-gray-700 tracking-wider">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries
							</p>
						</article>
						<div>
							<Image
								src="https://source.unsplash.com/random"
								alt="dank image"
								width={500}
								height={600}
								className="rounded-2xl w-full"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
