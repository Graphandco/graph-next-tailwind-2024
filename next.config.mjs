// /** @type {import('next').NextConfig} */

// const nextConfig = {
// 	image: {
// 		domains: ["strapi.graphandco.com"],
// 	},
// };

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "strapi.graphandco.com",
				pathname: "**",
			},
		],
	},
};
export default nextConfig;
