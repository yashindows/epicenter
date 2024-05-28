import React from "react"
import styles from "./header.module.css"
import { Link, NavLink } from "react-router-dom"
import logo from "/header-logo.svg"
import phoneIcon from "../../assets/icons/phone.svg"
import locationIcon from "../../assets/icons/location.svg"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.logoBtn}>
            <img src={logo} alt="" />
          </Link>
          <div className={styles.headerLinks}>
            <NavLink to="/services">Услуги</NavLink>
            <NavLink to="/contacts" className={styles.navLink}>
              Контакты
            </NavLink>
          </div>
        </nav>
        <div className={styles.headerInfo}>
          <div className="info-text">
            <img src={phoneIcon} alt="" />
            <a href="tel:+79294807505">8 929-480-75-05</a>
          </div>
          <div className="info-text">
            <img src={locationIcon} alt="" />
            ул. Смоленская,96
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
