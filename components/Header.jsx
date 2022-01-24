import Image from 'next/image';
import Link from 'next/link';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
	const [open, setOpen] = useState(true);
	const [navbar, setNavbar] = useState(false);
	const router = useRouter();

	const openNavlist = () => (!open ? setOpen(true) : setOpen(false));

	const changeBackground = () => {
		if (window.scrollY >= 100) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeBackground);
	});

	return (
		<div
			className={`fixed top-0 left-0 w-full z-50 ${
				navbar
					? 'bg-zinc-900 bg-opacity-80 border-b-0 backdrop-blur-sm'
					: 'bg-zinc-900 bg-opacity-70 border-b-0'
			} transition-all duration-200 ease-out`}
		>
			<div
				className={`mx-auto border-b ${
					navbar ? 'w-full px-4' : 'max-w-6xl'
				} transition-all duration-200 ease-out`}
			>
				<div
					className={`flex items-center justify-between max-w-6xl mx-auto relative ${
						navbar ? 'py-2 px-2' : 'py-4 px-12'
					} transition-all duration-300 ease-out`}
				>
					<div>
						<Image
							src="/logos/logo_circle.png"
							height={52}
							width={56}
							objectFit="contain"
							onClick={() => {
								router.push('/');
							}}
							className="cursor-pointer"
						/>
					</div>
					<div className="space-x-8 lg:space-x-16 flex items-center">
						<ul
							className="hidden sm:flex text-base font-medium space-x-6 text-white"
							id="menu"
						>
							<li
								data-menuanchor="home"
								className={`cursor-pointer md:hover:text-[#00ffd5] transition-all duration-300 ease-out navbar`}
							>
								<a href="#home">Home</a>
							</li>
							<li
								data-menuanchor="about"
								className="cursor-pointer md:hover:text-[#00ffd5] transition-all duration-300 ease-out"
							>
								<a href="#about">About</a>
							</li>
							<li
								data-menuanchor="benefits"
								className="cursor-pointer md:hover:text-[#00ffd5] transition-all duration-300 ease-out"
							>
								<a href="#benefits">Benefits</a>
							</li>
							<li
								data-menuanchor="roadmap"
								className="cursor-pointer md:hover:text-[#00ffd5] transition-all duration-300 ease-out"
							>
								<a href="#roadmap">Roadmap</a>
							</li>
							<li
								data-menuanchor="team"
								className="cursor-pointer md:hover:text-[#00ffd5] transition-all duration-300 ease-out"
							>
								<a href="#team">Team</a>
							</li>
							<li
								data-menuanchor="faq"
								className="cursor-pointer md:hover:text-[#00ffd5] transition-all duration-300 ease-out"
							>
								<a href="#faq">FAQ</a>
							</li>
						</ul>
						<ul className="hidden md:flex space-x-2 md:space-x-6">
							<li>
								<Link href={'#'}>
									<a target={'_blank'}>
										<div className="relative h-5 w-5 hover:scale-125 transition-all duration-150 ease-out">
											<Image
												src={'/icons/Twitter.svg'}
												layout="fill"
												objectFit="contain"
											/>
										</div>
									</a>
								</Link>
							</li>
							<li>
								<Link href={'#'}>
									<a target={'_blank'}>
										<div className="relative h-5 w-5 hover:scale-125 transition-all duration-150 ease-out">
											<Image
												src={'/icons/Discord.svg'}
												layout="fill"
												objectFit="contain"
											/>
										</div>
									</a>
								</Link>
							</li>
							<li>
								<Link href={'#'}>
									<a target={'_blank'}>
										<div className="relative h-5 w-5 hover:scale-125 transition-all duration-150 ease-out">
											<Image
												src={'/icons/OpenSea.svg'}
												layout="fill"
												objectFit="contain"
											/>
										</div>
									</a>
								</Link>
							</li>
						</ul>
					</div>

					{open ? (
						<div className="inline-block sm:hidden">
							<MenuAlt3Icon
								onClick={openNavlist}
								className="cursor-pointer h-8 text-gray-100"
							/>
						</div>
					) : (
						<div className="inline-block sm:hidden">
							<XIcon
								onClick={openNavlist}
								className="cursor-pointer h-8 text-gray-100"
							/>
						</div>
					)}
					{!open && (
						<div className="sm:hidden absolute top-24 left-1/2 -translate-x-1/2 h-[30rem] z-40 w-11/12 from-neutral-900/95 to-stone-800/90 bg-gradient-to-br backdrop-blur-sm rounded-xl flex justify-center items-center">
							<ul className="flex flex-col justify-center items-center text-lg font-medium space-y-10 text-gray-100">
								{router.pathname === '/' ? (
									<>
										<li className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out">
											<a
												href="#home"
												onClick={openNavlist}
											>
												Home
											</a>
										</li>
										<li className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out">
											<a
												href="#about"
												onClick={openNavlist}
											>
												About
											</a>
										</li>
										<li className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out">
											<a
												href="#benefits"
												onClick={openNavlist}
											>
												Benefits
											</a>
										</li>
										<li className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out">
											<a
												href="#roadmap"
												onClick={openNavlist}
											>
												Roadmap
											</a>
										</li>
										<li className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out">
											<a
												href="#team"
												onClick={openNavlist}
											>
												Team
											</a>
										</li>
										<li className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out">
											<a
												href="#faq"
												onClick={openNavlist}
											>
												FAQ
											</a>
										</li>
									</>
								) : (
									<>
										<li
											onClick={() => {
												router.push('/');
											}}
											className="cursor-pointer md:hover:text-indigo-500 transition-all duration-300 ease-out"
										>
											Home
										</li>
									</>
								)}
								<ul className="flex space-x-6">
									<li>
										<Link href={'#'}>
											<a target={'_blank'}>
												<div className="relative h-5 w-5 hover:scale-125 transition-all duration-150 ease-out">
													<Image
														src={
															'/icons/Twitter.svg'
														}
														layout="fill"
														objectFit="contain"
													/>
												</div>
											</a>
										</Link>
									</li>
									<li>
										<Link href={'#'}>
											<a target={'_blank'}>
												<div className="relative h-5 w-5 hover:scale-125 transition-all duration-150 ease-out">
													<Image
														src={
															'/icons/Discord.svg'
														}
														layout="fill"
														objectFit="contain"
													/>
												</div>
											</a>
										</Link>
									</li>
									<li>
										<Link href={'#'}>
											<a target={'_blank'}>
												<div className="relative h-5 w-5 hover:scale-125 transition-all duration-150 ease-out">
													<Image
														src={
															'/icons/OpenSea.svg'
														}
														layout="fill"
														objectFit="contain"
													/>
												</div>
											</a>
										</Link>
									</li>
								</ul>
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
