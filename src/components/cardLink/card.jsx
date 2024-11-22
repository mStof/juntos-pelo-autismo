import Link from 'next/link'
import styles from './style.module.css'

export default function Card({icon, path = '#', color = "#f0f"}) {
  return (
    <div className={styles.link_card} style={{ '--_color': color }}>
        <Link href={path}>
            <img src={icon.img} alt={icon.alt} />
        </Link>
    </div>
  )
}