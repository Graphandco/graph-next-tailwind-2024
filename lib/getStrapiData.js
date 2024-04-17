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
export default getStrapiData;
