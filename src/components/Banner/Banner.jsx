import React from "react"
import styles from "./banner.module.css"
import { Link } from "react-router-dom"
import icon from "../../assets/icons/banner-arrow.svg"

function Banner() {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.bannerTitle}>
            Рекламно-производственная компания “Эпицентр”
          </div>
          <ul className={styles.bannerText}>
            <li>Занимаемся разработкой рекламы</li>
            <li>Установка всех видов рекламных конструкций</li>
            <li>Реклама на мониторах</li>
          </ul>
          <Link to={"/services"} className={styles.bannerBtn}>
            Подробнее
          </Link>
        </div>
        <a className={styles.arrow} href="#next">
          <img src={icon} alt="" />
        </a>
      </section>
    </>
  )
}

export default Banner
