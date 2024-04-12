import { FAQ } from "./FAQ";
import Intro from "./Intro";
import Marquee from "./Marquee";

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
			<FAQ />
			<Marquee />
		</>
	);
};

export default Prestations;
