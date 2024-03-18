import LottieRocket from "@/components/lottie/LottieRocket";
import CustomButton from "@/components/ui/CustomButton";
// import CustomButton from "@/components/ui/CustomButton";
import Magnetic from "@/components/ui/Magnetic";
import React from "react";

const Hero = () => {
	return (
		<div className="hero container flex flex-col-reverse justify-center md:grid md:grid-cols-[1.5fr_1fr] items-center min-h-[calc(100vh-64px)]">
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
			<div className="w-40 h-36 md:w-72 md:h-70 mx-auto">
				<LottieRocket />
			</div>
		</div>
	);
};

export default Hero;
