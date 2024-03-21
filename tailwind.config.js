/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
		fontSize: {
			base: [
				"1.2rem",
				{
					lineHeight: "1.8rem",
					letterSpacing: "-0.01em",
					fontWeight: "500",
				},
			],
			xs: [
				"1rem",
				{
					lineHeight: "1.8rem",
					letterSpacing: "-0.01em",
					fontWeight: "500",
				},
			],
			sm: [
				"1.1rem",
				{
					lineHeight: "1.6rem",
					letterSpacing: "-0.01em",
					fontWeight: "500",
				},
			],
			lg: [
				"1.4rem",
				{
					lineHeight: "1.6rem",
					letterSpacing: "-0.01em",
					fontWeight: "500",
				},
			],
			xl: [
				"clamp(30px,20px + 2vw,45px)",
				{
					lineHeight: "1.5rem",
					letterSpacing: "-0.01em",
					fontWeight: "500",
				},
			],
			"3xl": [
				"1.875rem",
				{
					lineHeight: "2.25rem",
					letterSpacing: "-0.02em",
					fontWeight: "700",
				},
			],
			"title-lg": [
				"clamp(30px,25px + 2vw,40px)",
				{ fontFamily: "var(--title-font)" },
			],
			"last-reas-title": [
				"clamp(30px,20px + 2vw,45px)",
				// { fontFamily: "var(--title-font)" },
			],
		},
		container: {
			center: true,
			padding: "5vw",
			screens: {
				"2xl": "1400px",
			},
		},
		screens: {
			xs: "400px",
			sm: "550px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				text: ["var(--text-font)"],
				title: ["var(--title-font)"],
			},
			colors: {
				contrast: "var(--contrast)",
				overlay: "var(--overlay)",
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
			},
			backgroundImage: {
				// "site-bg": "url('/img/logo.png')",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
