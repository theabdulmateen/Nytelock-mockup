import { useState } from 'react'
import Fade from 'react-reveal/Fade'
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
		<main className="subpixel-antialiased select-none">
			<Header />

			<section className="grid p-10 mt-20 place-items-center sm:px-4 4xl:px-36">
				<div className="bg-[#3D3D3D] rounded-2xl w-full py-32 px-8 sm:px-12 md:px-12 lg:px-24 xl:px-48">
					<div className="flex flex-col xl:flex-row">
						<div className="max-w-[600px] font-sans mr-auto">
							<div className="highlighter relative ml-[25px] text-[#FFCC29] uppercase font-semibold tracking-widest">
								What services do we offer?
							</div>

							<div className="mt-5 text-4xl font-medium tracking-wider text-white">
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

			<section className="container relative px-40 mx-auto sm:px-4 md:px-8 xl:px-40 2xl:px-80">
				<Fade when={active === 0} exit={false}>
					<div className="absolute grid grid-cols-1 gap-20 mb-20 lg:grid-cols-2">
						<article className="">
							<h1 className="mb-5 text-5xl font-black tracking-wide">Creative Design and Branding</h1>
							<p className="tracking-wider text-gray-700">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries
							</p>
							<ul className="my-5 ml-10 font-semibold text-gray-900 list-disc">
								<li>Logos</li>
								<li>Business Cards</li>
								<li>Labels & packagings</li>
								<li>Stickers</li>
								<li>Flyers</li>
							</ul>
							<p className="tracking-wider text-gray-700">
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
								className="w-full rounded-2xl"
							/>
						</div>
					</div>
				</Fade>

				<Fade when={active === 1} exit={false}>
					<div className="absolute grid grid-cols-1 gap-20 mb-20 lg:grid-cols-2">
						<article className="">
							<h1 className="mb-5 text-5xl font-black tracking-wide">1-on-1 Brand Consultancy</h1>
							<p className="tracking-wider text-gray-700">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has survived not only five
								centuries
							</p>
							<ul className="my-5 ml-10 font-semibold text-gray-900 list-disc">
								<li>Business Cards</li>
								<li>Labels & packagings</li>
								<li>Stickers</li>
								<li>Flyers</li>
							</ul>
							<p className="tracking-wider text-gray-700">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries
							</p>
						</article>
						<div>
							<Image
								src="https://picsum.photos/seed/pog/500/600"
								alt="dank image"
								width={500}
								height={600}
								className="w-full rounded-2xl"
							/>
						</div>
					</div>
				</Fade>

				<Fade when={active === 2} exit={false}>
					<div className="absolute grid grid-cols-1 gap-20 mb-20 lg:grid-cols-2">
						<article className="">
							<h1 className="mb-5 text-5xl font-black tracking-wide">Web Design & Development</h1>
							<p className="tracking-wider text-gray-700">
								Lorem Ipsum is simply standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries Lorem, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing
								elit. Dolorem adipisci repudiandae perferendis quidem culpa sequi quam ducimus natus
								dicta nihil.
							</p>
							<ul className="my-5 ml-10 font-semibold text-gray-900 list-disc">
								<li>E commerce Websites</li>
								<li>Standard Websites</li>
								<li>Professional landing pages</li>
								<li>Portfolios</li>
								<li>Mobile App UIUX</li>
							</ul>
							<p className="tracking-wider text-gray-700">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries
							</p>
						</article>
						<div>
							<Image
								src="https://picsum.photos/seed/ppPoof/500/600"
								alt="dank image"
								width={500}
								height={600}
								className="w-full rounded-2xl"
							/>
						</div>
					</div>
				</Fade>

				<Fade when={active === 3} exit={false}>
					<div className="absolute grid grid-cols-1 gap-20 mb-20 lg:grid-cols-2">
						<article className="">
							<h1 className="mb-5 text-5xl font-black tracking-wide">
								Digital Marketing & Lead Generation
							</h1>
							<p className="tracking-wider text-gray-700">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries
							</p>
							<ul className="my-5 ml-10 font-semibold text-gray-900 list-disc">
								<li>Logos</li>
								<li>Business Cards</li>
								<li>Labels & packagings</li>
								<li>Stickers</li>
								<li>Flyers</li>
							</ul>
							<p className="tracking-wider text-gray-700">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries
							</p>
						</article>
						<div>
							<Image
								src="https://picsum.photos/seed/5Head/500/600"
								alt="dank image"
								width={500}
								height={600}
								className="w-full rounded-2xl"
							/>
						</div>
					</div>
				</Fade>

				<Fade when={active === 4} exit={false}>
					<div className="absolute grid grid-cols-1 gap-20 mb-20 lg:grid-cols-2">
						<article className="">
							<h1 className="mb-5 text-5xl font-black tracking-wide">Video Production & Editing</h1>
							<p className="tracking-wider text-gray-700">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries
							</p>
							<p className="tracking-wider text-gray-700">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries
							</p>
							<ul className="my-5 ml-10 font-semibold text-gray-900 list-disc">
								<li>Logos</li>
								<li>Business Cards</li>
								<li>Labels & packagings</li>
								<li>Stickers</li>
								<li>Flyers</li>
							</ul>
						</article>
						<div>
							<Image
								src="https://picsum.photos/seed/ezclap/500/600"
								alt="dank image"
								width={500}
								height={600}
								className="w-full rounded-2xl"
							/>
						</div>
					</div>
				</Fade>

				<Fade when={active === 5} exit={false}>
					<div className="absolute grid grid-cols-1 gap-20 mb-20 lg:grid-cols-2">
						<article className="">
							<h1 className="mb-5 text-5xl font-black tracking-wide">Professional Photo Editing</h1>
							<p className="tracking-wider text-gray-700">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries
							</p>
							<ul className="my-5 ml-10 font-semibold text-gray-900 list-disc">
								<li>Logos</li>
								<li>Business Cards</li>
								<li>Labels & packagings</li>
								<li>Stickers</li>
								<li>Flyers</li>
							</ul>
							<p className="tracking-wider text-gray-700">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries
							</p>
						</article>
						<div>
							<Image
								src="https://picsum.photos/seed/lorem/500/600"
								alt="dank image"
								width={500}
								height={600}
								className="w-full rounded-2xl"
							/>
						</div>
					</div>
				</Fade>

				<Fade when={active === 6} exit={false}>
					<div className="absolute grid grid-cols-1 gap-20 mb-20 lg:grid-cols-2">
						<article className="">
							<h1 className="mb-5 text-5xl font-black tracking-wide">Creative Design and Branding</h1>
							<p className="tracking-wider text-gray-700">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries
							</p>
							<ul className="my-5 ml-10 font-semibold text-gray-900 list-disc">
								<li>Logos</li>
								<li>Business Cards</li>
								<li>Labels & packagings</li>
								<li>Stickers</li>
								<li>Flyers</li>
							</ul>
							<p className="tracking-wider text-gray-700">
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
								className="w-full rounded-2xl"
							/>
						</div>
					</div>
				</Fade>
			</section>
		</main>
	)
}
