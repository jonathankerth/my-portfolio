import Head from "next/head";
import Link from "next/link";
import styles from "../styles/About.module.css";

export default function AboutMe() {
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
