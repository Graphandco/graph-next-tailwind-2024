import getStrapiData from "@/lib/getStrapiData";
import ImageGridHero from "./ImageGridHero";

const RealisationPage = async ({ params }) => {
	const strapiData = await getStrapiData(
		`/api/realisations/?filters[slug][$eq]=${params.slug}&populate=*`
	);
	const realisation = strapiData.data[0].attributes;
	return (
		<>
			<ImageGridHero realisation={realisation} />
		</>
	);
};

export default RealisationPage;
