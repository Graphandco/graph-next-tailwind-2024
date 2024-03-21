import Image from "next/image";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { reas } from "@/app/realisations/data";

const GridReas = ({ realisations }) => {
	return (
		<>
			{realisations.map((rea) => {
				const { id, title } = rea.attributes;
				console.log(rea.attributes.cover);
				return (
					<div key={id}>
						<div>{title}</div>
					</div>
				);
			})}
			<div>GridReas</div>
			<div className="grid-items">
				{reas.map((rea, index) => {
					return (
						<div
							className="grid-item relative"
							style={{ gridArea: `${rea.grid}` }}
							key={index}
						>
							<div className="grid-content">
								<div className="grid-title">{rea.title}</div>
								<div className="grid-description">
									{rea.description}
								</div>
							</div>
							<a className="grid-link" href={rea.href}>
								Voir <FaArrowTrendUp />
							</a>
							<div className="grid-image">
								<Image src={rea.image} fill="true" />
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default GridReas;
