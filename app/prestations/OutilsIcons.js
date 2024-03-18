"use client";
import React from "react";
import {
	SiAdobe,
	SiApple,
	SiFacebook,
	SiGoogle,
	SiLinkedin,
	SiShopify,
	SiSoundcloud,
	SiSpotify,
	SiTiktok,
} from "react-icons/si";
import { useAnimate } from "framer-motion";

const OutilsIcons = () => {
	return (
		<div className=" py-12">
			<div className="mx-auto">
				<ClipPathLinks />
			</div>
		</div>
	);
};

const ClipPathLinks = () => {
	return (
		<div className="divide-y divide-contrast border-t border-b border-contrast">
			<div className="grid grid-cols-3 divide-x divide-contrast">
				<LinkBox Icon={SiGoogle} href="#" />
				<LinkBox Icon={SiShopify} href="#" />
				<LinkBox Icon={SiApple} href="#" />
			</div>
			<div className="grid grid-cols-5 divide-x divide-contrast">
				<LinkBox Icon={SiSoundcloud} href="#" />
				<LinkBox Icon={SiAdobe} href="#" />
				<LinkBox Icon={SiFacebook} href="#" />
				<LinkBox Icon={SiTiktok} href="#" />
				<LinkBox Icon={SiSpotify} href="#" />
			</div>
			<div className="grid grid-cols-2 divide-x divide-contrast">
				<LinkBox Icon={SiSoundcloud} href="#" />
				<LinkBox Icon={SiAdobe} href="#" />
			</div>
			<div className="grid grid-cols-4 divide-x divide-contrast">
				<LinkBox Icon={SiLinkedin} href="#" />
				<LinkBox Icon={SiLinkedin} href="#" />
				<LinkBox Icon={SiLinkedin} href="#" />
				<LinkBox Icon={SiLinkedin} href="#" />
			</div>
		</div>
	);
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
	left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
	bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
	top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
	right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
	left: [NO_CLIP, TOP_RIGHT_CLIP],
	bottom: [NO_CLIP, TOP_RIGHT_CLIP],
	top: [NO_CLIP, TOP_RIGHT_CLIP],
	right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
	const [scope, animate] = useAnimate();

	const getNearestSide = (e) => {
		const box = e.target.getBoundingClientRect();

		const proximityToLeft = {
			proximity: Math.abs(box.left - e.clientX),
			side: "left",
		};
		const proximityToRight = {
			proximity: Math.abs(box.right - e.clientX),
			side: "right",
		};
		const proximityToTop = {
			proximity: Math.abs(box.top - e.clientY),
			side: "top",
		};
		const proximityToBottom = {
			proximity: Math.abs(box.bottom - e.clientY),
			side: "bottom",
		};

		const sortedProximity = [
			proximityToLeft,
			proximityToRight,
			proximityToTop,
			proximityToBottom,
		].sort((a, b) => a.proximity - b.proximity);

		return sortedProximity[0].side;
	};

	const handleMouseEnter = (e) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: ENTRANCE_KEYFRAMES[side],
		});
	};

	const handleMouseLeave = (e) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: EXIT_KEYFRAMES[side],
		});
	};

	return (
		<a
			href={href}
			onMouseEnter={(e) => {
				handleMouseEnter(e);
			}}
			onMouseLeave={(e) => {
				handleMouseLeave(e);
			}}
			className="relative grid h-14 w-full place-content-center sm:h-20 md:h-38"
		>
			<Icon className="text-xl sm:text-3xl lg:text-4xl" />

			<div
				ref={scope}
				style={{
					clipPath: BOTTOM_RIGHT_CLIP,
				}}
				className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
			>
				<Icon className="text-xl sm:text-3xl md:text-4xl" />
			</div>
		</a>
	);
};
export default OutilsIcons;
