import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

export default function Contact() {
	const [status, setStatus] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.target;
		const data = new FormData(form);

		const response = await fetch("/api/contact", {
			method: "POST",
			body: data,
		});

		if (response.ok) {
			setStatus("Message sent! I'll get back to you shortly.");
			form.reset();
		} else {
			setStatus("Oops! Something went wrong. Please try again.");
		}
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Contact - Software Engineer Portfolio</title>
				<meta
					name="description"
					content="Get in touch with me for collaborations or opportunities"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Contact</h1>

				<div className={styles.contactForm}>
					<h2>Send me a message</h2>
					<form onSubmit={handleSubmit}>
						<label htmlFor="name" className={styles.formLabel}>
							Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className={styles.formInput}
							required
						/>

						<label htmlFor="email" className={styles.formLabel}>
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className={styles.formInput}
							required
						/>

						<label htmlFor="message" className={styles.formLabel}>
							Message:
						</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							className={styles.formTextarea}
							required
						></textarea>

						<button type="submit" className={styles.formButton}>
							Send
						</button>
					</form>

					{status && <p className={styles.formStatus}>{status}</p>}
				</div>
			</main>

			<footer className={styles.footer}>
				<Link href="/">← Back to home</Link>
			</footer>
		</div>
	);
}
