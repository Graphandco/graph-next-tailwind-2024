import Image from "next/image";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const GridReas = ({ realisations }) => {
	return (
		<>
			{/* {realisations.map((rea) => {
				const { id, title } = rea.attributes;
				console.log(rea.attributes.cover);
				return (
					<div key={id}>
						<div>{title}</div>
					</div>
				);
			})} */}
			<div className="grid-items">
				{realisations.map((rea) => {
					console.log(rea);
					const { title, description, grid } = rea.attributes;
					const imageURL = `${process.env.STRAPI_API_URL}${rea.attributes.thumbnail.data.attributes.url}`;
					return (
						<div
							className="grid-item relative"
							style={{ gridArea: `${grid}` }}
							key={rea.id}
						>
							<div className="grid-content">
								<div className="grid-title">{title}</div>
								<div className="grid-description">
									{description}
								</div>
							</div>
							<a className="grid-link" href={rea.href}>
								Voir <FaArrowTrendUp />
							</a>
							<div className="grid-image">
								{/* <Image src={imageURL} fill="true" /> */}
								<Image
									src="https://strapi.graphandco.com/uploads/troisieme_chance_3bdfe3d973.webp"
									fill="true"
								/>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default GridReas;
