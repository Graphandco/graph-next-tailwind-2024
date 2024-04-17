"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import CustomButton from "@/components/ui/CustomButton";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import ReaContent from "./ReaContent";

const ImageGridHero = ({ realisation }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	console.log(realisation);

	return (
		<>
			<section ref={targetRef} className=" h-[350vh]">
				<div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-rows-3 gap-4 overflow-hidden">
					<Copy
						scrollYProgress={scrollYProgress}
						realisation={realisation}
					/>
					<Images
						scrollYProgress={scrollYProgress}
						realisation={realisation}
					/>
					<Circles />
				</div>
			</section>

			<ReaContent realisation={realisation} />
		</>
	);
};

const Copy = ({ scrollYProgress, realisation }) => {
	const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
	const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
	const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

	return (
		<motion.div
			style={{
				scale: copyScale,
				opacity: copyOpacity,
				y: copyY,
			}}
			className="absolute px-8 w-full h-screen z-20 flex flex-col items-center justify-center"
		>
			<h1 className="text-center max-w-xl">{realisation.title}</h1>
			<p className="text-center max-w-xl mb-6">
				{realisation.description}
			</p>
			<div className="flex items-center gap-4">
				<CustomButton>
					<Link href={realisation.link} target="blank">
						Voir le site
					</Link>
				</CustomButton>
			</div>
		</motion.div>
	);
};

const Images = ({ scrollYProgress, realisation }) => {
	const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);

	const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);
	const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
	const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
	const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
	const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
	const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
	const image4OffsetY = useTransform(
		scrollYProgress,
		[0, 1],
		["-145%", "0%"]
	);
	const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
	const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
	const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
	const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

	return (
		<>
			<motion.div
				className="col-span-2 relative z-10"
				style={{
					backgroundImage: `url(${process.env.STRAPI_API_URL}${realisation.thumbnail.data.attributes.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					scale,
					x: image1Offset,
					y: image1Offset,
				}}
			/>
			<motion.div
				className="row-span-2 relative z-10"
				style={{
					backgroundImage: `url(${process.env.STRAPI_API_URL}${realisation.image2.data.attributes.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					scale,
					x: image2OffsetX,
					y: image2OffsetY,
				}}
			/>

			<motion.div
				className="row-span-2 relative z-10"
				style={{
					backgroundImage: `url(${process.env.STRAPI_API_URL}${realisation.image3.data.attributes.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					scale,
					x: image3OffsetX,
					y: image3OffsetY,
				}}
			/>
			<motion.div
				className="relative z-10"
				style={{
					backgroundImage: `url(${process.env.STRAPI_API_URL}${realisation.image4.data.attributes.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					scale,
					x: image4OffsetX,
					y: image4OffsetY,
				}}
			/>

			<motion.div
				className="relative z-10"
				style={{
					backgroundImage: `url(${process.env.STRAPI_API_URL}${realisation.image5.data.attributes.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					scale,
					x: image5OffsetX,
					y: image5OffsetY,
				}}
			/>
			<motion.div
				className="relative z-10"
				style={{
					backgroundImage: `url(${process.env.STRAPI_API_URL}${realisation.image6.data.attributes.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					scale,
					x: image6OffsetX,
					y: image6OffsetY,
				}}
			/>
		</>
	);
};

const Circles = () => (
	<>
		<div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-primary rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
		<div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-primary rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
	</>
);

export default ImageGridHero;
