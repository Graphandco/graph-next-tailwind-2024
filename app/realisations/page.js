import GridReas from "./GridReas";
import getStrapiData from "@/lib/getStrapiData";
import ReasHeader from "./ReasHeader";

export const metadata = {
	title: "Nos prestations de créations de sites Web  | Graph and Co",
	description:
		"Découvrez nos différentes offres et offrez-vous un site web adapté à vos besoins et à votre budget",
};

const Realisations = async () => {
	const strapiData = await getStrapiData("/api/realisations?populate=*");
	const realisations = strapiData.data;

	const strapiDataText = await getStrapiData(
		`/api/textblocs/?filters[slug][$eq]=realisations&populate=*`
	);
	const reaTextContent = await strapiDataText.data[0].attributes;

	return (
		<>
			<div className="container">
				<h1>Réalisations</h1>
				<ReasHeader text={reaTextContent} />
			</div>
			<GridReas realisations={realisations} />
			{/* <GridReas /> */}
		</>
	);
};

export default Realisations;
