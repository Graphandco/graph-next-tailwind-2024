"use client";
import { motion } from "framer-motion";

const FilterButtons = ({ tabs, tabActive, setTabActive }) => {
	return (
		<div className="flex items-center justify-center flex-wrap gap-2 mb-5">
			{tabs.map((tab) => (
				<Chip
					text={tab}
					selected={tabActive === tab}
					setSelected={setTabActive}
					key={tab}
				/>
			))}
		</div>
	);
};

const Chip = ({ text, selected, setSelected }) => {
	return (
		<button
			onClick={() => setSelected(text)}
			className={`${
				selected
					? "text-black"
					: "text-bg hover:text-black hover:bg-primary"
			} text-sm transition-colors px-2.5 py-0.5 rounded-xl relative`}
		>
			<span className="relative z-10">{text}</span>
			{selected && (
				<motion.span
					layoutId="pill-tab"
					transition={{ type: "spring", duration: 0.5 }}
					className="absolute inset-0 z-0 bg-primary rounded-xl"
				></motion.span>
			)}
		</button>
	);
};

export default FilterButtons;
