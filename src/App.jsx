import { useEffect, useState } from 'react'
import './App.css'
import HitsCard from './HitsCard'
import TastingsCard from './TastingsCard'

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 24,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prevTime => {
				const { days, hours, minutes, seconds } = prevTime

				if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
					clearInterval(timer)
					return prevTime
				}

				let newSeconds = seconds - 1
				let newMinutes = minutes
				let newHours = hours
				let newDays = days

				if (newSeconds < 0) {
					newSeconds = 59
					newMinutes -= 1
				}

				if (newMinutes < 0) {
					newMinutes = 59
					newHours -= 1
				}

				if (newHours < 0) {
					newHours = 23
					newDays -= 1
				}

				return {
					days: newDays,
					hours: newHours,
					minutes: newMinutes,
					seconds: newSeconds,
				}
			})
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	// Форматирование чисел (добавляем ведущий ноль)
	const formatNumber = num => num.toString().padStart(2, '0')

	const hitsCardsData = [
		{
			image: '/src/assets/tanzania.webp',
			title: 'Роллы "Танзания"',
		},
		{
			image: '/src/assets/islands.webp',
			title: 'Суп "Острова"',
		},
		{
			image: '/src/assets/dream.webp',
			title: 'Роллы "Мечта"',
		},
		{
			image: '/src/assets/space.webp',
			title: 'Суши "Космос"',
		},
		{
			image: '/src/assets/tokio.webp',
			title: 'Сет "Токио"',
		},
	]
	const tastingsCardsData = [
		{
			image: '/src/assets/tanzania.webp',
			title: 'Десерты',
			description: 'Десерты по собственным рецептам.',
		},
		{
			image: '/src/assets/islands.webp',
			title: 'Бар',
			description: 'Широкий ассортимент и постоянные акции.',
		},
		{
			image: '/src/assets/dream.webp',
			title: 'Детское меню',
			description: 'Детское меню отличается полезностью и особой подачей.',
		},
		{
			image: '/src/assets/space.webp',
			title: 'Бургеры',
			description: 'Широкий ассортимент и постоянные акции.',
		},
	]

	return (
		<>
			<div className='flex flex-col items-center'>
				<header className='bg-(--color-main) flex justify-between px-10 py-7 w-full'>
					<div className='text-(--color-accent) font-bold text-3xl flex items-center gap-2'>
						<svg
							height='36px'
							width='36px'
							version='1.1'
							id='_x32_'
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
							viewBox='0 0 512.00 512.00'
							xmlSpace='preserve'
							fill='#e71d36'
						>
							<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
							<g
								id='SVGRepo_tracerCarrier'
								strokeLinecap='round'
								strokeLinejoin='round'
								stroke='#CCCCCC'
								strokeWidth='2.048'
							></g>
							<g id='SVGRepo_iconCarrier'>
								{' '}
								<style type='text/css'> fill:#e71d36 </style>{' '}
								<g>
									{' '}
									<path
										className='st0'
										d='M170.362,210.367c17.446-7.278,39.21-16.595,61.009-25.911c64.49-27.559,91.827-39.06,102.643-41.857 c16.021-4.14,32.671-6.242,49.507-6.242c1.148,0,2.241,0.037,3.352,0.046l-0.666-0.722L325.828,77.71 c-9.631-9.251-19.318-11.344-36.042-13.4c0,0-26.447-5.315-59.1,3.111c-12.891,3.334-101.106,42.117-151.65,63.185 c-50.543,21.068-68.12,56.527-68.12,56.527c-8.76,15.085-10.482,20.697-10.871,30.884c-0.371,10.205,1.574,15.456,8.945,22.522 l53.286,51.164c3.278,3.14,7,5.538,10.964,7.196c1.889-3.834,4.056-7.807,6.556-12.122 C84.943,277.163,110.058,235.482,170.362,210.367z'
									></path>{' '}
									<path
										className='st0'
										d='M506,236.407l-65.676-63.045c-10.482-10.066-21.002-12.335-39.19-14.586c0,0-28.781-5.779-64.286,3.389 c-14.038,3.631-109.978,45.822-164.967,68.732c-54.989,22.92-74.102,61.481-74.102,61.481 c-9.52,16.418-11.408,22.512-11.816,33.597c-0.389,11.094,1.722,16.817,9.724,24.503l57.971,55.656 c14.298,13.715,36.616,14.53,51.877,1.88c0,0,0.315-0.556,0.852-1.361c4.353,4.019,8.594,7.899,12.428,11.372 c5.204,4.714,9.778,8.797,13.428,11.946c1.815,1.574,3.408,2.917,4.778,4.019c1.407,1.129,2.426,1.945,3.797,2.815 c3.315,2.046,7.927,5.139,13.724,7.76c5.816,2.621,12.965,4.788,21.207,4.778c6.5,0.01,13.558-1.352,20.872-4.473l0.093-0.037 l120.183-54.423c7.872-3.344,14.261-6.464,19.633-9.974c4.037-2.649,7.556-5.566,10.427-8.982 c4.352-5.122,6.908-11.27,8.094-17.512c1.204-6.298,1.37-12.798,1.389-20.411c0-4.741-0.093-9.918-0.112-15.705l-0.203-46.877 c14.631-2.908,37.412-1.028,37.412-1.028c7.76-0.407,14.52-5.389,17.242-12.658C513.483,249.984,511.612,241.788,506,236.407z M435.046,348.645c-0.445,2.787-1.056,4.788-1.852,6.436c-1.222,2.426-2.852,4.473-6.63,7.205 c-3.76,2.676-9.594,5.731-17.947,9.232l-0.111,0.046l-119.998,54.35c-4.964,2.093-9.076,2.796-12.761,2.806 c-4.668,0-8.761-1.166-12.743-2.954c-3.945-1.778-7.612-4.158-11.242-6.436c-0.111-0.074-1.018-0.75-2.186-1.694 c-4.444-3.64-13.26-11.521-23.688-21.05c-2.204-2.028-4.63-4.269-6.983-6.426c12.873-14.9,35.116-35.774,67.528-49.294 c44.58-18.567,116.238-49.174,149.095-62.545l0.185,39.597c0.019,5.926,0.093,11.122,0.093,15.613 C435.824,339.95,435.62,344.959,435.046,348.645z'
									></path>{' '}
								</g>{' '}
							</g>
						</svg>
						<a href='#index.html'>Sushiworld</a>
					</div>
					<div className='hidden lg:flex items-center gap-7'>
						<nav>
							<ul className='flex gap-5'>
								<li className='text-(--color-gray-text) text-lg nav-hover'>
									<a href='#hits'>Хиты</a>
								</li>
								<li className='text-(--color-gray-text) text-lg nav-hover'>
									<a href='#tastings'>Дегустации</a>
								</li>
								<li className='text-(--color-gray-text) text-lg nav-hover'>
									<a href='#photo-report'>Фотоотчет</a>
								</li>
								<li className='text-(--color-gray-text) text-lg nav-hover'>
									<a href='#special-offers'>Акции</a>
								</li>
								<li className='text-(--color-gray-text) text-lg nav-hover'>
									<a href='#contacts'>Контакты</a>
								</li>
							</ul>
						</nav>
						<div className='hidden  flex-col'>
							<p className='text-(--color-gray-text) ml-auto text-sm'>Звони!</p>
							<p className='text-(--color-white) text-lg font-semibold select-all'>
								+7 495 123-45-67
							</p>
						</div>
						<button className='btn px-5 py-2.5'>Заказать суши</button>
					</div>
					<nav
						className='flex flex-col h-9 py-1 aspect-square justify-between lg:hidden relative cursor-pointer'
						id='burger'
						onClick={toggleMenu}
					>
						<span className='h-1 w-full bg-(--color-accent) rounded'></span>
						<span className='h-1 w-full bg-(--color-accent) rounded'></span>
						<span className='h-1 w-full bg-(--color-accent) rounded'></span>

						<div
							className={`flex flex-col absolute lg:hidden items-center gap-7 z-20 bg-(--color-main) right-[-40px] top-[64px] py-3 px-10 ${
								isMenuOpen ? '' : 'hidden'
							}`}
							id='menu'
						>
							<nav>
								<ul className='flex flex-col gap-5'>
									<li className='text-(--color-gray-text) text-lg'>
										<a href='#hits'>Хиты</a>
									</li>
									<li className='text-(--color-gray-text) text-lg'>
										<a href='#tastings'>Дегустации</a>
									</li>
									<li className='text-(--color-gray-text) text-lg'>
										<a href='#photo-report'>Фотоотчет</a>
									</li>
									<li className='text-(--color-gray-text) text-lg'>
										<a href='#special-offers'>Акции</a>
									</li>
									<li className='text-(--color-gray-text) text-lg'>
										<a href='#contacts'>Контакты</a>
									</li>
								</ul>
							</nav>
							<button className='btn px-5 py-2.5'>Заказать</button>
						</div>
					</nav>
				</header>
				<main className='flex flex-col items-center w-full'>
					<div className='w-full bg-[url(./assets/main.jpg)] bg-cover relative flex justify-center'>
						<div className='absolute inset-0 bg-black/40'></div>
						<div className='container flex-col mx-30 max-w-lg lg:max-w-none lg:mx-0 lg:flex-row flex z-10 items-center gap-10 lg:my-0 my-10'>
							<div className='flex-1 flex justify-center'>
								<div className='2xl:w-2/3 w-full flex flex-col gap-5'>
									<h1 className='font-bold text-5xl sm:text-7xl text-(--color-white)'>
										Лучшие суши в городе
									</h1>
									<p className='text-md sm:text-2xl text-(--color-gray-text)'>
										Готовим, подаем и доставляем лучшие суши 24/7
									</p>
								</div>
							</div>
							<div className='flex-1 flex justify-center my-0 lg:my-30'>
								<form
									action=''
									className='flex flex-col 2xl:w-4/5 w-full p-6 sm:p-10 bg-(--color-white) rounded-xl gap-3'
								>
									<p className='text-md sm:text-lg font-medium'>
										Забронируйте столик. Количество гостей и предварительный
										заказ мы уточним по телефону.
									</p>
									<input
										type='text'
										name='name'
										placeholder='Ваше имя'
										className='focus:outline-none text-md sm:text-lg placeholder-(--color-gray-text) border-(--color-border-input) rounded-md p-2 sm:p-3 border-2 focus:border-(--color-accent) transition-colors duration-300'
									/>
									<input
										type='email'
										name='email'
										placeholder='Электронная почта'
										className='focus:outline-none text-md sm:text-lg placeholder-(--color-gray-text) border-(--color-border-input) rounded-md p-2 sm:p-3 border-2 focus:border-(--color-accent) transition-colors duration-300'
									/>
									<input
										type='tel'
										name='phone'
										placeholder='Номер телефона'
										className='focus:outline-none text-md sm:text-lg placeholder-(--color-gray-text) border-(--color-border-input) rounded-md p-2 sm:p-3 border-2 focus:border-(--color-accent) transition-colors duration-300'
									/>
									<button type='submit' className='btn py-4 text-md sm:text-lg'>
										Забронировать столик
									</button>
								</form>
							</div>
						</div>
					</div>
					<section className='container flex flex-col items-center mt-10 sm:mt-30 gap-10'>
						<h1
							className='text-(--color-accent) font-bold text-3xl sm:text-6xl'
							id='hits'
						>
							Хиты от нашего шефа
						</h1>
						<p className='text-(--color-darkgray-text) text-lg sm:text-2xl '>
							Наше меню постоянно обновляется, не пропустите новинки!
						</p>
						<div className='w-full grid grid-cols-2 sm:grid-cols-3 justify-center gap-5 justify-center'>
							{hitsCardsData.map((card, index) => (
								<HitsCard key={index} image={card.image} title={card.title} />
							))}
						</div>
					</section>
					<section className='container flex flex-col items-center justify-start gap-10 mt-20 sm:mt-50'>
						<h1
							className='text-(--color-accent) font-bold text-3xl sm:text-6xl w-full sm:w-2/3 lg:w-1/2 text-center'
							id='tastings'
						>
							Мы - это не только суши!
						</h1>
						<p className='text-(--color-darkgray-text) text-2xl w-full sm:w-1/2 text-center'>
							В нашем меню разнообразно представлена не только японская кухня.
						</p>
						<div className='w-full flex overflow-x-scroll sm:overflow-visible sm:grid sm:grid-cols-4 gap-10'>
							{tastingsCardsData.map((card, index) => (
								<TastingsCard
									key={index}
									image={card.image}
									title={card.title}
									description={card.description}
								/>
							))}
						</div>
					</section>
					<section className='container flex-col sm:flex-row flex justify-between mt-20 gap-10 xs:mt-50'>
						<h1
							className='text-3xl sm:text-4xl lg:text-6xl font-bold w-full sm:w-1/3 lg:w-1/4'
							id=''
						>
							Для настоящих гурманов
						</h1>
						<p className='text-lg  w-full sm:w-1/2 text-(--color-darkgray-text) flex items-center'>
							Можно быть фанатом суши, можно быть новичком в этом виде японской
							еды — наше меню разработано таким образом, что каждый найдет
							что-то для себя. Мы постоянно эксперементируем с новыми рецептами,
							не забывая о классике. Приходите и насладитесь японской кухней
							высочайшего уровня. Welcome!
						</p>
					</section>
					<div className='w-full bg-[url(./assets/main.jpg)] bg-cover relative mt-20 sm:mt-50 flex justify-center '>
						<div className='absolute inset-0 bg-black/40'></div>
						<section className='container flex-col sm:flex-row flex z-10 items-center sm:items-start sm:justify-center gap-20 my-20'>
							<div className='flex flex-col gap-5'>
								<div className='bg-[url(./assets/dream.webp)] aspect-square w-[24vw] min-w-[15rem] bg-cover bg-center'></div>
								<div className='flex justify-center gap-4'>
									<div className='bg-[url(./assets/islands.webp)] aspect-square w-[4vw] min-w-[4rem] bg-cover bg-center rounded-xl hover:scale-110 transition-transform duration-100'></div>
									<div className='bg-[url(./assets/tokio.webp)] aspect-square w-[4vw] min-w-[4rem] bg-cover bg-center rounded-xl hover:scale-110 transition-transform duration-100'></div>
									<div className='bg-[url(./assets/space.webp)] aspect-square w-[4vw] min-w-[4rem] bg-cover bg-center rounded-xl hover:scale-110 transition-transform duration-100'></div>
								</div>
							</div>
							<div className='flex flex-col gap-4 w-full sm:w-1/3'>
								<h3 className='text-(--color-white) font-bold text-3xl'>
									Sushi дегустация
								</h3>
								<p className='text-(--color-white)'>
									Вы можете заказать дегустацию особого набора суши для большой
									компании от нашего шеф-повара.
								</p>
								<p className='text-(--color-white) text-lg'>990₽</p>
								<button className='btn py-3'>Узнать подробности</button>
							</div>
						</section>
					</div>
					<div className='w-full bg-(--color-accent) bg-cover relative flex justify-center '>
						<section className='container flex flex-col gap-7 items-center my-20'>
							<h1
								className='text-(--color-white) font-bold text-3xl sm:text-5xl text-center'
								id='photo-report'
							>
								Ищите себя на фото
							</h1>
							<p className='text-(--color-white) text-2xl text-center'>
								Мы регулярно публикуем фото с вечеринок и ивентов
							</p>
							<div className='flex overflow-x-scroll sm:overflow-x-visible sm:grid gap-7 sm:grid-cols-3 w-full my-7'>
								<div className='bg-[url(./assets/first-photo-report.webp)] h-[80vw] sm:h-auto aspect-square bg-cover bg-center rounded-xl hover:scale-95 transition-transform duration-100'></div>
								<div className='bg-[url(./assets/second-photo-report.webp)] h-[80vw] sm:h-auto aspect-square bg-cover bg-center rounded-xl hover:scale-95 transition-transform duration-100'></div>
								<div className='bg-[url(./assets/third-photo-report.webp)] h-[80vw] sm:h-auto aspect-square bg-cover bg-center rounded-xl hover:scale-95 transition-transform duration-100'></div>
							</div>
						</section>
					</div>
					<div
						className='w-full bg-[url(./assets/sushi.jpg)] bg-cover relative flex justify-center '
						id='special-offers'
					>
						<div className='absolute inset-0 bg-black/40'></div>
						<section className='container flex flex-col items-center z-10 gap-10 my-10 sm:my-40'>
							<h1 className='font-bold text-3xl sm:text-7xl text-(--color-white) text-center w-4/5'>
								Получи скидку на компанию от 10 человек
							</h1>
							<p className='text-2xl text-(--color-gray-text) text-center'>
								Вас много и вы любите суши? Тогда не теряйте времени и вперед за
								скидкой!
							</p>
							<div className='flex gap-3 sm:gap-10 justify-center'>
								<div className='flex flex-col'>
									<h1 className='font-bold text-3xl sm:text-6xl text-(--color-white) text-center'>
										{formatNumber(timeLeft.days)}
									</h1>
									<p className='text-xl text-(--color-gray-text) text-center'>
										день
									</p>
								</div>
								<div className='flex flex-col'>
									<h1 className='font-bold text-3xl sm:text-6xl text-(--color-white) text-center'>
										{formatNumber(timeLeft.hours)}
									</h1>
									<p className='text-xl text-(--color-gray-text) text-center'>
										часов
									</p>
								</div>
								<div className='flex flex-col'>
									<h1 className='font-bold text-3xl sm:text-6xl text-(--color-white) text-center'>
										{formatNumber(timeLeft.minutes)}
									</h1>
									<p className='text-xl text-(--color-gray-text) text-center'>
										минут
									</p>
								</div>
								<div className='flex flex-col'>
									<h1 className='font-bold text-3xl sm:text-6xl text-(--color-white) text-center'>
										{formatNumber(timeLeft.seconds)}
									</h1>
									<p className='text-xl text-(--color-gray-text) text-center'>
										секунд
									</p>
								</div>
							</div>
							<div className='flex-col sm:flex-row flex gap-4'>
								<input
									type='email'
									name='email'
									placeholder='Электронная почта'
									className='focus:outline-none text-lg placeholder-(--color-gray-text) border-(--color-border-input) rounded-md p-3 border-2 focus:border-(--color-accent) transition-colors duration-300 bg-(--color-white)'
								/>
								<button type='submit' className='btn py-4 px-8 text-lg'>
									Получить скидку
								</button>
							</div>
						</section>
					</div>
					<section className='container grid sm:grid-cols-2 sm:grid-rows-2 h-[60vh] gap-7 my-20'>
						<div className='w-full bg-[url(./assets/gallery-1.webp)] bg-cover bg-center relative rounded-2xl sm:row-span-2'></div>
						<div className='w-full bg-[url(./assets/gallery-2.webp)] bg-cover bg-center relative rounded-2xl'></div>
						<div className='w-full bg-[url(./assets/gallery-3.webp)] bg-cover bg-center relative rounded-2xl'></div>
					</section>
					<div className='w-full flex flex-col sm:flex-row bg-(--color-accent)'>
						<div className='flex-1/2 flex items-center justify-center py-5 sm:py-0 sm:justify-end'>
							<div className='flex flex-col items-center gap-5 sm:mr-40'>
								<h1
									className='font-bold text-(--color-white) text-3xl'
									id='contacts'
								>
									Welcome
								</h1>
								<div>
									<p className='text-(--color-gray-text) text-lg text-center'>
										+7 987 654-32-10
									</p>
									<p className='text-(--color-white) text-lg text-center'>
										info@constructor.ru
									</p>
								</div>
								<div>
									<p className='text-(--color-gray-text) text-lg text-center'>
										г. Москва, метро “Китай город”,
									</p>
									<p className='text-(--color-gray-text) text-lg text-center'>
										ул. Яузская, дом 15/11
									</p>
								</div>
							</div>
						</div>
						<div className='flex-1/2'>
							<iframe
								src='https://yandex.ru/map-widget/v1/?um=constructor%3A7a3632296604971632c5e7df6d335aa40a7838bc3df285c16fb3b79c6352feec&amp;source=constructor'
								width='100%'
								height='400'
								frameBorder='0'
							></iframe>
						</div>
					</div>
				</main>
				<footer className='container flex flex-col items-center my-10 sm:my-20 gap-10'>
					<div className='flex gap-3'>
						<a href='#'>
							<div className='p-3.5 rounded-full bg-(--color-accent)'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									viewBox='0 0 24 24'
									role='presentation'
									aria-labelledby='cli-telegram'
								>
									{' '}
									id="cli-telegram" lang="en"&gt;
									<g fill='white'>
										<path
											clipRule='evenodd'
											d='M23.91 3.78999L20.3 20.84C20.05 22.05 19.32 22.34 18.3 21.78L12.8 17.71L10.14 20.28C9.84 20.58 9.59 20.84 9.04 20.84C8.32 20.84 8.44 20.57 8.2 19.89L6.3 13.7L0.849998 12C-0.330002 11.65 -0.340002 10.84 1.11 10.25L22.37 2.04999C23.34 1.61999 24.27 2.28999 23.9 3.77999L23.91 3.78999Z'
											fillRule='evenodd'
										></path>
									</g>
								</svg>
							</div>
						</a>
						<a href='#'>
							<div className='p-3.5 rounded-full bg-(--color-accent)'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									viewBox='0 0 24 24'
									role='presentation'
									aria-labelledby='cli-whatsapp'
								>
									{' '}
									id="cli-whatsapp" lang="en"&gt;
									<g fill='white'>
										<path
											clipRule='evenodd'
											d='M17.472 14.382C17.175 14.233 15.714 13.515 15.442 13.415C15.169 13.316 14.971 13.267 14.772 13.565C14.575 13.862 14.005 14.531 13.832 14.729C13.659 14.928 13.485 14.952 13.188 14.804C12.891 14.654 11.933 14.341 10.798 13.329C9.91501 12.541 9.31801 11.568 9.14501 11.27C8.97201 10.973 9.12701 10.812 9.27501 10.664C9.40901 10.531 9.57301 10.317 9.72101 10.144C9.87001 9.96998 9.91901 9.84598 10.019 9.64698C10.118 9.44898 10.069 9.27598 9.99401 9.12698C9.91901 8.97798 9.32501 7.51498 9.07801 6.91998C8.83601 6.34098 8.59101 6.41998 8.40901 6.40998C8.23601 6.40198 8.03801 6.39998 7.83901 6.39998C7.64101 6.39998 7.31901 6.47398 7.04701 6.77198C6.77501 7.06898 6.00701 7.78798 6.00701 9.25098C6.00701 10.713 7.07201 12.126 7.22001 12.325C7.36901 12.523 9.31601 15.525 12.297 16.812C13.006 17.118 13.559 17.301 13.991 17.437C14.703 17.664 15.351 17.632 15.862 17.555C16.433 17.47 17.62 16.836 17.868 16.142C18.116 15.448 18.116 14.853 18.041 14.729C17.967 14.605 17.769 14.531 17.471 14.382H17.472ZM12.05 21.785H12.046C10.2758 21.7851 8.53809 21.3092 7.01501 20.407L6.65401 20.193L2.91301 21.175L3.91101 17.527L3.67601 17.153C2.68645 15.5772 2.16295 13.7537 2.16601 11.893C2.16701 6.44298 6.60201 2.00898 12.054 2.00898C14.694 2.00898 17.176 3.03898 19.042 4.90698C19.9627 5.8236 20.6924 6.91371 21.189 8.11422C21.6856 9.31474 21.9391 10.6018 21.935 11.901C21.932 17.351 17.498 21.785 12.05 21.785ZM20.463 3.48798C19.3612 2.3789 18.0502 1.49952 16.6061 0.90078C15.162 0.302044 13.6133 -0.00413728 12.05 -2.00576e-05C5.49501 -2.00576e-05 0.160007 5.33498 0.157007 11.892C0.157007 13.988 0.704007 16.034 1.74501 17.837L0.0570068 24L6.36201 22.346C8.1056 23.2959 10.0594 23.7937 12.045 23.794H12.05C18.604 23.794 23.94 18.459 23.943 11.901C23.9478 10.3383 23.6428 8.79008 23.0454 7.34601C22.4481 5.90195 21.5704 4.59065 20.463 3.48798Z'
											fillRule='evenodd'
										></path>
									</g>
								</svg>
							</div>
						</a>
						<a href='#'>
							<div className='p-3.5 rounded-full bg-(--color-accent)'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									viewBox='0 0 24 24'
									role='presentation'
									aria-labelledby='cli-twitter'
								>
									{' '}
									id="cli-twitter" lang="en"&gt;
									<g fill='white'>
										<path
											data-v-f838f072=''
											d='M23.954 4.56897C23.069 4.95797 22.124 5.22297 21.129 5.34397C22.143 4.73297 22.923 3.76997 23.292 2.62097C22.341 3.17597 21.287 3.57997 20.165 3.80497C19.269 2.84597 17.992 2.24597 16.574 2.24597C13.857 2.24597 11.654 4.44897 11.654 7.16297C11.654 7.55297 11.699 7.92797 11.781 8.28697C7.691 8.09397 4.066 6.12997 1.64 3.16097C1.213 3.88297 0.974 4.72197 0.974 5.63597C0.974 7.34597 1.844 8.84897 3.162 9.73197C2.355 9.70597 1.596 9.48397 0.934 9.11597V9.17697C0.934 11.562 2.627 13.551 4.88 14.004C4.467 14.115 4.031 14.175 3.584 14.175C3.27 14.175 2.969 14.145 2.668 14.089C3.299 16.042 5.113 17.466 7.272 17.506C5.592 18.825 3.463 19.611 1.17 19.611C0.78 19.611 0.391 19.588 0 19.544C2.189 20.938 4.768 21.753 7.557 21.753C16.611 21.753 21.556 14.257 21.556 7.76697C21.556 7.55797 21.556 7.34697 21.541 7.13697C22.502 6.44797 23.341 5.57697 24.001 4.58897L23.954 4.56897Z'
											fillRule='evenodd'
											clipRule='evenodd'
										></path>
									</g>
								</svg>
							</div>
						</a>
						<a href='#'>
							<div className='p-3.5 rounded-full bg-(--color-accent)'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									viewBox='0 0 24 24'
									role='presentation'
									aria-labelledby='cli-vk'
								>
									{' '}
									id="cli-vk" lang="en"&gt;
									<g fill='white'>
										<path
											data-v-f838f072=''
											d='M23.057 19.3021H20.4367C19.4451 19.3021 19.1386 18.5133 17.3566 16.7073C15.8046 15.2048 15.1179 15.002 14.7363 15.002C14.2014 15.002 14.0482 15.1552 14.0482 15.893V18.2594C14.0482 18.8964 13.8453 19.278 12.1656 19.278C9.39198 19.278 6.3119 17.5983 4.14984 14.4671C0.892471 9.88756 0 6.45139 0 5.73922C0 5.35759 0.153253 5.0015 0.890969 5.0015H3.51129C4.17238 5.0015 4.4278 5.3065 4.68322 6.01868C5.97986 9.75985 8.14342 13.0428 9.03439 13.0428C9.36494 13.0428 9.51819 12.8895 9.51819 12.0511V8.18074C9.41602 6.39881 8.47397 6.24706 8.47397 5.61151C8.47397 5.305 8.72939 5 9.13506 5H13.2579C13.8183 5 14.0211 5.305 14.0211 5.96609V11.1842C14.0211 11.7431 14.2765 11.9475 14.4283 11.9475C14.7588 11.9475 15.0398 11.7431 15.6498 11.1331C17.5339 9.02063 18.8816 5.76326 18.8816 5.76326C19.0604 5.38163 19.3654 5.02554 20.028 5.02554H22.6483C23.4371 5.02554 23.6159 5.43121 23.4371 5.99163C23.1066 7.51965 19.9003 12.0481 19.9003 12.0481C19.6208 12.5064 19.5187 12.7092 19.9003 13.2201C20.1798 13.6017 21.0963 14.3905 21.7078 15.1027C22.8271 16.3753 23.6911 17.4435 23.9209 18.1827C24.1764 18.919 23.7932 19.3006 23.0555 19.3006L23.057 19.3021Z'
											fillRule='evenodd'
											clipRule='evenodd'
										></path>
									</g>
								</svg>
							</div>
						</a>
					</div>
					<nav>
						<ul className='flex flex-wrap gap-5 justify-center'>
							<a href='#'>
								<li className='text-(--color-darkgray-text) text-lg'>
									О компании
								</li>
							</a>
							<a href='#'>
								<li className='text-(--color-darkgray-text) text-lg'>
									Новости
								</li>
							</a>
							<a href='#'>
								<li className='text-(--color-darkgray-text) text-lg'>Помощь</li>
							</a>
							<a href='#contacts'>
								<li className='text-(--color-darkgray-text) text-lg'>
									Контакты
								</li>
							</a>
						</ul>
					</nav>
					<div className='text-(--color-darkgray-text) text-lg'>
						© 2024 Олимпия
					</div>
				</footer>
			</div>
		</>
	)
}

export default App
