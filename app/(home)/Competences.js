"use client";
import React, { useEffect, useRef } from "react";
import {
	motion,
	useTransform,
	useScroll,
	useInView,
	useAnimation,
} from "framer-motion";

const Competences = () => {
	let ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"], //start when the start of the target reaches the end of the screen, end when end of the target reaches top of the screen
	});

	let y = useTransform(scrollYProgress, [0, 1], [0, -300]);

	return (
		<section ref={ref} className="bg-black/5 dark:bg-white/5">
			<div className="container py-32">
				{/* <motion.div style={{ y: y1 }}> */}
				<motion.div style={{ y }} className="text-[3rem]">
					Parallax
				</motion.div>
			</div>
		</section>
	);
};

export default Competences;
