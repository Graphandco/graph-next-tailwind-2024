"use client";
import React from "react";
import HeaderNav from "./HeaderNav";
import useScrollPosition from "@/hooks/useScrollPosition";
import { AnimatePresence } from "framer-motion";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
	const navLinks = [
		{
			name: "Accueil",
			href: "/",
		},
		{
			name: "Prestations",
			href: "/prestations",
		},
		{
			name: "Réalisations",
			href: "/realisations",
		},
		{
			name: "Contact",
			href: "/contact",
		},
	];

	const scrollPosition = useScrollPosition();
	const dynamicOpacity = `calc(${scrollPosition}% - 50%)`;
	// const logoRef = useRef(null);
	// const { scrollYProgress } = useScroll({
	//     target: logoRef,
	//     offset: ['0 1' /*starts bottom of viewport crosses top of element*/, '1.33 1'],
	// });
	const logoWidth = scrollPosition > 100 ? "30px" : "40px";
	const logoFontSize = scrollPosition > 100 ? "18px" : "23px";

	return (
		<header className="sticky top-0 z-50 overflow-hidden w-full border-b border-card">
			<div
				className="header-overlay absolute inset-0 bg-overlay -z-10 backdrop-blur-sm backdrop-saturate-150"
				style={{ opacity: dynamicOpacity }}
			></div>
			<div className="container py-3 flex justify-between">
				<HeaderLogo logoWidth={logoWidth} logoFontSize={logoFontSize} />
				<HeaderNav navLinks={navLinks} />
			</div>
		</header>
	);
};

export default Header;
