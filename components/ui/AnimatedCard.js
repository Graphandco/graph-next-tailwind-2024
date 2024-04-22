"use client";
import { motion } from "framer-motion";

const AnimatedCard = ({ title }) => {
	return (
		<div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-card p-0.5 transition-all duration-500 hover:scale-[1.01]">
			<div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-800 p-8 ">
				<h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
					{title}
				</h4>
				<p className="relative z-10 text-slate-400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Est ipsum sed blanditiis iste molestias nemo nobis
					repellendus nisi dolorum itaque optio impedit cum voluptatem
					facilis minima, quasi laborum. Nihil, quaerat.
				</p>
			</div>

			<motion.div
				initial={{ rotate: "0deg" }}
				animate={{ rotate: "360deg" }}
				style={{ scale: 1.75 }}
				transition={{
					repeat: Infinity,
					duration: 3.5,
					ease: "linear",
				}}
				className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-indigo-200/0 to-primary  transition-opacity duration-500 "
			/>
		</div>
	);
};

export default AnimatedCard;
