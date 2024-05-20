import Atouts from "./(home)/Atouts";
import Competences from "./(home)/Competences";
import Competences2 from "./(home)/Competences2";
import { Counters } from "./(home)/Counters";
import Hero from "./(home)/Hero";
import LastBlogs from "./(home)/LastBlogs";
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
			<Competences2 />
			<Competences />
			<Atouts />
			<LastReas />
			<Counters />
			<LastBlogs />
		</>
	);
}
