"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FilteredButtons from "./FilterButtons";
import CustomButton from "@/components/ui/CustomButton";

const Postsgrid = ({ posts }) => {
	const tabs = ["Tous", "Code", "News", "Design"];
	const [tabActive, setTabActive] = useState(tabs[0]);

	const filteredBlogs = posts.filter((post) =>
		tabActive === "Tous"
			? post
			: post.category.includes(tabActive.toLocaleLowerCase())
	);

	return (
		<>
			<FilteredButtons
				tabs={tabs}
				tabActive={tabActive}
				setTabActive={setTabActive}
			/>
			<div className="grid grid-cols sm:grid-cols-3 md:grid-cols-4 gap-5">
				<AnimatePresence>
					{filteredBlogs.map((post, postIndex) => {
						return (
							<motion.div
								layout
								initial={{ opacity: 0, rotate: "25deg" }}
								animate={{ opacity: 1, rotate: 0 }}
								exit={{ opacity: 0, rotate: "25deg" }}
								transition={{ duration: 0.2 }}
								key={postIndex}
								whileHover={{
									rotate: "2.5deg",
									scale: 1.05,
								}}
								className="grid gap-3 bg-black/5 dark:bg-white/5 rounded-xl"
							>
								<Link
									href={`/blog/${post.slug}`}
									style={{
										backgroundImage: `url('${post.image}')`,
									}}
									className="bg-black px-5 py-3 aspect-[1.5/1]  bg-cover flex justify-end items-end rounded-t-xl"
								></Link>
								<div className="p-6 grid gap-5">
									<div className="relative flex items-center gap-2 text-white before:content-[''] before:w-[6px] before:h-[6px] before:rounded-full before:bg-primary after:content[''] after:absolute after:bottom-0 after:w-full after:h-[1px] after:bg-primary after:radius-full">
										{post.title}
									</div>
									<p className="leading-6">
										{post.description}
									</p>
									<CustomButton href={`/blog/${post.slug}`}>
										Lire la suite
									</CustomButton>
								</div>
							</motion.div>
						);
					})}
				</AnimatePresence>
			</div>
		</>
	);
};

export default Postsgrid;
