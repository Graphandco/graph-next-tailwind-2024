import getStrapiData from "@/lib/getStrapiData";
import ImageGridHero from "./ImageGridHero";

const RealisationPage = async ({ params }) => {
	const strapiData = await getStrapiData(
		`/api/realisations/?filters[slug][$eq]=${params.slug}&populate=*`
	);
	const realisation = strapiData.data[0].attributes;
	const strapiURL = process.env.STRAPI_API_URL;
	return (
		<>
			<ImageGridHero realisation={realisation} strapiURL={strapiURL} />
		</>
	);
};

export default RealisationPage;
