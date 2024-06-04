import React, { Children, useEffect, useState } from "react"
import styles from "./slider.module.css"
import SliderControl from "./SliderControl"
import db from "../../firebase"
import { collection, onSnapshot } from "firebase/firestore"

function Slider() {
  const [data, setData] = useState([{ status: "loading", id: "initing" }])

  useEffect(
    () =>
      onSnapshot(collection(db, "sales"), (snapshot) =>
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  )

  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-d6MyCR_ZRTPx17qPjAZuDtf0FmC3sLOU_6Jr7go0yA&s",
    "https://avatars.dzeninfra.ru/get-zen_doc/1878571/pub_5e960a1df14981695a3807de_5e960bc5539dae4595bdb156/scale_1200",
  ]

  const goNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % data.length)
  }

  const goPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + data.length) % data.length)
  }

  return (
    <>
      <section className={styles.suggestions}>
        <div className={styles.container}>
          <div className={styles.slider} id="next">
            <div className={styles.sliderTop}>
              <SliderControl direction={"back"} onClick={() => goPrevSlide()}>
                {Children}
              </SliderControl>
              <div className={styles.sliderTitle}>Специальные предложения</div>
              <SliderControl
                direction={"forward"}
                onClick={() => goNextSlide()}
              >
                {Children}
              </SliderControl>
            </div>
            <span className={styles.saleTitle}>{data[currentSlide].title}</span>
            <img src={data[currentSlide].image} alt="" />
          </div>
          <div className={styles.sliderLines}>
            {data.map((img, index) => (
              <div
                key={index}
                className={styles.line}
                style={
                  index == currentSlide
                    ? { backgroundColor: "var(--accent-color)" }
                    : null
                }
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Slider
