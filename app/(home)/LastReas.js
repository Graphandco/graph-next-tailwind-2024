"use client";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const LastReas = () => {
	return (
		<section className=" container py-28">
			<h2 className="text-title-lg text-contrast font-title">
				Nos dernières réalisations
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
				<Link
					heading="3ème chance"
					subheading="Comportementaliste animalier à Strasbourg"
					imgSrc="/img/troisieme-chance.webp"
					href="#"
				/>
				<Link
					heading="Bomot"
					subheading="Écrivain, auteure, biographe"
					imgSrc="/img/bomot.webp"
					href="#"
				/>
				<Link
					heading="Hola Maté"
					subheading="Boutique de maté à Strabourg"
					imgSrc="/img/holamate.webp"
					href="#"
				/>
				<Link
					heading="Loide Guitare"
					subheading="Créateur de guitares originales"
					imgSrc="/img/loide.webp"
					href="#"
				/>
			</div>
		</section>
	);
};

const Link = ({ heading, imgSrc, subheading, href }) => {
	const ref = useRef(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
	const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

	const handleMouseMove = (e) => {
		const rect = ref.current.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;

		x.set(xPct);
		y.set(yPct);
	};

	return (
		<motion.a
			href={href}
			ref={ref}
			onMouseMove={handleMouseMove}
			initial="initial"
			whileHover="whileHover"
			className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
		>
			<div>
				<motion.span
					variants={{
						initial: { x: 0 },
						whileHover: { x: -16 },
					}}
					transition={{
						type: "spring",
						staggerChildren: 0.075,
						delayChildren: 0.25,
					}}
					className="relative z-10 block font-bold text-neutral-500 transition-colors duration-500 md:text-6xl"
				>
					<>
						<span className="text-primary pr-2">#</span>
					</>
					{heading.split("").map((letter, i) => (
						<motion.span
							variants={{
								initial: { x: 0 },
								whileHover: { x: 16 },
							}}
							transition={{ type: "spring" }}
							className="inline-block text-last-reas-title  text-contrast group-hover:text-primary"
							key={i}
						>
							{letter}
						</motion.span>
					))}
				</motion.span>
				<span className="relative z-10 mt-2 max-w-60 block text-base transition-colors duration-500 group-hover:text-contrast">
					{subheading}
				</span>
			</div>

			<motion.img
				style={{
					top,
					left,
					translateX: "-50%",
					translateY: "-50%",
				}}
				variants={{
					initial: { scale: 0, rotate: "-12.5deg" },
					whileHover: { scale: 1, rotate: "12.5deg" },
				}}
				transition={{ type: "spring" }}
				src={imgSrc}
				className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
				alt={`Image representing a link for ${heading}`}
			/>

			<motion.div
				variants={{
					initial: {
						x: "25%",
						opacity: 0,
					},
					whileHover: {
						x: "0%",
						opacity: 1,
					},
				}}
				transition={{ type: "spring" }}
				className="relative z-10 p-4"
			>
				<FiArrowRight className="text-5xl text-neutral-50" />
			</motion.div>
		</motion.a>
	);
};
