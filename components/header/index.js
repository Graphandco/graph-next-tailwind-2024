"use client";
import React, { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import useScrollPosition from "@/hooks/useScrollPosition";
import { motion, useScroll } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import HeaderLogo from "./HeaderLogo";
import { usePathname } from "next/navigation";
import { HeaderBurgerButton } from "./HeaderBurgerButton";
import HeaderMobileMenu from "./HeaderMobileMenu";

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
	const pathname = usePathname();

	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	const scrollPosition = useScrollPosition();
	const dynamicOpacity = `calc(${scrollPosition}% - 50%)`;
	const logoWidth = scrollPosition > 100 ? "30px" : "40px";
	const logoFontSize = scrollPosition > 100 ? "18px" : "23px";

	return (
		<motion.header className="sticky top-0 z-50 overflow-hidden w-full border-b border-card">
			<div
				className="header-overlay absolute inset-0 bg-overlay -z-10 backdrop-blur-sm backdrop-saturate-150 opacity-100"
				style={{ opacity: dynamicOpacity }}
			></div>
			<div className="container py-3 flex justify-between items-center">
				<HeaderLogo logoWidth={logoWidth} logoFontSize={logoFontSize} />
				<HeaderNav navLinks={navLinks} />
				<HeaderBurgerButton
					isActive={isActive}
					setIsActive={setIsActive}
				/>
			</div>
			<AnimatePresence mode="wait">
				{isActive && (
					<HeaderMobileMenu
						navLinks={navLinks}
						setIsActive={setIsActive}
						pathname={pathname}
					/>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Header;
