import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import Magnetic from "../ui/Magnetic";

const Footer = () => {
	return (
		<footer className="bg-background py-12">
			<div className="container grid grid-cols-2 lg:grid-cols-4  gap-x-4 gap-y-8">
				<div className="grid justify-center gap-4 text-center">
					<div className="text-contrast font-title uppercase text-lg">
						Nous appeler
					</div>
					<Magnetic>
						<a
							href="tel:0661619998"
							className="mx-auto border border-primary p-4 rounded-md"
						>
							<FaMobileAlt />
						</a>
					</Magnetic>
					<div className="footer__column__description">
						<div className="text-sm">Par téléphone</div>
						<a
							title="M'appeler"
							href="tel:0661619998"
							className="text-contrast hover:text-primary transition"
						>
							06 61 61 99 98
						</a>
					</div>
				</div>
				<div className="grid justify-center gap-4 text-center">
					<div className="text-contrast font-title uppercase text-lg">
						Nous écrire
					</div>
					<Magnetic>
						<a
							href="mailto:contact@graphandco.com"
							className="mx-auto border border-primary p-4 rounded-md"
						>
							<FaEnvelope />
						</a>
					</Magnetic>
					<div className="footer__column__description">
						<div className="text-sm">Par mail</div>
						<a
							title="M'envoyer un email'"
							href="mailto:contact@graphandco.com"
							className="text-contrast hover:text-primary transition text-sm md:text-md"
						>
							contact@graphandco.com
						</a>
					</div>
				</div>
				<div className="grid justify-center gap-4 text-center">
					<div className="text-contrast font-title uppercase text-lg">
						Nous trouver
					</div>
					<Magnetic>
						<a className="mx-auto border border-primary p-4 rounded-md">
							<FaMapMarkerAlt />
						</a>
					</Magnetic>

					<div className="text-sm">
						1, rue de la Lucelle <br></br>68127
						Sainte-Croix-en-Plaine
					</div>
				</div>
				<div className="grid justify-center gap-4 text-center">
					<div className="text-contrast font-title uppercase text-lg">
						Liens
					</div>
					<ul>
						<li>
							<Link
								className="text-sm hover:text-primary transition leading-3"
								href="/mentions-legales"
							>
								Mentions légales
							</Link>
						</li>
						<li>
							{" "}
							<Link
								className="text-sm hover:text-primary transition leading-3"
								href="/politique-de-confidentialite"
							>
								Politique de confidentialité
							</Link>
						</li>
					</ul>
					<div className="flex justify-center items-center gap-2 text-sm">
						<Image
							src="/img/logo.svg"
							alt="Site Logo"
							width={25}
							height={25}
						/>
						Graph and Co {new Date().getFullYear()}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
