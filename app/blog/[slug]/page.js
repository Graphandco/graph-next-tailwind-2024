import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";

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
	// console.log(post);
	return (
		<article className="container">
			<h1>{post.data.title}</h1>
			<div className="blog-post">
				<Markdown>{post.content}</Markdown>
			</div>
		</article>
	);
}
