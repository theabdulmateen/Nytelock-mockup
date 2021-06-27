import Image from 'next/image'
import React, { useRef, useEffect } from 'react'

import QuoteButton from './QuoteButton'
import { ReactComponent as Two } from '../assets/two.svg'

const isBrowser = typeof window !== 'undefined'

const getCurrentPosition = () => {
	if (!isBrowser) return { x: 0, y: 0 }

	return { x: window.scrollX, y: window.scrollY }
}

const useScrollEffect = ({ effect }) => {
	const position = useRef(getCurrentPosition())

	useEffect(() => {
		const handeScroll = () => {
			const currPos = getCurrentPosition()
			effect({ prevPos: position.current, currPos })
			position.current = currPos
		}

		if (isBrowser) {
			window.addEventListener('scroll', handeScroll)
		}

		return () => window.addEventListener('scroll', handeScroll)
	}, [])
}

export default function Header() {
	const navRef = useRef()

	useScrollEffect({
		effect: ({ prevPos, currPos }) => {
			if (navRef.current && prevPos.y > currPos.y) {
				// console.log('scrolled up')
				navRef.current.style.transform = 'translateY(0px)'
			} else {
				// console.log('scrolled down')
				navRef.current.style.transform = 'translateY(-100%)'
			}
		},
	})

	return (
		<header
			className="flex fixed min-w-full top-0 z-50 h-32 sm:h-32 md:h-28 lg:h-20 xl:h-24 2xl:h-32 bg-white nav-transition"
			ref={navRef}
		>
			<nav className="w-full md:px-28 sm:px-5 flex items-center text-gray-800">
				<div className="mr-auto">
					<div>
						<h1 className="">
							<Image src="/logo.jpg" alt="logo" width={300} height={100} />
						</h1>
					</div>
				</div>
				<ul
					className="mx-10 hidden xl:flex flex-wrap sm:gap-8 gap-3 text-gray-600 uppercase text-sm"
					style={{ letterSpacing: '0.1875rem' }}
				>
					<li className="cursor-pointer hover:underline">
						<a to="/">Home</a>
					</li>
					<li className="cursor-pointer hover:underline">
						<a to="/">About</a>
					</li>
					<li className="cursor-pointer hover:underline">
						<a to="/">Services</a>
					</li>
					<li className="cursor-pointer hover:underline">
						<a to="/">Portfolio</a>
					</li>
					<li className="cursor-pointer hover:underline">
						<a to="/">Blog</a>
					</li>
					<li className="cursor-pointer hover:underline">
						<a to="/">Contact</a>
					</li>
					<li className="cursor-pointer hover:underline">
						<a to="/">Get a Quote</a>
					</li>
				</ul>
				<div className="ml-auto flex items-center justify-center">
					<div className="self-center md:self-start hidden lg:block">
						<button className="flex items-center bg-[#FFCC29] transition-colors duration-300 ease-out hover:text-white hover:underline pl-8 pr-2 py-2 rounded-full text-xl font-semibold shadow-outset">
							Get a Quote
							<span className="float-right ml-5 bg-white !text-black rounded-full p-2.5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
									/>
								</svg>
							</span>
						</button>
					</div>
					<div className="ml-10 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
				</div>
			</nav>
		</header>
	)
}
