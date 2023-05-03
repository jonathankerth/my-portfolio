import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Projects.module.css";

const projects = [
	{
		id: 1,
		title: "Project 1",
		description: "A brief description of Project 1",
		link: "https://example.com/project1",
	},
	{
		id: 2,
		title: "Project 2",
		description: "A brief description of Project 2",
		link: "https://example.com/project2",
	},
	// Add more projects as needed
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

			<main className={styles.main}>
				<h1 className={styles.title}>Projects</h1>

				<ul className={styles.projectList}>
					{projects.map((project) => (
						<li key={project.id} className={styles.projectItem}>
							<h3>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{project.title}
								</a>
							</h3>
							<p>{project.description}</p>
						</li>
					))}
				</ul>
			</main>

			<footer className={styles.footer}>
				<Link href="/">Back to home</Link>
			</footer>
		</div>
	);
}
