import React, { useState } from "react"
import styles from "./catalog.module.css"

function Card({ img, title, description, price }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <div onClick={openModal} className={styles.card}>
        <div className={styles.cardImage}>
          <img src={img} alt="" />
        </div>
        <p>{title}</p>
      </div>
      {isModalOpen && (
        <dialog open className={styles.productModal} onClose={closeModal}>
          <div className={styles.dialogWrapper}>
            <button className={styles.closeModal} onClick={closeModal}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.90828 2.27202L17.8182 18.1819M33.7281 34.0918L17.8182 18.1819M17.8182 18.1819L33.4099 2.59022L1.59008 34.41"
                  stroke="var(--text-color)"
                  stroke-width="4"
                />
              </svg>
            </button>
            <img src={img} className={styles.productImage} alt="" />
            <div className={styles.productInfo}>
              <div className={styles.productTitle}>{title}</div>
              <div className={styles.productDescription}>{description}</div>
              <div className={styles.productPrice}>Цена от {price} ₽</div>
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}

export default Card
