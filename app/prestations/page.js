import { FAQ } from "./FAQ";
import Intro from "./Intro";
import Marquee from "./Marquee";
import ParallaxSection from "@/components/ui/ParallaxSection";
import PriceCards from "./PriceCards";

export const metadata = {
	title: "Nos prestations de créations de sites Web | Graph and Co",
	description:
		"Découvrez nos différentes offres et obtenez le site web adapté à vos besoins et à votre budget",
};

const Prestations = () => {
	return (
		<>
			<div className="container">
				<h1>Prestations</h1>
				<Intro />
			</div>
			<PriceCards />
			<ParallaxSection
				imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				subheading="Collaborate"
				heading="Built for all of us."
			>
				<div className="text-xl py-64">Test</div>
			</ParallaxSection>
			<ParallaxSection
				imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				subheading="Collaborate"
				heading="Built for all of us."
			>
				<div className="text-xl py-64">Test</div>
			</ParallaxSection>
			<ParallaxSection
				imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				subheading="Collaborate"
				heading="Built for all of us."
			>
				<div className="text-xl py-64">Test</div>
			</ParallaxSection>
			<ParallaxSection
				imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				subheading="Collaborate"
				heading="Built for all of us."
			>
				<div className="text-xl py-64">Test</div>
			</ParallaxSection>
			<FAQ />
			<Marquee />
		</>
	);
};

export default Prestations;
