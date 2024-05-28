import React, { useState } from "react"
import styles from "./order.module.css"
import { InputMask } from "primereact/inputmask"
import FormTabSection from "../FormTab/FormTabSection"

function Order() {
  const [value, setValue] = useState()
  const [formTab, setFormTab] = useState("viber")
  return (
    <>
      <div className="main-page-btns">
        <a href="#top" className={styles.feedbackBtn}>
          <svg
            width="34"
            height="25"
            viewBox="0 0 34 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.479 0.793606C17.6003 -0.0850735 16.1757 -0.0850735 15.297 0.793606L0.978098 15.1125C0.0994186 15.9912 0.0994186 17.4158 0.978098 18.2945C1.85678 19.1732 3.2814 19.1732 4.16008 18.2945L16.888 5.56658L29.6159 18.2945C30.4946 19.1732 31.9192 19.1732 32.7979 18.2945C33.6766 17.4158 33.6766 15.9912 32.7979 15.1125L18.479 0.793606ZM19.138 3.16061V2.3846H14.638V3.16061H19.138Z"
              fill="var(--text-color)"
            />
          </svg>
        </a>
        <button
          onClick={() => document.getElementById("order").showModal()}
          className={styles.feedbackBtn}
        >
          <svg
            width="33"
            height="35"
            viewBox="0 0 33 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4999 32.5702C24.4163 32.5702 30.8339 25.8786 30.8339 17.6244C30.8339 9.37001 24.4163 2.67854 16.4999 2.67854C8.5835 2.67854 2.16595 9.37001 2.16595 17.6244C2.16595 20.0152 2.70437 22.2749 3.66165 24.279C3.91605 24.8115 4.00072 25.4202 3.85324 25.9949L2.99949 29.322C2.62887 30.7662 3.89608 32.0874 5.28123 31.7011L8.47204 30.8109C9.02324 30.6571 9.60703 30.7454 10.1178 31.0106C12.0397 32.0088 14.2069 32.5702 16.4999 32.5702Z"
              stroke="var(--text-color)"
              strokeWidth="4"
            />
          </svg>
          {/* Оставить заявку */}
        </button>
      </div>
      <dialog id="order">
        <div className={styles.popupTitle}>
          Заполните поля ниже и мы с вами свяжемся!
        </div>
        <form method="post" className={styles.popupContent}>
          <div className={styles.popupOptions}>
            <div className={styles.way}>
              <FormTabSection
                active={formTab}
                onChange={(current) => setFormTab(current)}
              />
            </div>
            <div className={styles.data}>
              {formTab === "viber" && (
                <InputMask
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  mask="+7(999)-999-99-99"
                  placeholder="+7(___)-___-__-__"
                />
              )}
              {formTab === "email" && (
                <input type="email" placeholder="example@mail.com" />
              )}
            </div>
          </div>
          <textarea placeholder="Текст сообщения"></textarea>
          <button className={styles.formBtn}>Отправить</button>
        </form>
      </dialog>
    </>
  )
}

export default Order
