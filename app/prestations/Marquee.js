"use client";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import {
	SiHtml5,
	SiJavascript,
	SiPhp,
	SiCss3,
	SiTailwindcss,
	SiWordpress,
	SiWoocommerce,
	SiElementor,
	SiPrestashop,
	SiReact,
	SiNextdotjs,
	SiGithub,
	SiMongodb,
	SiAdobephotoshop,
	SiAdobexd,
} from "react-icons/si";

export default function Marquee() {
	const items = [
		{
			title: "HTML",
			icon: <SiHtml5 />,
		},
		{
			title: "Javascript",
			icon: <SiJavascript />,
		},
		{
			title: "PHP",
			icon: <SiPhp />,
		},
		{
			title: "CSS",
			icon: <SiCss3 />,
		},
		{
			title: "Tailwind",
			icon: <SiTailwindcss />,
		},
		{
			title: "Wordpress",
			icon: <SiWordpress />,
		},
		{
			title: "Woocommerce",
			icon: <SiWoocommerce />,
		},
		{
			title: "Elementor",
			icon: <SiElementor />,
		},
		{
			title: "Prestashop",
			icon: <SiPrestashop />,
		},
		{
			title: "React",
			icon: <SiReact />,
		},
		{
			title: "NextJS",
			icon: <SiNextdotjs />,
		},
		{
			title: "GIT",
			icon: <SiGithub />,
		},
		{
			title: "MongoDB",
			icon: <SiMongodb />,
		},
		{
			title: "Photoshop",
			icon: <SiAdobephotoshop />,
		},
		{
			title: "XD",
			icon: <SiAdobexd />,
		},
	];

	gsap.config({
		nullTargetWarn: false,
		trialWarn: false,
	});

	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;
	let direction = -1;

	// const slideUp = {
	// 	initial: {
	// 		y: 300,
	// 	},
	// 	enter: {
	// 		y: 0,
	// 		transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
	// 	},
	// };

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: (e) => (direction = e.direction * -1),
			},
			x: "-500px",
		});
		requestAnimationFrame(animate);
	}, []);

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		requestAnimationFrame(animate);
		xPercent += 0.04 * direction;
	};

	return (
		<motion.section
			// variants={slideUp}
			initial="initial"
			animate="enter"
			className="container relative overflow-hidden my-8"
		>
			<h2 className="text-lg text-white">
				Quelques outils et langages que nous utilisons pour la création
				de nos sites !
			</h2>
			<div className="relative min-h-20 my-10">
				<div className="absolute">
					<div ref={slider} className="relative whitespace-nowrap">
						<div className="relative m-0 flex " ref={firstText}>
							{items.map((item, index) => (
								<div
									key={index}
									className="grid justify-items-center gap-2 mx-5"
								>
									<span className="text-xl">{item.icon}</span>
									<span className="text-sm">
										{item.title}
									</span>
								</div>
							))}
						</div>
						<div
							className="absolute top-0 left-full m-0 flex"
							ref={secondText}
						>
							{items.map((item, index) => (
								<div
									key={index}
									className="grid justify-items-center gap-2 mx-5"
								>
									<span className="text-xl">{item.icon}</span>
									<span className="text-sm">
										{item.title}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
