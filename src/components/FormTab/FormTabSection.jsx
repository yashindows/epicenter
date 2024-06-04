import React from "react"
import FormTab from "./FormTab"

function FormTabSection({ active, onChange }) {
  return (
    <>
      <FormTab isActive={active === "email"} onClick={() => onChange("email")}>
        Почта
      </FormTab>
      <FormTab isActive={active === "viber"} onClick={() => onChange("viber")}>
        Telegram
      </FormTab>
    </>
  )
}

export default FormTabSection
