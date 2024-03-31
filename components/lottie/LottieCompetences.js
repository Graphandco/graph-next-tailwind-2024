"use client";
import { useLottie } from "lottie-react";
import competences from "./competences.json";

function LottieCompetences() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: competences,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const { View } = useLottie(defaultOptions);

	return <>{View}</>;
}

export default LottieCompetences;
