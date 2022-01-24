import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Accordion.module.scss';

const Accordion = () => {
	const [selected, setSelected] = useState(null);

	const toggle = (i) => {
		if (selected === i) return setSelected(null);

		setSelected(i);
	};

	const parentRef = useRef();

	return (
		<>
			<div
				className={`from-zinc-900 to-neutral-800 bg-gradient-to-br px-4 rounded-md py-4`}
			>
				<div
					className={`flex items-center text-gray-100 text-xl sm:text-2xl space-x-6 cursor-pointer`}
					onClick={() => {
						toggle(1);
					}}
				>
					<span>{selected === 1 ? '-' : '+'}</span>
					<h1>Lorem ipsum dolor sit amet.</h1>
				</div>
				<div
					className={styles.content__parent}
					ref={parentRef}
					style={
						selected === 1
							? {
									height:
										parentRef.current.scrollHeight + 'px',
							  }
							: {
									height: '0px',
							  }
					}
				>
					<p className={`text-gray-300 text-lg sm:text-xl ml-8`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quis, nesciunt?
					</p>
				</div>
			</div>
			<div
				className={`from-zinc-900 to-neutral-800 bg-gradient-to-br py-4 px-4 rounded-md`}
			>
				<div
					className={`flex text-gray-100 text-xl sm:text-2xl space-x-6 cursor-pointer`}
					onClick={() => {
						toggle(2);
					}}
				>
					<span>{selected === 2 ? '-' : '+'}</span>
					<h1>Lorem ipsum dolor sit amet.</h1>
				</div>
				<div
					className={styles.content__parent}
					ref={parentRef}
					style={
						selected === 2
							? { height: parentRef.current.scrollHeight + 'px' }
							: {
									height: '0px',
							  }
					}
				>
					<p className={`text-gray-300 text-lg sm:text-xl ml-8`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quis, nesciunt?
					</p>
				</div>
			</div>
			<div
				className={`from-zinc-900 to-neutral-800 bg-gradient-to-br py-4 px-4 rounded-md`}
			>
				<div
					className={`flex text-gray-100 text-xl sm:text-2xl space-x-6 cursor-pointer`}
					onClick={() => {
						toggle(3);
					}}
				>
					<span>{selected === 3 ? '-' : '+'}</span>
					<h1>Lorem ipsum dolor sit amet.</h1>
				</div>
				<div
					className={styles.content__parent}
					ref={parentRef}
					style={
						selected === 3
							? { height: parentRef.current.scrollHeight + 'px' }
							: {
									height: '0px',
							  }
					}
				>
					<p className={`text-gray-300 text-lg sm:text-xl ml-8`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quis, nesciunt?
					</p>
				</div>
			</div>
			<div
				className={`from-zinc-900 to-neutral-800 bg-gradient-to-br py-4 px-4 rounded-md`}
			>
				<div
					className={`flex text-gray-100 text-xl sm:text-2xl space-x-6 cursor-pointer`}
					onClick={() => {
						toggle(4);
					}}
				>
					<span>{selected === 4 ? '-' : '+'}</span>
					<h1>Lorem ipsum dolor sit amet.</h1>
				</div>
				<div
					className={styles.content__parent}
					ref={parentRef}
					style={
						selected === 4
							? { height: parentRef.current.scrollHeight + 'px' }
							: {
									height: '0px',
							  }
					}
				>
					<p className={`text-gray-300 text-lg sm:text-xl ml-8`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quis, nesciunt?
					</p>
				</div>
			</div>
			<div
				className={`from-zinc-900 to-neutral-800 bg-gradient-to-br py-4 px-4 rounded-md`}
			>
				<div
					className={`flex text-gray-100 text-xl sm:text-2xl space-x-6 cursor-pointer`}
					onClick={() => {
						toggle(5);
					}}
				>
					<span>{selected === 5 ? '-' : '+'}</span>
					<h1>Lorem ipsum dolor sit amet.</h1>
				</div>
				<div
					className={styles.content__parent}
					ref={parentRef}
					style={
						selected === 5
							? { height: parentRef.current.scrollHeight + 'px' }
							: {
									height: '0px',
							  }
					}
				>
					<p className={`text-gray-300 text-lg sm:text-xl ml-8`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quis, nesciunt?
					</p>
				</div>
			</div>
		</>
	);
};

export default Accordion;
