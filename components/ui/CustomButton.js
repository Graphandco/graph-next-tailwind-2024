"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./Magnetic";
// import styled from "styled-components";

export default function CustomButton({ children, secondary, ...attributes }) {
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
					duration: 0.4,
					ease: "power3.in",
				},
				"enter"
			)
			.to(
				circle.current,
				{ top: "-150%", width: "125%", duration: 0.25 },
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
				secondary={secondary}
				className={`rounded-3xl cursor-pointer relative flex items-center px-6 py-6 justify-center w-fit overflow-hidden`}
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
					className={`absolute w-full h-[150%] top-full rounded-3xl ${(
						props
					) => (props.secondary ? "var(--primary)" : "white")}`}
				></div>
			</div>
		</Magnetic>
	);
}

// const CustomButton = styled.div`
// 	padding-block: clamp(10px, 5px + 0.9vw, 15px);
// 	padding-inline: clamp(30px, 15px + 2.5vw, 50px);
// 	border: ${(props) =>
// 		props.secondary ? "2px solid var(--secondary)" : "none"};
// 	background-color: ${(props) =>
// 		props.secondary ? "var(--secondary)" : "var(--primary)"};

// 	p,
// 	span,
// 	a {
// 		color: ${(props) =>
// 			props.secondary ? "var(--primary)" : "var(--secondary)"};
// 		position: relative;
// 		z-index: 1;
// 		transition: color 0.4s linear;
// 		font-weight: 600;
// 		text-transform: uppercase;
// 		font-size: clamp(16px, 0.8vw + 10px, 19px);
// 	}

// 	&:hover {
// 		p,
// 		span,
// 		a {
// 			color: ${(props) =>
// 				props.secondary ? "var(--secondary)" : "var(--secondary)"};
// 		}
// 	}
// `;
