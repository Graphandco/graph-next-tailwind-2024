import Image from "next/image";
import Link from "next/link";
import React from "react";
import MagnetButton from "@/components/ui/MagnetButton";

const Intro = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-28 md:pb-32">
			<div>
				<p className="yellow-border">
					Selon votre profil et votre budget, plusieurs options
					s’offrent à vous. Quel que soit le pack choisi, votre site
					sera personnalisé pour épouser vos besoins et ceux de vos
					clients. Qu'il s'agisse d'un site vitrine ou d'un site de
					vente en ligne, il sera doté de toutes les fonctionnalités
					dont vous et vos clients avez besoin. Dans le futur, il sera
					envisageable d’en développer de nouvelles pour l’adapter aux
					évolutions de votre activité.
				</p>
			</div>
			<div className="grid gap-16 place-items-center">
				<Link
					href="/contact"
					className="text-white hover:text-primary text-lg"
				>
					Contactez-nous et discutons de votre projet !
				</Link>
				<MagnetButton />
			</div>
			{/* <Image
				className="mx-auto"
				src="img/prestations-lead.svg"
				alt="Intro prestations"
				width={300}
				height={423}
			/> */}
		</div>
	);
};

export default Intro;
