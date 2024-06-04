import React from "react"
import AdminTab from "./AdminTab"
import styles from "./admin.module.css"

function AdminTabSection({ active, onChange }) {
  return (
    <div className={styles.dashboard}>
      <AdminTab isActive={active === "main"} onClick={() => onChange("main")}>
        Главная
      </AdminTab>
      <AdminTab isActive={active === "admin"} onClick={() => onChange("admin")}>
        Данные администратора
      </AdminTab>
      <AdminTab
        isActive={active === "services"}
        onClick={() => onChange("services")}
      >
        Услуги
      </AdminTab>
    </div>
  )
}

export default AdminTabSection
