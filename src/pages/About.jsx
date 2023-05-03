import Head from "next/head";
import Link from "next/link";
import styles from "../styles/About.module.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
	{ href: "/resume", label: "Resume" },
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

export default function about() {
	const techStack = [
		{ name: "React", icon: "🚀" },
		{ name: "Next.js", icon: "⚡" },
		{ name: "Node.js", icon: "💚" },
		{ name: "Express", icon: "🛤️" },
		{ name: "MongoDB", icon: "🍃" },
	];

	return (
		<div className={styles.container}>
			<div className={styles.backgroundImage}></div>
			<Head>
				<title>About Me - Software Engineer Portfolio</title>
				<meta
					name="description"
					content="Learn more about my experience and the technologies I use"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<main className={styles.main}>
				<h1 className={styles.title}>About Me</h1>
				<h2 className={styles.subtitle}>Software Engineer & Web Developer</h2>
				<p className={styles.description}>
					I&apos;m a software engineer and web developer with a passion for
					building scalable and efficient web applications. I have experience
					working with modern web development technologies such as React,
					Next.js, Node.js, Express, and MongoDB.
				</p>
				<p className={styles.description}>
					I believe that continuous learning and adapting to new technologies is
					essential in this ever-evolving industry. When I&apos;m not coding, I
					enjoy reading about technology trends, learning new programming
					languages, and exploring new libraries and frameworks.
				</p>

				<h3 className={styles.subtitle}>Tech Stack</h3>
				<div className={styles.techStack}>
					{techStack.map((tech, index) => (
						<div key={index} className={styles.techStackItem}>
							<div className={styles.icon}>{tech.icon}</div>
							<p>{tech.name}</p>
						</div>
					))}
				</div>
			</main>

			<footer className={styles.footer}>
				<Link href="/">← Back to home</Link>
			</footer>
		</div>
	);
}
