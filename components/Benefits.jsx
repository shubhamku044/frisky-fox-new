import Image from 'next/image';
import styles from '../styles/Benefits.module.scss';
import bg from '../public/bg-stars.png';

const Benefits = () => {
	return (
		<section
			className={`text-white mt-4`}
			style={{
				backgroundImage: `url(${bg.src})`,
				width: '100%',
				height: '100%',
			}}
		>
			<div className="space-y-4 border-b-2 pb-4">
				<h6 className="text-4xl font-semibold">
					Slotie Benefits and Broad Utility.
				</h6>
				<p>
					When you buy a Slotie, youre not simply buying an item or a
					provably-rare piece of art. Youre gaining membership access
					to the Slotie Club whose benefits and offerings are as
					follows.
				</p>
			</div>
			<div className="space-y-4">
				<div className="mt-6 flex flex-col md:flex-row items-center space-y-6 lg:space-y-0 relative">
					<div>
						<div className="relative h-48 w-48">
							<Image
								// src="/test.png"
								src="/logos/logo.png"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
					<div className={styles.circular_blur_1}></div>
					<div className="space-y-2">
						<h6 className="text-xl font-bold">
							Exclusive Holder Reward - EHR
						</h6>
						<p>
							After integrating a new online Slotie themed slot
							game in crypto casinos, we will receive about 12%
							commission from each partner. 80% of this money goes
							to Slotie NFT holders. Exact share of each Slotie
							will be linked with it's rarity. EHR is a stackable
							benefit, meaning more Sloties = more profit share.
							The money will be transferred periodically in form
							of WATTs, that holders can exchange to ETH.
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row-reverse items-center space-y-6 lg:space-y-0">
					<div>
						<div className="relative h-48 w-48">
							<Image
								// src="/test.png"
								src="/logos/logo.png"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<h6 className="text-xl font-bold">NFT Staking</h6>
						<p>
							The Slotie community becomes the house in 150
							casinos by adding NFTs to the slot machines. You can
							think of it as DeFi gambling, where you can stake
							any of your NFTs into the slot machine and earn high
							holders rewards.
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row items-center space-y-6 lg:space-y-0">
					<div>
						<div className="relative h-48 w-48">
							<Image
								// src="/test.png"
								src="/logos/logo.png"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<h6 className="text-xl font-bold">
							Up to 20% Rakeback in 150 Casinos.
						</h6>
						<p>
							Slotie owners will become the VIP members of each of
							the 150+ casinos we partner with and have up to a
							20% rakeback guarantee.
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row-reverse items-center space-y-6 lg:space-y-0 relative">
					<div>
						<div className="relative h-48 w-48">
							<Image
								// src="/test.png"
								src="/logos/logo.png"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
					<div className={styles.circular_blur_2}></div>
					<div className="space-y-2">
						<h6 className="text-xl font-bold">
							Breed your Sloties
						</h6>
						<p>
							In the NFT world, machines can breed. Slotie owners
							can breed their Sloties to create another series of
							NFTs called Junior Sloties. Owning a Junior Slotie
							literally doubles the rewards for the Slotie holder.
							You'll need a total of 1800 WATTs and 2 Sloties to
							breed
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row items-center space-y-6 lg:space-y-0">
					<div>
						<div className="relative h-48 w-48">
							<Image
								// src="/test.png"
								src="/logos/logo.png"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<h6 className="text-xl font-bold">
							A New Token - WATTS
						</h6>
						<p>
							WATTs is a token which acts like the energy in the
							Sloties world. WATTs are generated on a daily basis.
							Every Slotie owner gets 10 WATTs tokens daily. You
							will have enough WATTs to breed your Sloties in 3
							months. For those who cant wait to get their Junior
							Sloties, theres the opportunity to buy tokens from
							other owners on the secondary market.
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row-reverse items-center space-y-6 lg:space-y-0">
					<div>
						<div className="relative h-48 w-48">
							<Image
								// src="/test.png"
								src="/logos/logo.png"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<h6 className="text-xl font-bold">Slottery</h6>
						<p>
							Slotie Holders can win WATTs, cash ($10,000 weekly),
							NFTs or free spins in a weekly slottery. Any Slotie
							holder can enter the slottery and test their luck.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
