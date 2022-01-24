import Link from 'next/link';
import Image from 'next/image';
import bg from '../public/bg-stars.png';

const Footer = () => {
	return (
		<footer
			className="text-white space-y-2 pt-6 pb-12"
			style={{
				backgroundImage: `url(${bg.src})`,
				width: '100%',
				height: '100%',
			}}
		>
			<h6 className="text-3xl font-bold">Join the club</h6>
			<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between space-y-4 border-b-2 pb-4">
				<div className="space-y-2">
					<p>
						Become a member of the strongest and fast growing DeFi
						gambling community.
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
				<div className="">
					<Link href="#">
						<a className="sm:w-60 text-center py-2 bg-[#f6faff] text-[#131313] rounded-sm md:hover:w-64 md:hover:rounded-md transition-all duration-300 ease-out font-black w-full block uppercase">
							Mint you ticket
						</a>
					</Link>
				</div>
			</div>
			<div className="text-xs">
				<div>© 2021 Slotie NFT. All rights reserved.</div>
			</div>
		</footer>
	);
};

export default Footer;
