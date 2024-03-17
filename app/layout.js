import { ThemeProvider } from "@/components/theme-provider";
import "./globals.scss";
import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/header";

const mostranuova = localFont({
	src: [
		{
			path: "../public/fonts/mostranuova.ttf",
			weight: "400",
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

export const metadata = {
	title: "Graph and Co, créateurs de sites web près de Colmar",
	description:
		"Nous sommes une agence web basée près de Colmar spécialisée dans la réalisation de sites web modernes et intuitifs",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<head />
			<body
				className={`${mostranuova.variable} ${mostranuova2.variable} ${foundation.variable}`}
			>
				<div className="site-bg fixed inset-0 -z-10">
					<Image
						className="object-cover brightness-[3.5] dark:brightness-[-10]"
						src="/img/site-bg.svg"
						alt="Image de fond du site"
						fill={true}
						priority
					/>
				</div>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					// disableTransitionOnChange
				>
					<Header />
					<main className="grow">{children}</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
