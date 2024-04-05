"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";

export const FAQ = () => {
	const [selected, setSelected] = useState(TABS[0]);

	return (
		<section className="overflow-hidden mt-8">
			<h2 className="text-xl mb-4 text-contrast">
				Nous répondons à vos questions
			</h2>
			<Tabs selected={selected} setSelected={setSelected} />
			<Questions selected={selected} />
		</section>
	);
};

// const Heading = () => {
// 	return (
// 		<>
// 			<div className="relative z-10 flex flex-col items-center justify-center">
// 				<span className="mb-8 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text font-medium text-transparent">
// 					Let's answer some questions
// 				</span>
// 				<span className="mb-8 text-5xl font-bold">FAQs</span>
// 			</div>

// 			<span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
// 		</>
// 	);
// };

const Tabs = ({ selected, setSelected }) => {
	return (
		<div className="relative z-10 flex flex-wrap items-center gap-4">
			{TABS.map((tab) => (
				<button
					onClick={() => setSelected(tab)}
					className={`relative overflow-hidden whitespace-nowrap rounded-full border-[1px] px-2 py-1 text-sm font-medium transition-colors duration-500 hover:bg-primary hover:text-black ${
						selected === tab
							? "border-primary text-black"
							: "border-primary bg-transparent"
					}`}
					key={tab}
				>
					<span className="relative z-10">{tab}</span>
					<AnimatePresence>
						{selected === tab && (
							<motion.span
								initial={{ y: "100%" }}
								animate={{ y: "0%" }}
								exit={{ y: "100%" }}
								transition={{
									duration: 0.2,
									ease: "backIn",
								}}
								className="absolute inset-0 z-0 bg-primary"
							/>
						)}
					</AnimatePresence>
				</button>
			))}
		</div>
	);
};

const Questions = ({ selected }) => {
	return (
		<div className="mt-6 max-w-3xl">
			<AnimatePresence mode="wait">
				{Object.entries(QUESTIONS).map(([tab, questions]) => {
					return selected === tab ? (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{
								duration: 0.2,
								ease: "backIn",
							}}
							className="space-y-4"
							key={tab}
						>
							{questions.map((q, idx) => (
								<Question key={idx} {...q} />
							))}
						</motion.div>
					) : undefined;
				})}
			</AnimatePresence>
		</div>
	);
};

const Question = ({ question, answer }) => {
	const [open, setOpen] = useState(false);

	return (
		<motion.div
			animate={open ? "open" : "closed"}
			className={`rounded-xl border-[1px] border-slate-700 px-4 transition-colors ${
				open ? "bg-card" : "bg-transparent"
			}`}
		>
			<button
				onClick={() => setOpen((pv) => !pv)}
				className="flex w-full items-center justify-between gap-4 py-4"
			>
				<span
					className={`text-left text-lg font-medium transition-colors ${
						open ? "text-slate-50" : "text-slate-400"
					}`}
				>
					{question}
				</span>
				<motion.span
					variants={{
						open: {
							rotate: "45deg",
						},
						closed: {
							rotate: "0deg",
						},
					}}
				>
					<FiPlus
						className={`text-2xl transition-colors ${
							open ? "text-primary" : "text-contrast"
						}`}
					/>
				</motion.span>
			</button>
			<motion.div
				initial={false}
				animate={{
					height: open ? "fit-content" : "0px",
					marginBottom: open ? "24px" : "0px",
				}}
				className="overflow-hidden text-slate-400"
			>
				<p>{answer}</p>
			</motion.div>
		</motion.div>
	);
};

const TABS = ["Domaine", "Mobile dev", "UI/UX", "Copywriting"];

const QUESTIONS = {
	Domaine: [
		{
			question: "Suis-je propriétaire de mon nom de domaine ?",
			answer: "Le nom de domaine est enregistré à VOTRE nom, nous en assurons simplement la gestion. Vous pouvez le récupérer ou le transférer à tout moment.",
		},
		{
			question:
				"Je n'y connais rien en informatique, serai-je capable d'ajouter des actualités sur mon site ?",
			answer: "Bien sûr ! Nos sites sont conçus pour que les contenus (textes, images...) puissent être édités facilement, sans besoin de grosses connaissances en informatique. Nous vous formerons pour une prise en main rapide et efficace.",
		},
		{
			question:
				"Mon ancien site buggait souvent. Comment me prémunir de ce risque ?",
			answer: "Nos sites sont constamment maintenus à jour pour éviter cela, les éventuels bugs sont éliminés avant livraison et nous assurons le support technique tout au long du partenariat.",
		},
		{
			question:
				"Je suis pressé(e) ! Combien de temps prendra la création de mon site ?",
			answer: "Tout dépend du site que vous souhaitez avoir. Les sites les plus complexes prennent bien sûr plus de temps, mais si vous êtes réactif et nous donnez toutes les informations (oui c'est un travail d'équipe !), le délai habituel est de 2 à 3 semaines en moyenne.",
		},
	],
	"Mobile dev": [
		{
			question: "What is mobile development?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "Can you do both iOS and Android?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "Can you help with app store optimization?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "How long does it take?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
	],
	"UI/UX": [
		{
			question: "What is UI/UX?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "Can you audit my existing site?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "How do you perform research?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "Does it make sense for my company?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
	],
	Copywriting: [
		{
			question: "What is copywriting?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "Can you write my blog?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "Can you also help with ad design?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
		{
			question: "How much does it cost?",
			answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
		},
	],
};
