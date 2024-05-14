"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import CustomButton from "@/components/ui/CustomButton";

const ReasHeader = ({ text }) => {
	return (
		<div className="text-content grid grid-cols sm:grid-cols-[3fr_2fr] gap-6 items-center py-8">
			<BlocksRenderer content={text.content} />
			<div className="grid gap-4 justify-center text-center">
				<div className="text-contrast text-title text-lg">
					Envie d'échanger sur votre projet ?
				</div>
				<div className="mx-auto">
					<CustomButton>Contactez-nous</CustomButton>
				</div>
			</div>
		</div>
	);
};

export default ReasHeader;
