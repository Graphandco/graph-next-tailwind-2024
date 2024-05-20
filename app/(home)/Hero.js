"use client";
import LottieRocket from "@/components/lottie/LottieRocket";
import CustomButton from "@/components/ui/CustomButton";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
	const rocket = {
		// type: 'spring',
		// damping: 15,
		// stiffness: 200,
		duration: 0.6,
		delay: 0.2,
	};
	const content = {
		duration: 0.3,
	};
	return (
		<div className="hero container flex flex-col-reverse justify-center md:grid md:grid-cols-[1.5fr_1fr] items-center gap-4 md:gap-8">
			<div className="grid gap-5 justify-items-start py-5">
				<div className="uppercase text-contrast">
					Un métier, une passion
				</div>
				<div className="hero-title">Création de sites web</div>
				<p>
					Nous sommes spécialisés dans la réalisation de sites web.
					Moderne et intuitif, votre site sera un puissant levier pour
					accroitre la vitalité de votre entreprise.
				</p>
				<CustomButton primary>
					<Link href="/prestations">Voir nos prestations</Link>
				</CustomButton>
			</div>
			<motion.div
				className="hero-lottie py-5 mx-auto w-24 sm:w-40 "
				transition={rocket}
				initial={{ y: "600px" }}
				animate={{ y: "0px" }}
			>
				<LottieRocket />
			</motion.div>
		</div>
	);
};

export default Hero;
