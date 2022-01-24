import PreloaderAnimation from './PreloaderAnimation';

const Preloader = () => {
	return (
		<div className="fixed top-0 left-0 h-screen w-screen bg-gradient-to-br from-neutral-800 to-stone-900 z-[999] flex justify-center items-center text-7xl text-white">
			<PreloaderAnimation />
		</div>
	);
};

export default Preloader;
