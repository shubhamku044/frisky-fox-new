import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider = () => {
	const images = [
		{ id: 1, imgSrc: '/team.jpeg' },
		{ id: 2, imgSrc: '/team.jpeg' },
		{ id: 3, imgSrc: '/team.jpeg' },
		{ id: 4, imgSrc: '/team.jpeg' },
		{ id: 5, imgSrc: '/team.jpeg' },
		{ id: 6, imgSrc: '/team.jpeg' },
		{ id: 7, imgSrc: '/team.jpeg' },
		{ id: 8, imgSrc: '/team.jpeg' },
		{ id: 9, imgSrc: '/team.jpeg' },
		{ id: 10, imgSrc: '/team.jpeg' },
		{ id: 11, imgSrc: '/team.jpeg' },
	];

	return (
		<>
			<div className="sm:hidden">
				<Swiper
					modules={[Pagination]}
					slidesPerView={2}
					spaceBetween={30}
					centeredSlides={true}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
				>
					{images.map(({ id, imgSrc }) => (
						<SwiperSlide key={id}>
							<div className="relative h-52 w-40">
								<Image
									src={imgSrc}
									layout="fill"
									objectFit="cover"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="hidden sm:block lg:hidden">
				<Swiper
					modules={[Pagination]}
					slidesPerView={3}
					spaceBetween={30}
					centeredSlides={true}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
				>
					{images.map(({ id, imgSrc }) => (
						<SwiperSlide key={id}>
							<div className="relative h-52 w-40">
								<Image
									src={imgSrc}
									layout="fill"
									objectFit="cover"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="hidden lg:block xl:hidden">
				<Swiper
					modules={[Pagination]}
					slidesPerView={4}
					spaceBetween={30}
					centeredSlides={true}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
				>
					{images.map(({ id, imgSrc }) => (
						<SwiperSlide key={id}>
							<div className="relative h-52 w-40">
								<Image
									src={imgSrc}
									layout="fill"
									objectFit="cover"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="hidden xl:block">
				<Swiper
					modules={[Pagination]}
					slidesPerView={5}
					spaceBetween={30}
					centeredSlides={true}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
				>
					{images.map(({ id, imgSrc }) => (
						<SwiperSlide key={id}>
							<div className="relative h-52 w-40">
								<Image
									src={imgSrc}
									layout="fill"
									objectFit="cover"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default ImageSlider;
