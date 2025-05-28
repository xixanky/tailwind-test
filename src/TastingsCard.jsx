const TastingsCard = ({ image, title, description }) => {
	return (
		<div className='flex flex-col items-center gap-4 min-w-[15rem] sm:min-w-0'>
			<div
				className='w-full aspect-square bg-cover bg-center rounded-full'
				style={{
					backgroundImage: `url(${
						typeof image === 'string' ? image : image.default || image
					})`,
				}}
			></div>
			<h3 className='text-3xl'>{title}</h3>
			<p className='text-center text-lg text-(--color-darkgray-text) font-semibold'>
				{description}
			</p>
		</div>
	)
}

export default TastingsCard
