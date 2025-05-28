const HitsCard = ({ image, title }) => {
	return (
		<div
			className=' bg-gray-600 rounded-2xl relative grow-1/3 aspect-square overflow-hidden bg-center bg-cover flex items-end justify-center'
			style={{
				backgroundImage: `url(${
					typeof image === 'string' ? image : image.default || image
				})`,
			}}
		>
			{/* {image && (
				<img className='w-full inset-0 absolute' src={image} alt={title} />
			)} */}
			<div className='bg-[url({image})] inset-0 absolute'></div>
			<div className='absolute inset-0 bg-black/40'></div>
			<div className='mb-2 xs:mb-8 z-10'>
				<h3 className='text-center text-lg xs:text-3xl text-(--color-white)'>
					{title}
				</h3>
			</div>
		</div>
	)
}

export default HitsCard
