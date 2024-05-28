import React from "react"
import styles from "./formTab.module.css"

function FormTab({ children, isActive, ...props }) {
  return (
    <div {...props} className={isActive ? styles.active : styles.inactive}>
      {children}
    </div>
  )
}

export default FormTab
