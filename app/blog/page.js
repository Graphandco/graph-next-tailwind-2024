import getPostMetadata from "@/utils/getPostMetadata";
import Link from "next/link";

export default function Home() {
	const postMetadata = getPostMetadata("blogposts");

	return (
		<main>
			<div className="postsContainer">
				{postMetadata.map((post, postIndex) => {
					return (
						<div key={postIndex} post={post}>
							<Link href={`/blog/${post.slug}`}>
								{post.title}
							</Link>
						</div>
					);
				})}
			</div>
		</main>
	);
}
