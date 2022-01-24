import Image from 'next/image';
import Link from 'next/link';

const TeamProfile = ({ memberName, occupation, linkedIn, imgSrc }) => {
	return (
		<div className="space-y-2">
			<div className="pb-2 border-b space-y-2">
				<div className="relative h-80 w-64 hover:-translate-y-1 transition-all duration-150 ease-out group rounded-md">
					<Image
						src={imgSrc}
						objectFit="cover"
						layout="fill"
						className="z-40 rounded-md"
					/>
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br rounded-md from-purple-600 to-pink-600 blur-none group-hover:blur-sm"></div>
				</div>
				<h6 className="font-bold text-2xl">{memberName}</h6>
				<p className="uppercase text-sm font-semibold">{occupation}</p>
			</div>
			<div>
				<Link href={linkedIn}>
					<a target="_blank">
						<div className="relative h-6 w-6">
							<Image
								src={'/linkedin.svg'}
								objectFit="contain"
								layout="fill"
							/>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default TeamProfile;
