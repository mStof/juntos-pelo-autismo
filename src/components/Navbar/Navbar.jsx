import logo from "../../../public/logo.svg";
import imgBg from "@/../public/nav_bg.png"
import style from "./style.module.css"
import Link from "next/link";

export default function Navbar() {
    
  return (
    <nav className={style.navbar_container}>
        <img src={imgBg.src} alt="" className={style.imgBg_nav} />
        <img className={style.img} src={logo.src} alt="Logo img" />
        <div className={style.link_container}>
            <Link className={style.link} href="./">Sobre nós</Link>
            <Link className={style.link} href="#">Indicações</Link>
            <Link className={style.link} href="#">Legislação</Link>
            <Link className={style.link} href="#">Depoimento</Link>
            <Link className={style.link} href="#">Contato</Link>
        </div>
    </nav>
  )
}
