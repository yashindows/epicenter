import React, { useState } from "react"
import styles from "./admin.module.css"
import AdminTabSection from "./AdminTabSection"
import AdminSection from "./AdminSection"
import { Link } from "react-router-dom"

function Admin() {
  const [tab, setTab] = useState("main")

  return (
    <section className={styles.admin}>
      <div className={styles.container}>
        <AdminTabSection active={tab} onChange={(current) => setTab(current)} />
        {tab === "main" && (
          <div className={styles.content}>Ассеты на главной</div>
        )}
        {tab === "admin" && <div className={styles.content}>Данные админа</div>}
        {tab === "services" && (
          <div className={styles.content}>
            <Link
              to="/create"
              style={{
                backgroundColor: "var(--accent-color)",
                fontSize: "var(--text-size)",
                justifyContent: "center",
                color: "var(--text-color)",
              }}
              className={styles.adminItem}
            >
              Добавить услугу
            </Link>
            <AdminSection />
          </div>
        )}
      </div>
    </section>
  )
}

export default Admin
