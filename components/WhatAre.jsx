import Image from 'next/image';
import bg from '../public/bg-stars.png';
import ImageSlider from './ImageSlider';

const WhatAre = () => {
	return (
		<section
			className="text-white mt-28 lg:mt-20 relative space-y-12"
			style={{
				backgroundImage: `url(${bg.src})`,
				width: '100%',
				height: '100%',
			}}
		>
			<div
				style={{
					position: 'absolute',
					bottom: '0',
					left: '10px',
					width: '25rem',
					height: '30rem',
					backgroundColor: '#0c05595e',
					zIndex: '-100000',
					filter: 'blur(160px)',
				}}
			></div>
			<div
				style={{
					position: 'absolute',
					top: '20px',
					right: '0',
					width: '20rem',
					height: '30rem',
					backgroundColor: '#59055570',
					zIndex: '-100000',
					filter: 'blur(180px)',
				}}
			></div>
			<div className="flex flex-col lg:flex-row-reverse items-center">
				<div>
					<div className="space-y-6">
						<h6 className="text-4xl font-semibold">
							What are Sloties?
						</h6>
						<p>
							Sloties are your ticket into the largest and fastest
							growing online Casino network on the blockchain.
							With only 10,000 VIP members ever to be minted,
							Sloties grant holders access to the new world of
							Defi Gambling. Sloties grant proof of ownership on
							the Ethereum blockchain, and are based on the
							ERC-721 standard. More than your ordinary community,
							Sloties provide real world benefits in over 150
							Casinos worldwide. This is not your average Slot
							Machine: with Sloties it's your house, your rules.
						</p>
						<p>
							Each Slotie NFT is one of a kind, with varying
							degrees of rarity. And unlike other NFTs with only
							superficial rarity, the rarity of your Slotie will
							determine your share from Exclusive Holders Rewards.
							The rarer your Slotie, the more rewards it will
							generate.
						</p>
						<p>
							They are non-fungible, as these tokens are not
							interchangeable with one another.
						</p>
						<p>Each Slotie is 100% unique.</p>
					</div>
					<div className="flex items-center space-x-3">
						<div className="relative h-28 w-28 md:h-20 md:w-20">
							<Image
								src={'/icons/Quote.svg'}
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<p>
							"THE NFTS STARTED TO BECOME VALUABLE ASSETS IN THE
							GAMBLING INDUSTRY. THE IDEA OF WINNING NFTS IN THE
							SLOT GAMES IS ATTRACTING MORE AND MORE USERS.”
						</p>
					</div>
					<p>
						Mathias Kozlowski, Head of Business Development @ Elia
						Software
					</p>
				</div>
				<div>
					<div className="relative h-[28rem] w-[28rem] lg:h-[28rem] lg:w-96">
						<Image
							src="/test.png"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</div>
			</div>
			{/* Carousel */}
			<div>
				<ImageSlider />
			</div>
		</section>
	);
};

export default WhatAre;
