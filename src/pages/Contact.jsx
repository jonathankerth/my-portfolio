import {
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaStackOverflow,
	FaEnvelope,
} from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Styles from "../styles/Contact.module.css";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/Projects", label: "Projects" },
	{ href: "/about", label: "About" },
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

export default function Contact() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className={Styles.backgroundImage}></div>
			<Head>
				<title>Contact - Software Engineer Portfolio</title>
				<meta
					name="description"
					content="Get in touch with me for collaborations or opportunities"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">Contact me here!</h1>
				<div className="flex items-center mt-8 space-x-4">
					<a
						href="mailto:jonathanpkerth@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Email"
						className="group"
					>
						<FaEnvelope className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
					</a>
					<a
						href="https://www.linkedin.com/in/jonathankerth"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="group"
					>
						<FaLinkedin className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
					</a>
					<a
						href="https://github.com/jonathankerth"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="group"
					>
						<FaGithub className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
					</a>
					<a
						href="https://stackoverflow.com/users/21791075/jonathan-kerth"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Stack Overflow"
						className="group"
					>
						<FaStackOverflow className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
					</a>
					<a
						href="https://twitter.com/jonathankerth"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Twitter"
						className="group"
					>
						<FaTwitter className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
					</a>
				</div>
			</main>
			<footer className="flex items-center justify-center w-full h-24 border-t">
				<Link href="/">Back to home</Link>
			</footer>
		</div>
	);
}
