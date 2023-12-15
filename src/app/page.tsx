"use client";

import React from "react";
import style from "./page.module.scss";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Link from "next/link";
import bird from "@/app/_assets/bird.png";
import { motion } from "framer-motion";
import serverImage from "@/app/_assets/illustration_server.png";
import lawsuitImage from "@/app/_assets/illustration_lawsuit.png";
import laptopImage from "@/app/_assets/illustration_laptop_guy.png";

export default function Home() {
	return (
		<React.Fragment>
			<Navbar />
			<nav className={style.banner}>
				<img src={bird.src} alt="ISAE Bird Icon" />
				<div>
					<h1 className={style.title}>ISAE</h1>
					<h3 className={style.subtitle}>Erase your footsteps</h3>
					<p className={style.motto}>
						<span className={style.motto__elem}>
							<strong>I</strong>dentity
						</span>
						<span className={style.motto__elem}>
							<strong>S</strong>ecurity
						</span>
						<span className={style.motto__elem}>
							<strong>A</strong>nonymity
						</span>
						<span className={style.motto__elem}>
							<strong>E</strong>-Reputation
						</span>
					</p>
				</div>
				<div className={style.right}>
					<div className={style.buttons}>
						<Link href="/login?t=register" className={style.button}>
							S'inscrire Gratuitement
						</Link>
						<Link href="/login?t=signin" className={style.button}>
							Se Connecter
						</Link>
					</div>
					<Link href="/recover" className={style.moreButton}>
						Avez-vous été victime d'usurpation d'identité ?
					</Link>
				</div>
			</nav>
			<main className={style.pageContent}>
				<motion.section
					className={style.section}
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<article className={style.description}>
						<h3 className={style.title}>Pourquoi ISAE ?</h3>
						<p className={style.text}>
							ISAE est un service qui vous permet de gérer votre identité
							numérique. Verifiez votre identité, sécurisez vos comptes et
							protégez votre réputation en ligne.
							<br />
							<br />
							Votre identité numérique est l'ensemble des informations vous
							concernant qui sont présentes sur Internet. Ces informations
							peuvent être visibles par tous et peuvent être utilisées à votre
							insu.
							<br />
							<br />
							ISAE vous permet de gérer votre identité numérique en toute
							sécurité.
						</p>
					</article>
					<img
						src={serverImage.src}
						alt="Illustration, man with a server, ISAE, data protection, flat lineart"
						className={style.illustration}
					/>
				</motion.section>
				<motion.section
					className={style.section}
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<article className={style.description}>
						<h3 className={style.title}>Comment ça marche ?</h3>
						<p className={style.text}>
							ISAE vous permet de vérifier votre identité numérique en toute
							sécurité. Il vous suffit de créer un compte et de nous fournir les
							informations nécessaires.
							<br />
							<br />
							Nous vous demanderons des informations personnelles telles que
							votre nom, prénom, adresse, numéro de téléphone, etc. Nous vous
							demanderons également des informations concernant vos comptes sur
							les réseaux sociaux.
							<br />
							<br />
							Nous vérifierons ensuite votre identité et vous pourrez ensuite
							utiliser notre service pour gérer votre identité numérique.
						</p>
					</article>
					<img
						src={lawsuitImage.src}
						alt="Illustration, lawsuit, protecting data, woman, equality, flat lineart"
						className={style.illustration}
					/>
				</motion.section>
				<motion.section
					className={style.section}
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<article className={style.description}>
						<h3 className={style.title}>Qui sommes-nous ?</h3>
						<p className={style.text}>
							ISAE est une entreprise spécialisée dans la gestion de l'identité
							numérique.
							<br />
							<br />
							Nous avons développé un service qui permet de gérer votre identité
							numérique en toute sécurité. Notre siège est situé à Paris, en
							France.
							<br />
							<br />
							Notre équipe est composée d'experts en sécurité informatique et en
							protection des données personnelles ainsi que des avocats
							spécialisés dans le droit de l'informatique et des nouvelles
							technologies.
						</p>
					</article>
					<img
						src={laptopImage.src}
						alt="Illustration, man with a laptop, looking nice, flat lineart"
						className={style.illustration}
					/>
				</motion.section>
			</main>
			<Footer />
		</React.Fragment>
	);
}
