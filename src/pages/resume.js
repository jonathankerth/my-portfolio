import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Resume.module.css";

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

				{/* Download Resume */}
				<div className={styles.download}>
					<a href="/path-to-your-resume.pdf" download>
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
