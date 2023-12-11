import icon from "@/app/_assets/icon.jpg";
import style from "./Navbar.module.scss";
import Link from "next/link";
import { FaDollarSign } from "react-icons/fa";

export default function Navbar() {
	return (
		<header className={style.nav}>
			<Link href="/" className={style.homeButton}>
				<img src={icon.src} alt={"ISAE Icon"} className={style.icon} />
				<div className={style.text}>
					<h3 className={style.text__title}>ISAE</h3>
					<p className={style.text__subtitle}>Erase your footsteps</p>
				</div>
			</Link>
			<Link href="/pricing" className={style.pricingButton}>
				<FaDollarSign />
				<p>Nos tarifs</p>
			</Link>
		</header>
	);
}
