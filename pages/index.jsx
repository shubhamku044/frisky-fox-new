import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FAQ from '../components/FAQ';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';
import WhatAre from '../components/WhatAre';
import Benefits from '../components/Benefits';
import Team from '../components/Team';
import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
	return (
		<div className="from-neutral-800 to-stone-900 bg-gradient-to-br font-lato overflow-hidden">
			<Head>
				<title>Frisky Fox</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="h-24">
				<Header />
			</div>

			<main className="max-w-6xl mx-auto px-8 space-y-20">
				<ReactFullpage
					licenseKey={'C371640E-52EF4F02-848C959F-2A407D92'}
					anchors={[
						'home',
						'about',
						'benefits',
						'roadmap',
						'team',
						'faq',
					]}
					menu="#menu"
					responsiveWidth={9999999999999}
					render={({ state, fullpageApi }) => {
						return (
							<>
								<ReactFullpage.Wrapper className="fp-auto-height-responsive">
									<div className="section" data-anchor="home">
										<Hero />
									</div>
									<div
										className="section"
										data-anchor="about"
									>
										<WhatAre />
									</div>
									<div
										className="section"
										data-anchor="benefits"
									>
										<Benefits />
									</div>
									<div
										className="section"
										data-anchor="roadmap"
									>
										<Roadmap />
									</div>
									<div className="section" data-anchor="team">
										<Team />
									</div>
									<div className="section" data-anchor="faq">
										<FAQ />
									</div>
								</ReactFullpage.Wrapper>
							</>
						);
					}}
				></ReactFullpage>
				<Footer />
			</main>
		</div>
	);
}
