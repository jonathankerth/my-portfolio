import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Resume.module.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/contact", label: "Contact" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
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

export default function Resume() {
	return (
		<div className={styles.container}>
			<div className={styles.backgroundImage}></div>
			<Head>
				<title>Resume - Software Engineer Portfolio</title>
				<meta
					name="description"
					content="My resume as a software engineer showcasing my skills, experience, and education."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<main className={styles.main}>
				<h1 className={styles.title}>My Resume</h1>

				<div className={styles.resumeContent}>
					{/* Personal Information */}
					<div className={styles.section}>
						<h2 className={styles.sectionTitle}>Personal Information</h2>
						<p>Name: Your Name</p>
						<p>Email: your.email@example.com</p>
						<p>Phone: (123) 456-7890</p>
						<p>LinkedIn: linkedin.com/in/yourprofile</p>
						<p>GitHub: github.com/yourusername</p>
					</div>

					{/* Skills */}
					<div className={styles.section}>
						<h2 className={styles.sectionTitle}>Skills</h2>
						<p>JavaScript, React, Next.js, Node.js, Express, MongoDB, etc.</p>
					</div>

					{/* Experience */}
					<div className={styles.section}>
						<h2 className={styles.sectionTitle}>Experience</h2>
						{/* Job 1 */}
						<div>
							<h3 className={styles.sectionSubtitle}>
								Job Title - Company Name
							</h3>
							<p>Start Date - End Date</p>
							<ul>
								<li>Responsibility 1</li>
								<li>Responsibility 2</li>
								<li>Responsibility 3</li>
							</ul>
						</div>
						{/* Additional jobs can be added here */}
					</div>

					{/* Education */}
					<div className={styles.section}>
						<h2 className={styles.sectionTitle}>Education</h2>
						<div>
							<h3 className={styles.sectionSubtitle}>
								Degree - Institution Name
							</h3>
							<p>Start Year - End Year</p>
						</div>
						{/* Additional degrees can be added here */}
					</div>

					{/* Certifications */}
					<div className={styles.section}>
						<h2 className={styles.sectionTitle}>Certifications</h2>
						<ul>
							<li>Certification Name - Issuing Organization</li>
							{/* Additional certifications can be added here */}
						</ul>
					</div>
				</div>

				<div className={styles.download}>
					<a href={require("../../public/jkerth-resume.pdf")} download>
						Download My Resume
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<Link href="/">← Back to home</Link>
			</footer>
		</div>
	);
}
