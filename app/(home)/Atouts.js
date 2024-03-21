import { ScreenFitText } from "@/components/ui/ScreenFitText";
import { FaPaintBrush, FaUserAlt, FaLock, FaMobileAlt } from "react-icons/fa";

const Atouts = () => {
	const items = [
		{
			title: "Interface utilisateur",
			description:
				"Un site internet unique, au design innovant et moderne",
			icon: <FaPaintBrush />,
		},
		{
			title: "Interface utilisateur",
			description:
				"Un site internet unique, au design innovant et moderne",
			icon: <FaUserAlt />,
		},
		{
			title: "Sécurité",
			description:
				"Votre site est protégé, les données de vos visiteurs sont sécurisées",
			icon: <FaLock />,
		},
		{
			title: "Accessibilité",
			description:
				"Un site accessible et intuitif sur tous les types de supports et tailles d'écrans",
			icon: <FaMobileAlt />,
		},
	];
	return (
		<section className="">
			<div className="container py-28 grid gap-5">
				<div className="-translate-y-8">
					<ScreenFitText text="Les atouts de votre site" />
				</div>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
					{items.map((item, index) => (
						<div
							key={index}
							className="atout-card backdrop-blur-md overflow-hidden grid justify-center items-center text-center gap-3 bg-black/5 dark:bg-white/5 p-6 rounded-xl"
						>
							<div className="text-primary mx-auto text-3xl">
								{item.icon}
							</div>
							<div className="text-contrast">{item.title}</div>
							<div className="text-xs leading-5">
								{item.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Atouts;
