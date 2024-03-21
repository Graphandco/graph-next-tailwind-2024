"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import Magnetic from "../ui/Magnetic";

const HeaderNav = ({ navLinks }) => {
	const pathname = usePathname();

	return (
		<nav className="items-center gap-7 hidden md:flex ">
			{navLinks.map((link) => {
				return (
					<Magnetic key={link.href} className="">
						<Link
							href={link.href}
							className={`inline-block relative before:content-[''] before:absolute before:-left-3 before:bottom-[8px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-primary before:transition-all hover:before:translate-y-0 before:opacity-0 hover:before:opacity-100 hover:text-contrast  ${
								pathname === link.href
									? "text-contrast before:opacity-100 before:translate-y-0"
									: "text-foreground before:-translate-y-5"
							}`}
						>
							{link.name}
						</Link>
					</Magnetic>
				);
			})}
			<ModeToggle />
		</nav>
	);
};

export default HeaderNav;
