import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./Magnetic";

export default function index({
	children,
	backgroundColor = "var(--contrast)",
	...attributes
}) {
	const circle = useRef(null);
	let timeline = useRef(null);
	let timeoutId = null;
	useEffect(() => {
		timeline.current = gsap.timeline({ paused: true });
		timeline.current
			.to(
				circle.current,
				{
					top: "-25%",
					width: "150%",
					duration: 0.2,
					ease: "power3.in",
				},
				"enter"
			)
			.to(
				circle.current,
				{ top: "-150%", width: "125%", duration: 0.15 },
				"exit"
			);
	}, []);

	const manageMouseEnter = () => {
		if (timeoutId) clearTimeout(timeoutId);
		timeline.current.tweenFromTo("enter", "exit");
	};

	const manageMouseLeave = () => {
		timeoutId = setTimeout(() => {
			timeline.current.play();
		}, 300);
	};

	return (
		<Magnetic>
			<div
				className=" rounded-full bg-primary cursor-pointer relative flex items-center justify-center px-14 py-4 w-fit font-semibold text-black"
				style={{ overflow: "hidden" }}
				onMouseEnter={() => {
					manageMouseEnter();
				}}
				onMouseLeave={() => {
					manageMouseLeave();
				}}
				{...attributes}
			>
				{children}
				<div
					ref={circle}
					style={{ backgroundColor }}
					className="w-full h-[150%] absolute rounded-[50%] top-full -z-10"
				></div>
			</div>
		</Magnetic>
	);
}
