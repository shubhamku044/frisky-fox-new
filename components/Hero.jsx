import Image from 'next/image';
import Link from 'next/link';
import bg from '../public/bg-stars.png';

const Hero = () => {
	return (
		<section
			className="mb-4 relative"
			style={{
				backgroundImage: `url(${bg.src})`,
				width: '100%',
				height: '100%',
			}}
		>
			<div
				style={{
					position: 'absolute',
					bottom: '40px',
					right: '60px',
					width: '20rem',
					height: '25rem',
					backgroundColor: '#931213a8',
					zIndex: '-1000000',
					filter: 'blur(200px)',
				}}
			></div>
			<div className="flex flex-col lg:flex-row items-start lg:items-center space-y-20 lg:justify-between">
				<div className="flex flex-col lg:flex-1 space-y-6 text-white w-full">
					<h2 className="text-4xl font-extrabold">
						Originals Sold Out
					</h2>
					<p className="text-base">
						Juniors collection will launch in early February -
						complete the "Get Whitelisted" form to enroll in a
						raffle and join our discord for more information on
						whitelist.
					</p>
					<div className="space-x-0 sm:space-x-8 space-y-4 sm:space-y-0 text-lg font-bold flex flex-col sm:flex-row">
						<Link href="#">
							<a className="w-full sm:w-32 text-center py-2 bg-[#00acee] rounded-sm md:hover:w-36 md:hover:rounded-md transition-all duration-300 ease-out flex items-center justify-center space-x-2">
								<div className="relative h-5 w-5">
									<Image
										src={'/icons/Twitter.svg'}
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<span>Follow us</span>
							</a>
						</Link>
						<Link href="#">
							<a className="w-full sm:w-32 text-center py-2 bg-[#738ADB] rounded-sm md:hover:w-36 md:hover:rounded-md transition-all duration-300 ease-out flex items-center justify-center space-x-2">
								<div className="relative h-5 w-5">
									<Image
										src={'/icons/Discord.svg'}
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<span>Join us</span>
							</a>
						</Link>
						<Link href="#">
							<a className="w-full sm:w-32 text-center py-2 bg-[#00132c] rounded-sm md:hover:w-36 md:hover:rounded-md transition-all duration-300 ease-out flex items-center justify-center space-x-2">
								<div className="relative h-5 w-5">
									<Image
										src={'/icons/OpenSea.svg'}
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<span>OpenSea</span>
							</a>
						</Link>
					</div>
				</div>
				<div className="w-full pt-4 lg:py-0 lg:flex-1">
					<div className="relative h-96 w-64 sm:h-[28rem] sm:w-96 md:h-[30rem] md:w-96 mx-auto scale-125">
						<Image
							src={`/logos/logo.png`}
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
