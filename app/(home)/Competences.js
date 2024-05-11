"use client";
import {
	motion,
	useInView,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
import LottieCompetences from "@/components/lottie/LottieCompetences";
import CustomButton from "@/components/ui/CustomButton";

// import { ScreenFitText } from "@/components/ui/ScreenFitText";
import Link from "next/link";
import { useRef } from "react";

const Competences = () => {
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

	return (
		<section className="bg-black/5 dark:bg-white/5">
			<div className="container py-28 md:py-32">
				<motion.h2
					ref={targetRef}
					style={{ translateY }}
					className="text-xl text-contrast font-bold"
				>
					Nos compétences à votre service
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
					<div className="mt-8">
						<div className="text-content mt-8">
							<p>
								Notre expertise : faire décoller votre site pour
								séduire vos (futurs) clients. Graph and Co crée
								votre site sur-mesure, 100% responsive,
								performant, fiable et évolutif. En vous dotant
								d’un site internet à la hauteur de vos
								ambitions, nous vous rendrons visible sur
								internet pour que vos clients accèdent à votre
								offre, n’importe où, n’importe quand.
							</p>
							<p>
								Oui, chacun son métier. Le vôtre, être un expert
								dans votre domaine. Le nôtre, booster votre
								présence en ligne.
							</p>
							<p className="mb-10">
								Découvrez tout de suite{" "}
								<Link href="/prestations">nos prestations</Link>{" "}
								et trouvez celle adaptée à vos besoins !
							</p>
						</div>
						<CustomButton>
							<Link href="/realisations">
								Voir nos réalisations
							</Link>
						</CustomButton>
					</div>
					<LottieCompetences />
				</div>
			</div>
		</section>
	);
};

export default Competences;
