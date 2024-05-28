import React, { useState } from "react"
import styles from "./catalog.module.css"

function Catalog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [services, setServices] = useState([
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuRIrv-BPDJtvolC32WGVOiptQYj6siw-tYWat18Nmg&s",
      title: "Реклама на банерах",
      price: 300,
    },
    {
      id: 2,
      image:
        "https://masterpiecer-images.s3.yandex.net/150fbf41721011eeb4bb1e5d9776cfa6:upscaled",
      title: "Изготовление вывесок",
      price: 230,
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuRIrv-BPDJtvolC32WGVOiptQYj6siw-tYWat18Nmg&s",
      title: "Реклама на банерах",
      price: 240,
    },
    {
      id: 4,
      image:
        "https://masterpiecer-images.s3.yandex.net/150fbf41721011eeb4bb1e5d9776cfa6:upscaled",
      title: "Изготовление вывесок",
      price: 250,
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuRIrv-BPDJtvolC32WGVOiptQYj6siw-tYWat18Nmg&s",
      title: "Реклама на банерах",
      price: 260,
    },
    {
      id: 6,
      image:
        "https://masterpiecer-images.s3.yandex.net/150fbf41721011eeb4bb1e5d9776cfa6:upscaled",
      title: "Изготовление вывесок",
      price: 270,
    },
  ])

  const [sortOrder, setSortOrder] = useState("asc")

  const sortByPrice = () => {
    const sortedCards = [...services].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    setServices(sortedCards)
  }

  const filterCards = services.filter((card) => {
    return card.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
  })

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <section className={styles.catalog}>
      <div className={styles.container}>
        <div className={styles.catalogTitle}>Каталог услуг</div>
        <div className={styles.filters}>
          <div className={styles.action}>
            Сортировать по цене:
            <div className={styles.btns}>
              {/* <button>
                <svg
                  width="27"
                  height="30"
                  viewBox="0 0 27 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.8626 27.6451H24.2802C24.3297 27.2355 24.3297 26.8771 24.3297 26.4676C24.3297 22.8328 21.2637 18.8396 18.544 15.3072C18.4945 15.2048 18.3956 15.1024 18.3462 15C18.3956 14.8976 18.4945 14.7952 18.544 14.6928C21.2637 11.1604 24.3297 7.16724 24.3297 3.53242C24.3297 3.12287 24.3297 2.71331 24.2802 2.35495H25.8626C26.456 2.35495 27 1.843 27 1.17747C27 0.511945 26.5055 0 25.8626 0H1.13736C0.543956 0 0 0.511945 0 1.17747C0 1.843 0.494506 2.35495 1.13736 2.35495H2.71978C2.67033 2.76451 2.67033 3.17406 2.67033 3.53242C2.67033 7.16724 5.73626 11.1604 8.45604 14.6928C8.50549 14.7952 8.6044 14.8976 8.65385 15C8.6044 15.1024 8.50549 15.2048 8.45604 15.3072C5.73626 18.8396 2.67033 22.8328 2.67033 26.4676C2.67033 26.8771 2.67033 27.2867 2.71978 27.6451H1.13736C0.543956 27.6451 0 28.157 0 28.8225C0 29.4881 0.494506 30 1.13736 30H25.8626C26.456 30 27 29.4881 27 28.8225C27 28.157 26.456 27.6451 25.8626 27.6451ZM4.8956 26.4676C4.8956 23.6519 7.86264 19.8123 10.2363 16.7406C10.4835 16.3823 10.7802 16.0751 11.0275 15.7167C11.3242 15.3072 11.3242 14.6928 11.0275 14.2833C10.7802 13.9761 10.533 13.6177 10.2363 13.2594C7.86264 10.1877 4.8956 6.34812 4.8956 3.53242C4.8956 3.12287 4.8956 2.71331 4.94506 2.35495H22.0549C22.1044 2.76451 22.1044 3.17406 22.1044 3.53242C22.1044 6.34812 19.1374 10.1877 16.7637 13.2594C16.5165 13.6177 16.2198 13.9249 15.9725 14.2833C15.6758 14.6928 15.6758 15.3072 15.9725 15.7167C16.2198 16.0239 16.467 16.3823 16.7637 16.7406C19.1374 19.8123 22.1044 23.6519 22.1044 26.4676C22.1044 26.8771 22.1044 27.2867 22.0549 27.6451H4.94506C4.8956 27.2355 4.8956 26.8771 4.8956 26.4676Z"
                    fill="var(--text-color-secondary)"
                  />
                </svg>
              </button> */}
              <button onClick={sortByPrice}>
                <svg
                  width="20"
                  height="30"
                  viewBox="0 0 20 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 28C8.75 28.6904 9.30964 29.25 10 29.25C10.6904 29.25 11.25 28.6904 11.25 28L8.75 28ZM10.8839 1.11612C10.3957 0.627962 9.60427 0.627962 9.11612 1.11612L1.16117 9.07107C0.673011 9.55922 0.673011 10.3507 1.16117 10.8388C1.64932 11.327 2.44078 11.327 2.92893 10.8388L10 3.76777L17.0711 10.8388C17.5592 11.327 18.3507 11.327 18.8388 10.8388C19.327 10.3507 19.327 9.55922 18.8388 9.07107L10.8839 1.11612ZM11.25 28L11.25 2L8.75 2L8.75 28L11.25 28Z"
                    fill="var(--text-color-secondary)"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.action}>
            <input
              value={searchQuery}
              onChange={handleSearchInputChange}
              type="text"
              placeholder="Поиск услуги..."
            />
          </div>
        </div>
        <div className={styles.catalogContent}>
          {filterCards.map((el) => (
            <div key={el.id} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={el.image} alt="" />
              </div>
              <p>{el.title}</p>
              <p>{el.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog
