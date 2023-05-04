import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Projects.module.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/Contact", label: "Contact" },
	{ href: "/About", label: "About" },
	{ href: "/Resume", label: "Resume" },
];

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="fixed top-0 left-0 z-50 w-full py-4">
			<div className="max-w-screen-lg mx-auto px-4 md:px-8 flex justify-between items-center">
				<div className="hidden md:block">
					<ul className="flex space-x-8">
						{navLinks.map(({ href, label }) => (
							<li key={href}>
								<Link href={href} className="text-gray-800 hover:text-gray-800">
									{label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="md:hidden flex items-center">
					<button
						onClick={toggleMobileMenu}
						type="button"
						className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
						aria-label="toggle menu"
					>
						{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className="md:hidden absolute top-16 right-0  w-full">
					<ul className="px-8 py-4">
						{navLinks.map(({ href, label }) => (
							<li key={href} className="py-2">
								<Link href={href} className="text-gray-600 hover:text-gray-800">
									{label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};

const projects = [
	{
		id: 1,
		title: "Nicolas Cage Fan Page - Front-end",
		description:
			"A fan page for Nicolas Cage movies built with React and Bootstrap. Hosted on Netflify. Built to display a backend API I built: NicCage API.",
		link: "https://github.com/jonathankerth/nicCage-client",
	},
	{
		id: 2,
		title: "NicCage API",
		description:
			"A RESTful API built with Node.js, Express.js, MongoDB, and hosted on Heroku.",
		link: "https://github.com/jonathankerth/Nicolas-Cage-API",
	},
	{
		id: 3,
		title: "Pokedex",
		description:
			"A Pokedex to display traits, pictures and size of Pokemon. Built with Javascript.",
		link: "https://github.com/jonathankerth/pokemon-js",
	},
];
export default function Projects() {
	return (
		<div className={styles.container}>
			<div className={styles.backgroundImage}></div>
			<Head>
				<title>Projects - Software Engineer Portfolio</title>
				<meta
					name="description"
					content="A showcase of my software engineering projects"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<h1></h1>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<li
						key={project.id}
						className="project-container bg-white rounded-lg shadow-md"
					>
						<div className="p-6">
							<h3 className="text-xl font-bold mb-2">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-red-600 hover:text-red-800"
								>
									{project.title}
								</a>
							</h3>
							<p className="text-gray-700">{project.description}</p>
						</div>
					</li>
				))}
			</ul>
			<footer className={styles.footer}>
				<Link href="/">Back to home</Link>
			</footer>
		</div>
	);
}
