import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeaderLogo = ({ logoWidth, logoFontSize }) => {
	return (
		<Link href="/" className="header-logo flex items-center gap-2">
			<motion.div
				// ref={logoRef}
				className="header-logo-image transition-all"
				style={{
					width: logoWidth,
					// opacity: scrollYProgress,
				}}
			>
				<Image
					src="/img/logo.svg"
					alt="Logo Graph and Co"
					width={50}
					height={50}
					priority
				/>
			</motion.div>
			<motion.div
				className="header-logo-title text-contrast font-normal font-title min-w-max"
				style={{
					fontSize: logoFontSize,
					// opacity: scrollYProgress,
				}}
			>
				Graph & Co
			</motion.div>
		</Link>
	);
};

export default HeaderLogo;
