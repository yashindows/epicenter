import React, { useEffect, useState } from "react"
import styles from "./tab.module.css"
import plus from "../../assets/icons/plus.svg"

function Tab({ title, description, onClick }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {}, [isOpen])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.tab} onClick={handleToggle}>
      <div className={styles.tabTitle}>{title}</div>
      <img className={styles.showMore} src={plus} alt="" />
      {isOpen && <div className={styles.tabText}>{description}</div>}
    </div>
  )
}

export default Tab
