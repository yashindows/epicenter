import React, { Children, useEffect, useState } from "react"
import styles from "./slider.module.css"
import SliderControl from "./SliderControl"
// import db from "../../firebase"
// import { collection, onSnapshot } from "firebase/firestore"

function Slider() {
  // useEffect(() => {
  //   onSnapshot(collection(db, "items"), (snapshot) => {
  //     snapshot.docs.map((doc) => console.log(doc.data()))
  //   })
  // }, [])

  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-d6MyCR_ZRTPx17qPjAZuDtf0FmC3sLOU_6Jr7go0yA&s",
    "https://avatars.dzeninfra.ru/get-zen_doc/1878571/pub_5e960a1df14981695a3807de_5e960bc5539dae4595bdb156/scale_1200",
  ]

  const goNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length)
  }

  const goPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length)
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
            <img src={images[currentSlide]} alt="" />
          </div>
          <div className={styles.sliderLines}>
            {images.map((img, index) => (
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
