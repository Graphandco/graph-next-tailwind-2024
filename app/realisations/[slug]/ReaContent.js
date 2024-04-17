import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import CustomButton from "@/components/ui/CustomButton";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const ReaContent = ({ realisation }) => {
	const slides = [
		process.env.STRAPI_API_URL + realisation.thumbnail.data.attributes.url,
		process.env.STRAPI_API_URL + realisation.image2.data.attributes.url,
		process.env.STRAPI_API_URL + realisation.image3.data.attributes.url,
		process.env.STRAPI_API_URL + realisation.image4.data.attributes.url,
		process.env.STRAPI_API_URL + realisation.image5.data.attributes.url,
		process.env.STRAPI_API_URL + realisation.image6.data.attributes.url,
	];

	return (
		<div className="container py-12">
			<div className="title-xl">{realisation.title}</div>

			<BlocksRenderer
				content={realisation.content}
				// blocks={{
				//   image: ({ image }) => {
				//     console.log(image);
				//     return (
				//       <Image
				//         src={image.url}
				//         width={image.width}
				//         height={image.height}
				//         alt={image.alternativeText || ""}
				//       />
				//     );
				//   },
				// }}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 my-10">
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					plugins={[
						Autoplay({
							delay: 4000,
						}),
					]}
					className="w-full max-w-sm"
				>
					<CarouselContent>
						{slides.map((slide, index) => {
							console.log(slide);
							return (
								<CarouselItem
									key={index}
									className="md:basis-1/2 lg:basis-1/3"
								>
									<span className="text-center text-xl">
										{index}
									</span>
									{/* <Image
									src={slide}
									alt={realisation.title}
									fill
								/> */}
								</CarouselItem>
							);
						})}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
				<div className="flex items-center justify-center">
					<CustomButton>
						<Link href={realisation.link} target="blank">
							Voir le site
						</Link>
					</CustomButton>
				</div>
			</div>
		</div>
	);
};

export default ReaContent;
