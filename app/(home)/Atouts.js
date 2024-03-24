"use client";
import { ScreenFitText } from "@/components/ui/ScreenFitText";
import { useScroll, motion, useTransform } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";
import { FaPaintBrush, FaUserAlt, FaLock, FaMobileAlt } from "react-icons/fa";
import { ScrollTrigger } from "gsap/all";

const Atouts = () => {
	const ref = useRef(null);
	const gsapRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });

	gsap.registerPlugin(ScrollTrigger);

	gsap.to(gsapRef.current, {
		yPercent: -200,
		ease: "none",
		scrollTrigger: {
			trigger: ref.current,
			start: "top bottom", // the default values
			end: "bottom top",
			scrub: true,
		},
	});

	function useParallax(value, distance) {
		return useTransform(value, [0, 1], [-distance, distance]);
	}
	const y = useParallax(scrollYProgress, 200);

	const items = [
		{
			title: "Interface utilisateur",
			description:
				"Un site internet unique, au design innovant et moderne",
			icon: <FaPaintBrush />,
		},
		{
			title: "Interface utilisateur",
			description:
				"Un site internet unique, au design innovant et moderne",
			icon: <FaUserAlt />,
		},
		{
			title: "Sécurité",
			description:
				"Votre site est protégé, les données de vos visiteurs sont sécurisées",
			icon: <FaLock />,
		},
		{
			title: "Accessibilité",
			description:
				"Un site accessible et intuitif sur tous les types de supports et tailles d'écrans",
			icon: <FaMobileAlt />,
		},
	];
	return (
		<section ref={ref} className="">
			<div className="container py-28 grid gap-5">
				<div className="text-3xl font-bold row-start-2 col-start-2">
					<motion.div style={{ y }}>Parallax Scroll Y</motion.div>
				</div>
				<div
					className="text-3xl font-bold row-start-2 col-start-2"
					ref={gsapRef}
				>
					Parallax Scroll 2
				</div>
				<div className="-translate-y-8">
					<ScreenFitText text="Les atouts de votre site" />
				</div>

				<div
					data-scroll
					data-scroll-speed={0.1}
					className="grid grid-cols-2 lg:grid-cols-4 gap-5"
				>
					{items.map((item, index) => (
						<div
							key={index}
							className="atout-card backdrop-blur-md overflow-hidden grid justify-center items-center text-center gap-3 bg-black/5 dark:bg-white/5 p-6 rounded-xl"
						>
							<div className="text-primary mx-auto text-3xl">
								{item.icon}
							</div>
							<div className="text-contrast">{item.title}</div>
							<div className="text-xs leading-5">
								{item.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Atouts;
