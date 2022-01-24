import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Preloader from '../components/Preloader';

function MyApp({ Component, pageProps }: AppProps) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 6000);
	}, []);

	return (
		<>
			{isLoading && <Preloader />}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
