import { ContactForm } from "./ContactForm";

export const metadata = {
	title: "Contactez-nous | Graph and Co",
	description:
		"Laissez-nous un message pour toute demande d'information sur la création de votre site web à Colmar",
};

const Contact = () => {
	return (
		<div className="container">
			<h1>Contact</h1>
			<h2 className="text-lg text-contrast py-5">
				Une envie, un projet ?
			</h2>
			<p>
				Vous souhaitez avoir un site web créé à votre image, qui vous
				ressemble et qui corresponde à vos valeurs ? Nous sommes là pour
				vous conseiller et vous guider en fonction de vos besoins et de
				votre budget. Chaque projet est différent et ne peut grandir
				qu'en avançant ensemble. Nous serons ravis de définir ensemble
				LE site taillé pour vous.
			</p>
			<p>
				N'hésitez pas à nous contacter pour toute demande d'information
				! Nous nous ferons un plaisir de revenir vers vous rapidement.
			</p>
			<ContactForm />
		</div>
	);
};

export default Contact;
