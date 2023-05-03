import {
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaStackOverflow,
	FaEnvelope,
} from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

export default function Contact() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen ">
			<div className={styles.backgroundImage}></div>
			<Head>
				<title>Contact - Software Engineer Portfolio</title>
				<meta
					name="description"
					content="Get in touch with me for collaborations or opportunities"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">Contact</h1>

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
