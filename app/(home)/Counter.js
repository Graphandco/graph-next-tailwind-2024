"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export const Counter = ({
	value,
	title,
	Icon,
	direction = "up",
	suffix = "",
}) => {
	const ref = useRef(null);
	const motionValue = useMotionValue(direction === "down" ? value : 0);
	const springValue = useSpring(motionValue, {
		damping: 100,
		stiffness: 50,
	});
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	useEffect(() => {
		if (isInView) {
			motionValue.set(direction === "down" ? 0 : value);
		}
	}, [motionValue, isInView]);

	useEffect(
		() =>
			springValue.on("change", (latest) => {
				if (ref.current) {
					ref.current.textContent = Intl.NumberFormat("fr-FR").format(
						latest.toFixed(0)
					);
				}
			}),
		[springValue]
	);

	return (
		<div className="grid place-items-center gap-2 text-center">
			<Icon />
			<div className="counters-number">
				<span ref={ref} />
				{suffix && <span>{suffix}</span>}
			</div>

			<div className="counters-title">{title}</div>
		</div>
	);
};
