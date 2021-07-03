import React from 'react'

export default function QuoteButton() {
	return (
		<button className="relative overflow-hidden z-[20] group flex items-center bg-[#FFCC29] hover:text-white hover:underline pl-8 pr-2 py-2 rounded-full text-xl font-semibold shadow-outset transition-overlay">
			<div className="absolute left-0 z-[-200] h-full w-full -translate-x-full bg-white transition-overlay opacity-50 group-hover:w-full group-hover:translate-x-0 group-hover:opacity-30" />
			Get a Quote
			<span className="float-right ml-5 bg-white !text-black rounded-full p-2.5">
				<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
					<path
						fillRule="evenodd"
						d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</span>
		</button>
	)
}
