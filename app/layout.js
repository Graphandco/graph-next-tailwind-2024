import { ThemeProvider } from "@/components/theme-provider";
import "./globals.scss";
import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SmoothScrollProvider } from "@/context/SmoothScrollContext";

const mostranuova = localFont({
	src: [
		{
			path: "../public/fonts/mostranuova.ttf",
			weight: "400",
		},
		{
			path: "../public/fonts/mostranuova-600.ttf",
			weight: "600",
		},
		{
			path: "../public/fonts/mostranuova-700.ttf",
			weight: "700",
		},
		{
			path: "../public/fonts/mostranuova-700.ttf",
			weight: "900",
		},
		{
			path: "../public/fonts/mostranuova-700.ttf",
			weight: "700",
		},
	],
	variable: "--text-font",
});
const mostranuova2 = localFont({
	src: [
		{
			path: "../public/fonts/mostranuova2.ttf",
			weight: "400",
		},
	],
	variable: "--title-font",
});
const foundation = localFont({
	src: [
		{
			path: "../public/fonts/foundation.ttf",
			weight: "400",
		},
	],
	variable: "--foundation",
});

export default function RootLayout({ children }) {
	return (
		<html
			lang="fr"
			className="dark bg-fixed bg-cover"
			suppressHydrationWarning
			style={{ backgroundImage: `url("/img/site-bg.svg")` }}
		>
			<head />
			<body
				className={`${mostranuova.variable} ${mostranuova2.variable} ${foundation.variable} `}
				suppressHydrationWarning={true}
			>
				{/* <div className="site-bg fixed inset-0 -z-10 object-top">
					<Image
						className="object-cover brightness-[3.5] dark:brightness-[-10]"
						src="/img/site-bg.svg"
						alt="Image de fond du site"
						fill={true}
						priority
					/>
				</div> */}
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					// disableTransitionOnChange
				>
					{/* <SmoothScrollProvider options={{ smooth: true }}> */}
					<Header />
					<main className="grow">{children}</main>
					<Footer />
					<Toaster />
					{/* </SmoothScrollProvider> */}
				</ThemeProvider>
			</body>
		</html>
	);
}
