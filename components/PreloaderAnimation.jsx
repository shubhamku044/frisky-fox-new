const PreloaderAnimation = () => {
	return (
		<div className="">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				xmlSpace="preserve"
				className="h-48 flex justify-center items-center translate-x-8 -translate-y-24 md:-translate-y-8"
				// {...props}
			>
				<path fill="#fff" d="M20 50h4v10h-4z">
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="translate"
						values="0 0; 0 20; 0 0"
						begin={0}
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</path>
				<path fill="#fff" d="M30 50h4v10h-4z">
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="translate"
						values="0 0; 0 20; 0 0"
						begin="0.2s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</path>
				<path fill="#fff" d="M40 50h4v10h-4z">
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="translate"
						values="0 0; 0 20; 0 0"
						begin="0.4s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</path>
			</svg>
		</div>
	);
};

export default PreloaderAnimation;
