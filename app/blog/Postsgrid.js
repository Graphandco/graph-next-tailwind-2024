"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import FilteredButtons from "./FilterButtons";

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
			<div className="grid grid-cols-3 gap-5">
				{filteredBlogs.map((post, postIndex) => {
					return (
						<motion.div
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
							key={postIndex}
						>
							<Link
								href={`/blog/${post.slug}`}
								style={{
									backgroundImage: `url('${post.image}')`,
								}}
								className="bg-black px-5 py-3 aspect-[2/1] rounded-xl bg-cover flex justify-end items-end"
							>
								<div className="relative flex items-center gap-2 text-white before:content-[''] before:w-[6px] before:h-[6px] before:rounded-full before:bg-primary after:content[''] after:absolute after:bottom-0 after:w-full after:h-[1px] after:bg-primary after:radius-full">
									{post.title}
								</div>
							</Link>
						</motion.div>
					);
				})}
			</div>
		</>
	);
};

export default Postsgrid;
