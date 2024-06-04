import React, { useState } from "react"
import styles from "./createForm.module.css"
import db, { imageDB } from "../../firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"

function EditForm() {
  const [imageUpload, setImageUpload] = useState()
  const handleEdit = async (e) => {
    e.preventDefault()

    if (!imageUpload) return
    const id = window.location.pathname.replace("/edit/", "")
    const docRef = doc(db, "services", id)
    const imageRef = ref(imageDB, `files/${imageUpload.name}`)

    const formData = new FormData(e.target)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const payload = {
          title: formData.get("title"),
          description: formData.get("description"),
          price: formData.get("price"),
          image: url,
        }

        try {
          setDoc(docRef, payload)
        } catch (error) {
          console.error(error)
        }
      })
    })
  }

  return (
    <section className={styles.actionForm}>
      <div className={styles.container}>
        <form onSubmit={handleEdit}>
          <input placeholder="Новое название услуги" type="text" name="title" />
          <textarea
            placeholder="Новое описание услуги"
            type="text"
            name="description"
          ></textarea>
          <input placeholder="Новая цена услуги" type="text" name="price" />
          <input
            type="file"
            onChange={(e) => setImageUpload(e.target.files[0])}
          />
          <button className={styles.formBtn}>Сохранить изменения</button>
        </form>
      </div>
    </section>
  )
}

export default EditForm
