import style from "./Footer.module.scss";
import bird from "@/app/_assets/bird.png";

export default function Footer() {
	return (
		<footer className={style.footer}>
			<div className={style.label}>
				<img src={bird.src} alt="ISAE, bird icon" className={style.icon} />
				<h3 className={style.title}>ISAE</h3>
				<p className={style.description}>
					ISAE est un service qui vous permet de gérer votre identité numérique.
				</p>
			</div>
			<div className={style.categories}>
				<div className={style.category}>
					<h3 className={style.title}>Liens</h3>
					<ul className={style.links}>
						<li className={style.link}>
							<a href="/info">À propos</a>
						</li>
						<li className={style.link}>
							<a href="/info">Contact</a>
						</li>
						<li className={style.link}>
							<a href="/info">CGU</a>
						</li>
						<li className={style.link}>
							<a href="/info">Mentions Légales</a>
						</li>
					</ul>
				</div>
				<div className={style.category}>
					<h3 className={style.title}>Support</h3>
					<ul className={style.links}>
						<li className={style.link}>
							<a href="/info">FAQ</a>
						</li>
						<li className={style.link}>
							<a href="/info">Contact</a>
						</li>
					</ul>
				</div>
				<div className={style.category}>
					<h3 className={style.title}>Réseaux Sociaux</h3>
					<ul className={style.links}>
						<li className={style.link}>
							<a href="/info">Facebook</a>
						</li>
						<li className={style.link}>
							<a href="/info">Twitter</a>
						</li>
						<li className={style.link}>
							<a href="/info">Instagram</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
