"use client";
import { ScreenFitText } from "@/components/ui/ScreenFitText";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { useRef } from "react";

import { FaPaintBrush, FaUserAlt, FaLock, FaMobileAlt } from "react-icons/fa";

const Atouts = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
		// offset: ["start start", "end start"],
	});

	const translateY = useTransform(
		scrollYProgress,
		[0, 1],
		["50px", "-100px"]
	);

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
		<section className="">
			<div className="container py-28 md:py-32 grid gap-5">
				<motion.h2
					ref={targetRef}
					style={{ translateY }}
					className="text-xl text-contrast font-bold"
				>
					Les atouts de votre site
				</motion.h2>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
					{items.map((item, index) => (
						<motion.div
							key={index}
							className="atout-card backdrop-blur-md overflow-hidden grid justify-center items-center text-center gap-1 md:gap-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition p-3 md:p-4 lg:p-6 rounded-xl"
						>
							<div className="text-primary mx-auto text-3xl">
								{item.icon}
							</div>
							<div className="text-contrast">{item.title}</div>
							<div className="text-sm leading-5">
								{item.description}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Atouts;
