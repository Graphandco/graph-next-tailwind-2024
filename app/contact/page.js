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
			<ContactForm />
		</div>
	);
};

export default Contact;
