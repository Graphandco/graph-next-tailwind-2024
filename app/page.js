import { ModeToggle } from "@/components/header/ModeToggle";
import Magnetic from "@/components/ui/Magnetic";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ModeToggle />
			{/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
					Get started by editing&nbsp;
					<code className="font-mono font-bold">app/page.js</code>
				</p>
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
					<a
						className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{" "}
						<Image
							src="/img/site-bg.svg"
							alt="Vercel Logo"
							className="dark:invert"
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div> */}

			<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div>

			<h1>Création de sites web</h1>
			<Magnetic>
				<div className="font-text text-xl">Test de police</div>
			</Magnetic>
			<div className="text-contrast font-title">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
				doloremque!
			</div>
			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold text-contrast`}>
						Docs{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Find in-depth information about Next.js features and
						API.
					</p>
				</a>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold text-contrast`}>
						Learn{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Learn about Next.js in an interactive course
						with&nbsp;quizzes!
					</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold text-contrast`}>
						Templates{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Explore starter templates for Next.js.
					</p>
				</a>
			</div>
			<div className="colors grid gap-3">
				<div className="flex item-center gap-2">
					<div className="w-48">-background</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-background"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-card</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-card"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-card-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-card-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-popover</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-popover"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-popover-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-popover-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-primary</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-primary"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-primary-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-primary-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-secondary</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-secondary"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-secondary-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-secondary-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-muted</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-muted"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-muted-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-muted-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-accent</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-accent"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-accent-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-accent-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-destructive</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-destructive"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-destructive-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-destructive-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-border</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-border"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-input</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-input"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-ring</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-ring"></div>
				</div>
			</div>
		</main>
	);
}
