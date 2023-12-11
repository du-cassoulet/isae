"use client";

import React from "react";
import style from "./page.module.scss";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
	{
		title: "Gratuit",
		aspects: {
			positives: [
				"Détecte vos traces sur internet.",
				"Détecte les usurpations d'identité.",
			],
			negatives: ["Aucune démarches administratives."],
		},
		price: 0,
	},
	{
		title: "Pass Client",
		aspects: {
			positives: [
				"Détecte vos traces sur internet.",
				"Détecte les usurpations d'identité.",
			],
			negatives: ["Pas de remboursement possible", "Liste d'attente"],
		},
		price: 49.99,
	},
	{
		title: "Gold Pass",
		aspects: {
			positives: [
				"Détecte vos traces sur internet.",
				"Détecte les usurpations d'identité.",
				"Service prioritaire",
			],
			negatives: ["Pas de remboursement possible", "Liste d'attente"],
		},
		price: 99.99,
	},
	{
		title: "VIP",
		aspects: {
			positives: [
				"Détecte vos traces sur internet.",
				"Détecte les usurpations d'identité.",
				"Service prioritaire",
				"Avocats spécialisés",
				"Remboursement possible",
			],
			negatives: [],
		},
		price: 249.99,
	},
	{
		title: "VIP+",
		aspects: {
			positives: [
				"Détecte vos traces sur internet.",
				"Détecte les usurpations d'identité.",
				"Service prioritaire",
				"Remboursement possible",
				"Avocats spécialisés",
				"Démarche express",
			],
			negatives: [],
		},
		price: 499.99,
	},
];

const mostPopular = 2;

export default function Pricing() {
	return (
		<React.Fragment>
			<Navbar />
			<main className={style.pageContent}>
				<motion.h1
					className={style.title}
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ velocity: 100 }}
				>
					Nos tarifs
				</motion.h1>
				<section className={style.plans}>
					{plans.map((plan, key) => (
						<motion.article
							key={key}
							className={mostPopular === key ? style.popularPlan : style.plan}
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 * key }}
						>
							<h3 className={style.title}>{plan.title}</h3>
							<p className={style.price}>
								{plan.price.toLocaleString("fr")}
								<span className={style.currency}>€</span>/an
							</p>
							<div className={style.aspects}>
								{plan.aspects.positives.map((a, i) => (
									<p key={i} className={style.aspects__positive}>
										{a}
									</p>
								))}
								{plan.aspects.negatives.map((a, i) => (
									<p key={i} className={style.aspects__negative}>
										{a}
									</p>
								))}
							</div>
							<Link href={`/buy?p=${key}`} className={style.button}>
								{plan.price > 0 ? "Acheter" : "Sélectionner"}
							</Link>
						</motion.article>
					))}
				</section>
			</main>
			<Footer />
		</React.Fragment>
	);
}
