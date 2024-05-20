import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./Magnetic";
import { cva } from "class-variance-authority";

export default function index({
	className,
	intent,
	size,
	children,
	backgroundColor = "var(--contrast)",
	...props
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

	const button = cva(
		"overflow-hidden relative rounded-full cursor-pointer relative flex items-center justify-center w-fit font-semibold text-black",
		{
			variants: {
				intent: {
					primary: [
						"bg-primary",
						"text-black",
						"border-transparent",
						// "hover:bg-blue-600",
					],
					secondary: [
						"bg-white",
						"text-gray-800",
						"border-gray-400",
						// "hover:bg-gray-100",
					],
				},
				size: {
					small: ["py-2", "px-6"],
					medium: ["py-4", "px-12"],
				},
			},
			compoundVariants: [
				{ intent: "primary", size: "medium", class: "uppercase" },
			],
			defaultVariants: {
				intent: "primary",
				size: "medium",
			},
		}
	);

	return (
		<Magnetic>
			<div
				className={button({ intent, size, className })}
				{...props}
				onMouseEnter={() => {
					manageMouseEnter();
				}}
				onMouseLeave={() => {
					manageMouseLeave();
				}}
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
