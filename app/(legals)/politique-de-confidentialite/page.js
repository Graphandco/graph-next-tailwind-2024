import getStrapiData from "@/lib/getStrapiData";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Politique = async () => {
	const strapiData = await getStrapiData(
		`/api/textblocs/?filters[slug][$eq]=politique-confidentialite&populate=*`
	);
	const politique = strapiData.data[0].attributes;
	return (
		<div className="container">
			<h1>Politique de confidentialité</h1>
			<div className="text-content">
				<BlocksRenderer content={politique.content} />
			</div>
		</div>
	);
};

export default Politique;
