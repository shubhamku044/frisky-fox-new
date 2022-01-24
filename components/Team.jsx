import TeamProfile from './TeamProfile';
import bg from '../public/bg-stars.png';

const Team = () => {
	const teamMembers = [
		{
			id: 1,
			memberName: 'Jhon Doe',
			occupation: 'Designer',
			linkedIn: 'https://www.linkedin.com/in/shubhamku044',
			imgSrc: '/team.jpeg',
		},
		{
			id: 2,
			memberName: 'Jhon Doe',
			occupation: 'Designer',
			linkedIn: 'https://www.linkedin.com/in/shubhamku044',
			imgSrc: '/team.jpeg',
		},
		{
			id: 3,
			memberName: 'Jhon Doe',
			occupation: 'Designer',
			linkedIn: 'https://www.linkedin.com/in/shubhamku044',
			imgSrc: '/team.jpeg',
		},
		{
			id: 4,
			memberName: 'Jhon Doe',
			occupation: 'Designer',
			linkedIn: 'https://www.linkedin.com/in/shubhamku044',
			imgSrc: '/team.jpeg',
		},
		{
			id: 5,
			memberName: 'Jhon Doe',
			occupation: 'Designer',
			linkedIn: 'https://www.linkedin.com/in/shubhamku044',
			imgSrc: '/team.jpeg',
		},
		{
			id: 6,
			memberName: 'Jhon Doe',
			occupation: 'Designer',
			linkedIn: 'https://www.linkedin.com/in/shubhamku044',
			imgSrc: '/team.jpeg',
		},
	];

	return (
		<section
			className="text-white mt-28 lg:mt-20 relative"
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
			<div className="space-y-4">
				<h6 className="text-4xl font-semibold">Team</h6>
				<p>
					Slotie NFT is created by Elia Software - a leading gaming
					software organization serving 150+ digital casinos. We are
					providing casinos with games, casino engines, payment
					integrations, as well as all of the other necessary features
					to build the best products.
				</p>
			</div>
			<div className="grid mt-12 gap-6 place-items-center sm:grid-cols-2 lg:grid-cols-3">
				{teamMembers.map(
					({ id, memberName, occupation, linkedIn, imgSrc }) => (
						<div key={id}>
							<TeamProfile
								memberName={memberName}
								occupation={occupation}
								linkedIn={linkedIn}
								imgSrc={imgSrc}
							/>
						</div>
					)
				)}
			</div>
		</section>
	);
};

export default Team;
