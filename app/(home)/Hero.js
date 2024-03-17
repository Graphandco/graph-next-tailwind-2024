import LottieRocket from "@/components/lottie/LottieRocket";
// import CustomButton from "@/components/ui/CustomButton";
import Magnetic from "@/components/ui/Magnetic";
import React from "react";

const Hero = () => {
	return (
		<div className="hero container grid grid-cols-1 md:grid-cols-[1.5fr_1fr] items-center h-[calc(100vh-64px)]">
			<div className="grid gap-5 justify-items-start">
				<div className="uppercase text-contrast">
					Un métier, une passion
				</div>
				<div className="hero-title">Création de sites web</div>
				<p>
					Nous sommes spécialisés dans la réalisation de sites web.
					Moderne et intuitif, votre site sera un puissant levier pour
					accroitre la vitalité de votre entreprise.
				</p>
				{/* <Magnetic>
					<CustomButton>Voir nos prestations</CustomButton>
				</Magnetic> */}
			</div>
			<div className="w-72 h-70">
				<LottieRocket />
			</div>
		</div>
	);
};

export default Hero;
