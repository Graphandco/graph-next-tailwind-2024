import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HeaderCurve from "./HeaderCurve";
import { ModeToggle } from "./ModeToggle";

export const menuSlide = {
	initial: { x: "calc(100% + 100px)" },
	enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
	exit: {
		x: "calc(100% + 100px)",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
};
export const slide = {
	initial: { x: 80 },
	enter: (i) => ({
		x: 0,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.05 * i,
		},
	}),
	exit: (i) => ({
		x: 80,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.05 * i,
		},
	}),
};
export const scale = {
	open: { scale: 1, transition: { duration: 0.3 } },
	closed: { scale: 0, transition: { duration: 0.4 } },
};

export default function HeaderMobileMenu({ navLinks, pathname }) {
	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className="burger-menu-wrapper"
		>
			<div className="burger-menu-content">
				<div className="burger-menu-nav">
					<div className="burger-menu-header">
						<p>Un métier, une passion</p>
					</div>
					<nav className="mobile-nav-items">
						{navLinks.map((link, index) => {
							return (
								<motion.div
									key={index}
									className="link"
									custom={index}
									variants={slide}
									initial="initial"
									animate="enter"
									exit="exit"
								>
									<Link
										href={link.href}
										className={
											pathname === `${link.href}`
												? "navlink active"
												: "navlink"
										}
									>
										{link.name}
									</Link>
								</motion.div>
							);
						})}
						<motion.div
							variants={slide}
							initial="initial"
							animate="enter"
							exit="exit"
							custom="5"
							className="absolute top-4 left-8"
						>
							<ModeToggle />
						</motion.div>
					</nav>
				</div>
			</div>
			<HeaderCurve />
		</motion.div>
	);
}
