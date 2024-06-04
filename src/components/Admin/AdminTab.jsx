import React from "react"
import styles from "./admin.module.css"

function AdminTab({ children, isActive, ...props }) {
  return (
    <button {...props} className={isActive ? styles.active : styles.inactive}>
      {children}
    </button>
  )
}

export default AdminTab
