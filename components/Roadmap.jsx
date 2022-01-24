import styles from '../styles/Roadmap.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import bg from '../public/bg-stars.png';

const Roadmap = () => {
	useEffect(() => AOS.init({ duration: 700 }), []);

	return (
		<section
			className={`mt-28 lg:mt-20 relative`}
			style={{
				backgroundImage: `url(${bg.src})`,
				width: '100%',
				height: '100%',
			}}
		>
			<div
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
			></div>
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
			<div className="z-50">
				<div
					data-aos-once="true"
					data-aos="zoom-in-up"
					className="text-4xl font-semibold text-white mb-2"
				>
					Roadmap
				</div>
				<div
					data-aos-once="true"
					data-aos="zoom-in-up"
					className="text-lg mb-4 text-white"
				>
					Our plans moving forward into 2022.
				</div>
				<div className="space-y-6 mx-auto max-w-5xl">
					<div className={styles.roadmap__container}>
						<div></div>
						<div
							data-aos-once="true"
							data-aos="fade-zoom-in"
							data-aos-delay="300"
							data-aos-offset="200"
							className={`${styles['roadmap__line']} ${styles['roadmap__container-center']}`}
						></div>
						<div></div>
						<div
							data-aos-once="true"
							data-aos="zoom-in-right"
							data-aos-easing="ease-in-back"
							className={`${styles['roadmap__container-left']} ${styles['roadmap__container-box']}`}
						>
							<h6>Q3, 2021</h6>
							<p>Slot Machine Development</p>
							<p>
								With 10+ years of game development experience,
								the team came up with the ambitious plan to
								reinvent slot machines by bringing blockchain
								technologies to the gambling industry.
							</p>
						</div>
						<div
							className={`${styles['roadmap__shape']} space-y-4`}
						>
							<div
								data-aos-once="true"
								data-aos="fade-up"
								className={`${styles['roadmap__shape-circle']} ${styles['roadmap__container-center']}`}
							></div>
							<div
								data-aos-once="true"
								data-aos="fade-zoom-in"
								data-aos-delay="300"
								data-aos-offset="200"
								className={`${styles['roadmap__shape-line']} ${styles['roadmap__container-center']}`}
							></div>
						</div>
						<div></div>
						<div></div>
						<div
							className={`${styles['roadmap__shape']} space-y-4`}
						>
							<div
								data-aos-once="true"
								data-aos="fade-up"
								className={`${styles['roadmap__shape-circle']} ${styles['roadmap__container-center']}`}
							></div>
							<div
								data-aos-once="true"
								data-aos="fade-zoom-in"
								data-aos-delay="300"
								data-aos-offset="200"
								className={`${styles['roadmap__shape-line']} ${styles['roadmap__container-center']}`}
							></div>
						</div>
						<div
							data-aos-once="true"
							data-aos="zoom-in-left"
							data-aos-easing="ease-in-back"
							className={`${styles['roadmap__container-right']} ${styles['roadmap__container-box']}`}
						>
							<h6>Q3, 2021</h6>
							<p>Slot Machine Development</p>
							<p>
								With 10+ years of game development experience,
								the team came up with the ambitious plan to
								reinvent slot machines by bringing blockchain
								technologies to the gambling industry.
							</p>
						</div>
						<div
							data-aos-once="true"
							data-aos="zoom-in-right"
							data-aos-easing="ease-in-back"
							className={`${styles['roadmap__container-left']} ${styles['roadmap__container-box']}`}
						>
							<h6>Q3, 2021</h6>
							<p>Slot Machine Development</p>
							<p>
								With 10+ years of game development experience,
								the team came up with the ambitious plan to
								reinvent slot machines by bringing blockchain
								technologies to the gambling industry.
							</p>
						</div>
						<div
							className={`${styles['roadmap__shape']} space-y-4`}
						>
							<div
								data-aos-once="true"
								data-aos="fade-up"
								className={`${styles['roadmap__shape-circle']} ${styles['roadmap__container-center']}`}
							></div>
							<div
								data-aos-once="true"
								data-aos="fade-zoom-in"
								data-aos-delay="300"
								data-aos-offset="200"
								className={`${styles['roadmap__shape-line']} ${styles['roadmap__container-center']}`}
							></div>
						</div>
						<div></div>
						<div></div>
						<div
							className={`${styles['roadmap__shape']} space-y-4`}
						>
							<div
								data-aos-once="true"
								data-aos="fade-up"
								className={`${styles['roadmap__shape-circle']} ${styles['roadmap__container-center']}`}
							></div>
							<div
								data-aos-once="true"
								data-aos="fade-zoom-in"
								data-aos-delay="300"
								data-aos-offset="200"
								className={`${styles['roadmap__shape-line']} ${styles['roadmap__container-center']}`}
							></div>
						</div>
						<div
							data-aos-once="true"
							data-aos="zoom-in-left"
							data-aos-easing="ease-in-back"
							className={`${styles['roadmap__container-right']} ${styles['roadmap__container-box']}`}
						>
							<h6>Q3, 2021</h6>
							<p>Slot Machine Development</p>
							<p>
								With 10+ years of game development experience,
								the team came up with the ambitious plan to
								reinvent slot machines by bringing blockchain
								technologies to the gambling industry.
							</p>
						</div>
						<div
							data-aos-once="true"
							data-aos="zoom-in-right"
							data-aos-easing="ease-in-back"
							className={`${styles['roadmap__container-left']} ${styles['roadmap__container-box']}`}
						>
							<h6>Q3, 2021</h6>
							<p>Slot Machine Development</p>
							<p>
								With 10+ years of game development experience,
								the team came up with the ambitious plan to
								reinvent slot machines by bringing blockchain
								technologies to the gambling industry.
							</p>
						</div>
						<div
							className={`${styles['roadmap__shape']} space-y-4`}
						>
							<div
								data-aos-once="true"
								data-aos="fade-up"
								className={`${styles['roadmap__shape-circle']} ${styles['roadmap__container-center']}`}
							></div>
							<div
								data-aos-once="true"
								data-aos="fade-zoom-in"
								data-aos-delay="300"
								data-aos-offset="200"
								className={`${styles['roadmap__shape-line']} ${styles['roadmap__container-center']}`}
							></div>
						</div>
						<div></div>
						<div></div>
						<div
							className={`${styles['roadmap__shape']} space-y-4`}
						>
							<div
								data-aos-once="true"
								data-aos="fade-up"
								className={`${styles['roadmap__shape-circle']} ${styles['roadmap__container-center']}`}
							></div>
							{/* <div
								className={`${styles['roadmap__shape-line']} ${styles['roadmap__container-center']}`}
							></div> */}
						</div>
						<div
							data-aos-once="true"
							data-aos="zoom-in-left"
							data-aos-easing="ease-in-back"
							className={`${styles['roadmap__container-right']} ${styles['roadmap__container-box']}`}
						>
							<h6>To be continued</h6>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Roadmap;
