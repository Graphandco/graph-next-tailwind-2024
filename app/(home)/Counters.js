"use client";

import { FaSmile, FaCode, FaSadCry } from "react-icons/fa";
import { GiSwordsPower } from "react-icons/gi";
// import { Counter } from "./Counter";
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

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
		<div className="container py-20 md:py-24 grid grid-cols-2 md:grid-cols-4 gap-6 items-start">
			{counters.map((counter) => (
				<Stat
					key={counter.title}
					num={counter.number}
					suffix={counter.suffix}
					subheading={counter.title}
					Icon={counter.icon}
				/>
			))}
		</div>
	);
};

const Stat = ({ num, suffix, decimals = 0, subheading, Icon }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		if (!isInView) return;

		animate(0, num, {
			duration: 2.5,
			repeat: 0,
			onUpdate(value) {
				if (!ref.current) return;

				ref.current.textContent = value.toFixed(decimals);
			},
		});
	}, [num, decimals, isInView]);

	return (
		<div className="flex flex-col items-center gap-2 md:gap-4">
			<Icon className="text-primary text-xl" />
			<span className="text-center text-xl text-contrast">
				<span ref={ref}></span>
				{suffix}
			</span>
			<span className="text-center text-sm text-contrast">
				{subheading}
			</span>
		</div>
	);
};
