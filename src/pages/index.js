import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.backgroundImage}></div>
			<Head>
				<title>Software Engineer Portfolio</title>
				<meta
					name="description"
					content="A portfolio showcasing my skills and projects as a software engineer"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome, thanks for checking me out!</h1>

				<p className={styles.description}>
					Hi, I&apos;m <code className={styles.code}>Jonathan Kerth</code>
				</p>

				<div className={styles.grid}>
					<Link href="/projects" className={styles.card}>
						<h2>Projects &rarr;</h2>
						<p>Check out my amazing projects!</p>
					</Link>

					<Link href="/resume" className={styles.card}>
						<h2>Resume &rarr;</h2>
						<p>View my resume</p>
					</Link>

					<Link href="/About" className={styles.card}>
						<h2>About Me &rarr;</h2>
						<p>Learn more about my background and experience.</p>
					</Link>

					<Link href="/Contact" className={styles.card}>
						<h2>Contact &rarr;</h2>
						<p>Get in touch with me for collaborations or opportunities.</p>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://github.com/jonathankerth"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<picture>
							<img
								src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
								alt="GitHub Logo"
								width={32}
								height={32}
							/>
						</picture>
					</span>
				</a>
			</footer>
		</div>
	);
}
