import Image from "next/image";
import Link from "next/link";
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
					const { title, description, grid, slug } = rea.attributes;
					const imageURL = `${process.env.STRAPI_API_URL}${rea.attributes.thumbnail.data.attributes.url}`;
					// console.log(imageURL);
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
							<Link
								className="grid-link"
								href={`realisations/${slug}`}
							>
								Voir <FaArrowTrendUp />
							</Link>
							<div className="grid-image">
								<Image
									src={imageURL}
									fill="true"
									alt={title}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									placeholder="empty" // "empty" | "blur" | "data:image/..."
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
