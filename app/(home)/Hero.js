"use client";
import LottieRocket from "@/components/lottie/LottieRocket";
import CustomButton from "@/components/ui/CustomButton";
// import CustomButton from "@/components/ui/CustomButton";
import Magnetic from "@/components/ui/Magnetic";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
	const rocket = {
		// type: 'spring',
		// damping: 15,
		// stiffness: 200,
		duration: 0.75,
		delay: 0.3,
	};
	const content = {
		duration: 0.3,
	};
	return (
		<div className="hero container flex flex-col-reverse justify-center md:grid md:grid-cols-[1.5fr_1fr] items-center">
			<div className="grid grid-cols-1">
				<div className="grid gap-5 py-5">
					<div className="uppercase text-contrast">
						Un métier, une passion
					</div>
					<div className="hero-title">Création de sites web</div>
					<p>
						Nous sommes spécialisés dans la réalisation de sites
						web. Moderne et intuitif, votre site sera un puissant
						levier pour accroitre la vitalité de votre entreprise.
					</p>
					<CustomButton secondary>Voir nos prestations</CustomButton>
				</div>
			</div>
			<motion.div
				className="hero-lottie"
				transition={rocket}
				initial={{ y: "700px" }}
				animate={{ y: "0px" }}
			>
				<LottieRocket />
			</motion.div>
		</div>
	);
};

export default Hero;
