const VideoComponent = () => {
	return (
		<>
			<video
				className="opacity-90 object-cover object-center"
				data-autoplay
				autoPlay
				muted
				loop
				playsInline
				controls
			>
				<source src="/Video.m4v" type="Video/mp4" />
			</video>
		</>
	);
};

export default VideoComponent;
