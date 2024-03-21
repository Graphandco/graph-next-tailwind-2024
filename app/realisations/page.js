import GridReas from "./GridReas";

export const metadata = {
	title: "Nos prestations de créations de sites Web  | Graph and Co",
	description:
		"Découvrez nos différentes offres et offrez-vous un site web adapté à vos besoins et à votre budget",
};

async function getStrapiData(path) {
	const baseUrl = `${process.env.STRAPI_API_URL}`;
	try {
		const response = await fetch(baseUrl + path, { cache: "no-store" });
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}
// const res = await fetch(`${process.env.STRAPI_API_URL}/realisations`);

const Realisations = async () => {
	const strapiData = await getStrapiData("/api/realisations?populate=*");
	const realisations = strapiData.data;
	// const { title } = strapiData;
	return (
		<>
			<h1>Réalisations</h1>
			<GridReas realisations={realisations} />
		</>
	);
};

export default Realisations;
