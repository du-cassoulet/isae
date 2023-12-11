"use client";

import React, { useState } from "react";
import style from "./page.module.scss";
import icon from "@/app/_assets/icon.jpg";
import background from "@/app/_assets/login_background.webp";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Login({
	searchParams,
}: {
	searchParams: { t: string };
}) {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [confPasswordVisible, setConfPasswordVisible] = useState(false);

	return (
		<main className={style.pageContent}>
			<section className={style.loginSection}>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
				>
					<Link href="/" className={style.homeButton}>
						<img src={icon.src} alt={"ISAE Icon"} className={style.icon} />
						<div className={style.text}>
							<h3 className={style.text__title}>ISAE</h3>
							<p className={style.text__subtitle}>Erase your footsteps</p>
						</div>
					</Link>
				</motion.div>
				<motion.h1
					className={style.title}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					{searchParams.t === "signin" ? "Se Connecter" : "S'enregistrer"}
				</motion.h1>
				<motion.form
					className={style.loginForm}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					{searchParams.t === "signin" ? (
						<React.Fragment>
							<div className={style.field}>
								<p className={style.label}>Email / Nom d'utilisateur</p>
								<div className={style.inline}>
									<input type="email" className={style.inputField} />
								</div>
							</div>
							<div className={style.field}>
								<p className={style.label}>Mot de passe</p>
								<div className={style.inline}>
									<input
										type={passwordVisible ? "text" : "password"}
										className={style.inputField}
									/>
									<button
										type="button"
										onClick={() => setPasswordVisible(!passwordVisible)}
										className={style.passwordVisibleButton}
									>
										{passwordVisible ? <FaEye /> : <FaEyeSlash />}
									</button>
								</div>
								<Link href="forgot-password" className={style.link}>
									Mot de passe oublié ?
								</Link>
							</div>
						</React.Fragment>
					) : (
						<React.Fragment>
							<div className={style.field}>
								<p className={style.label}>Email</p>
								<div className={style.inline}>
									<input type="email" className={style.inputField} />
								</div>
							</div>
							<div className={style.field}>
								<p className={style.label}>Nom d'utilisateur</p>
								<div className={style.inline}>
									<input type="text" className={style.inputField} />
								</div>
							</div>
							<div className={style.field}>
								<p className={style.label}>Mot de passe</p>
								<div className={style.inline}>
									<input
										type={passwordVisible ? "text" : "password"}
										className={style.inputField}
									/>
									<button
										type="button"
										onClick={() => setPasswordVisible(!passwordVisible)}
										className={style.passwordVisibleButton}
									>
										{passwordVisible ? <FaEye /> : <FaEyeSlash />}
									</button>
								</div>
							</div>
							<div className={style.field}>
								<p className={style.label}>Confirmer le mot de passe</p>
								<div className={style.inline}>
									<input
										type={confPasswordVisible ? "text" : "password"}
										className={style.inputField}
									/>
									<button
										type="button"
										onClick={() => setConfPasswordVisible(!confPasswordVisible)}
										className={style.passwordVisibleButton}
									>
										{confPasswordVisible ? <FaEye /> : <FaEyeSlash />}
									</button>
								</div>
							</div>
						</React.Fragment>
					)}
					<button type="submit" className={style.submitButton}>
						{searchParams.t === "signin" ? "Se Connecter" : "S'enregistrer"}
					</button>
				</motion.form>
			</section>
			<Image
				src={background.src}
				alt="ISAE Login Background, Illustration"
				className={style.background}
				height={1080}
				width={1440}
				blurDataURL={background.blurDataURL}
				placeholder="blur"
			/>
		</main>
	);
}
