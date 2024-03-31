import getPostMetadata from "@/utils/getPostMetadata";
import Postsgrid from "./Postsgrid";
import FilterButtons from "./FilterButtons";

export default function Home() {
	const postMetadata = getPostMetadata("blogposts");

	return (
		<div className="container postsContainer">
			<h1>Notre blog</h1>
			<FilterButtons />
			<Postsgrid posts={postMetadata} />
		</div>
	);
}
