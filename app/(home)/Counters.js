"use client";

import { FaSmile, FaCode, FaSadCry } from "react-icons/fa";
import { GiSwordsPower } from "react-icons/gi";
import { Counter } from "./Counter";

export const Counters = () => {
	const counters = [
		{
			number: 97,
			title: "Fidélisation client",
			suffix: "%",
			icon: FaSmile,
		},
		{
			number: 15,
			title: "Ans d'expérience",
			suffix: "",
			icon: GiSwordsPower,
		},
		{
			number: 197436,
			title: "Lignes de code",
			suffix: "",
			icon: FaCode,
		},
		{
			number: 12,
			title: "Demandes de réparation d'imprimante",
			suffix: "",
			icon: FaSadCry,
		},
	];

	return (
		<section className="counters py-28 md:py-32 grid grid-cols-2 md:grid-cols-4 gap-6 items-start">
			{counters.map((count, index) => (
				<Counter
					key={index}
					value={count.number}
					title={count.title}
					suffix={count.suffix}
					Icon={count.icon}
				/>
			))}
		</section>
	);
};
