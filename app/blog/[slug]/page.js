import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";

function getPostContent(slug) {
	const folder = "blogposts/";
	const file = folder + `${slug}.md`;
	const content = fs.readFileSync(file, "utf8");

	const matterResult = matter(content);
	return matterResult;
}

export const generateStaticParams = async () => {
	const posts = getPostMetadata("blogposts");
	return posts.map((post) => ({ slug: post.slug }));
};
export async function generateMetadata({ params, searchParams }) {
	const posts = getPostMetadata("blogposts");
	const post = posts.find((post) => post.slug === params.slug);
	return {
		title: `${post.title}  | Graph and Co`,
		description: `${post.description}`,
	};
}

export default function RecipePage(props) {
	const slug = props.params.slug;
	const post = getPostContent(slug);
	return (
		<article className="container">
			<div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[3fr_2fr] mb-5">
				<div className="">
					<h1>{post.data.title}</h1>
					<p className="text-contrast">{post.data.description}</p>
				</div>
				<Image
					className="mt-8 rounded-lg object-contain"
					src={post.data.image}
					width={500}
					height={370}
					alt={post.data.title}
				/>
			</div>
			<hr className="border-primary my-5" />
			<div className="blog-post mb-10">
				<Markdown>{post.content}</Markdown>
			</div>
		</article>
	);
}
