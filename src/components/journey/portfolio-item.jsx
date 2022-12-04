function PortfolioItem({ title, description, stack, link }) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="border-secondary overflow-hidden rounded-lg border-2 transition duration-300 ease-linear hover:scale-95 hover:border-accent"
		>
			<div className="w-full p-4">
				<h3 className="mb-2 text-lg font-semibold md:mb-3 md:text-xl ">{title}</h3>

				<p className="text-primary my-3 text-xs">{description}</p>

				<p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm ">
					{stack.map((item, index) => (
						<span key={index} className="inline-block rounded-md border-2 border-accent px-2 py-1 font-semibold">
							{item}
						</span>
					))}
				</p>
			</div>
		</a>
	);
}

export default PortfolioItem;
