import Atouts from "./(home)/Atouts";
import Competences from "./(home)/Competences";
import Hero from "./(home)/Hero";
import { LastReas } from "./(home)/LastReas";

export const metadata = {
	title: "Créateur de sites web près de Colmar | Graph and Co",
	description:
		"Nous sommes une agence web basée près de Colmar spécialisée dans la réalisation de sites web modernes et intuitifs",
};

export default function Home() {
	return (
		<>
			<Hero />
			{/* <Competences />
			<Atouts /> */}
			<LastReas />
		</>
	);
}
