"use client";
import { useRef, useLayoutEffect } from "react";

export const HeaderBurgerButton = ({ isActive, setIsActive }) => {
	const buttonRef = useRef(null);

	return (
		<div
			ref={buttonRef}
			className={`header-burger md:hidden scale-[0.7]  ${
				isActive ? "open" : "close"
			}`}
			onClick={() => {
				setIsActive(!isActive);
			}}
		>
			<div className="line line-top"></div>
			<div className="line line-middle"></div>
			<div className="line line-bottom"></div>
		</div>
	);
};
