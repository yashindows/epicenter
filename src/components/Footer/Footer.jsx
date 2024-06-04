import React from "react"
import styles from "./footer.module.css"
import mailIcon from "../../assets/icons/mail.svg"
import phoneIcon from "../../assets/icons/phone.svg"
import locationIcon from "../../assets/icons/location.svg"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLinks}>
            <Link to="services">Услуги</Link>
            <Link to="contacts">Контакты</Link>
          </div>
          <div className={styles.distribution}>
            <div className={styles.distributionTitle}>
              Хотите быть в курсе всех акций? Подпишитесь на рассылку новостей!
            </div>
            <form action="" className={styles.distributionForm}>
              <input
                placeholder="Введите E-mail"
                type="email"
                className={styles.distributionField}
              />
              <input type="submit" value="Отправить" />
            </form>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerInfo}>
            <a href="" className="info-text">
              <img src={mailIcon} alt="" />
              epicentr@list.ru
            </a>
            <a href="" className="info-text">
              <img src={phoneIcon} alt="" />8 929-480-75-05
            </a>
            <a href="" className="info-text">
              <img src={locationIcon} alt="" />
              ул. Смоленская,96
            </a>
          </div>
          <div className={styles.footerMedia}>
            Соцсети:
            <a href="">
              <svg
                fill="#fff"
                width="36"
                height="36"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M62.8012 10.8004L53.4012 54.8004C52.7012 57.9004 50.9012 58.6004 48.3012 57.2004L34.2012 46.8004L27.3012 53.4004C26.6012 54.1004 25.9012 54.8004 24.3012 54.8004L25.4012 40.3004L51.7012 16.4004C52.8012 15.3004 51.4012 14.9004 50.0012 15.8004L17.3012 36.4004L3.2012 32.1004C0.1012 31.1004 0.1012 29.0004 3.9012 27.6004L58.7012 6.3004C61.4012 5.5004 63.7012 6.9004 62.8012 10.8004Z" />
              </svg>
            </a>
            <a href="">
              <svg
                fill="#fff"
                width="36"
                height="36"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M41.4 1H22.6C5.1 1 1 5.1 1 22.6V41.6C1 58.9 5.1 63 22.6 63H41.6C58.9 63 63 58.9 63 41.4V22.6C63 5.1 58.9 1 41.4 1ZM51 45.2H46.5C44.8 45.2 44.2 43.8 41.1 40.7C38.4 38 37.2 37.7 36.6 37.7C35.8 37.7 35.5 37.8 35.5 39.1V43.2C35.5 44.3 35.2 44.9 32.3 44.9C27.5 44.9 22.3 41.9 18.5 36.6C12.9 28.7 11.5 22.8 11.5 21.5C11.5 20.8 11.6 20.2 12.9 20.2H17.4C18.5 20.2 19 20.6 19.4 21.9C21.7 28.4 25.3 34 26.9 34C27.5 34 27.7 33.7 27.7 32.3V25.7C27.6 22.6 26 22.5 26 21.2C26 20.8 26.4 20.1 27.1 20.1H34.1C35.1 20.1 35.4 20.5 35.4 21.8V30.7C35.4 31.7 35.8 32 36.1 32C36.7 32 37.2 31.7 38.2 30.6C41.4 26.9 43.7 21.4 43.7 21.4C44 20.7 44.5 20.1 45.7 20.1H50.2C51.6 20.1 51.9 20.8 51.6 21.8C51 24.5 45.5 32.2 45.5 32.2C45.1 32.9 44.8 33.3 45.5 34.2C45.9 34.9 47.6 36.2 48.6 37.4C50.6 39.7 52 41.5 52.4 42.8C52.9 44.5 52.3 45.2 51 45.2Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
