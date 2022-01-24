import Accordion from './Accordion';
import bg from '../public/bg-stars.png';
import VideoComponent from './VideoComponent';

const FAQ = () => {
	return (
		<section
			className="text-white mt-28 lg:mt-20 relative"
			style={{
				backgroundImage: `url(${bg.src})`,
				width: '100%',
				height: '100%',
			}}
		>
			{/* <div
				style={{
					position: 'absolute',
					top: '40px',
					left: '60px',
					width: '25rem',
					height: '30rem',
					backgroundColor: '#0559445e',
					zIndex: '-100000',
					filter: 'blur(140px)',
				}}
			></div> */}
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
			<div>
				<div className="text-4xl font-semibold py-10">
					Frequently Asked Questions
				</div>
				<div className="max-w-xl space-y-6">
					<Accordion />
				</div>
			</div>

			<div className="mx-auto mt-20">
				<VideoComponent />
			</div>
		</section>
	);
};

export default FAQ;
