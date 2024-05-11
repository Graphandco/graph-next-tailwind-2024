import getPostMetadata from "@/utils/getPostMetadata";
import Postsgrid from "./Postsgrid";

export default function Home() {
	const postMetadata = getPostMetadata("blogposts");

	return (
		<div className="container postsContainer pb-10">
			<h1>Notre blog</h1>
			<Postsgrid posts={postMetadata} />
		</div>
	);
}
