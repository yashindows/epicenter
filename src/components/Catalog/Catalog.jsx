import React, { useEffect, useState } from "react"
import styles from "./catalog.module.css"
import db from "../../firebase"
import { collection, onSnapshot } from "firebase/firestore"
import Card from "./Card"

function Catalog() {
  const [services, setServices] = useState([
    { status: "loading", id: "initing" },
  ])
  useEffect(() => {
    onSnapshot(collection(db, "services"), (snapshot) =>
      setServices(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    )
  }, [])

  const [searchQuery, setSearchQuery] = useState("")

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
    if (card.title) {
      return card.title.toLowerCase().includes(searchQuery.toLowerCase())
    }
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
            <Card
              key={el.id}
              img={el.image}
              title={el.title}
              description={el.description}
              price={el.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog
