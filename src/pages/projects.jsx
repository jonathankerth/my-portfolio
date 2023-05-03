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
	{
		id: 3,
		title: "Project 3",
		description: "A brief description of Project 3",
		link: "https://example.com/project2",
	},
	{
		id: 4,
		title: "Project 4",
		description: "A brief description of Project 4",
		link: "https://example.com/project2",
	},
	{
		id: 5,
		title: "Project 5",
		description: "A brief description of Project 5",
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
			<h2 className="text-center text-white font-semibold mt-40 mb-10 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-6xl ">
				Thank you for checking out my projects
			</h2>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<li key={project.id} className="bg-white rounded-lg shadow-md">
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
