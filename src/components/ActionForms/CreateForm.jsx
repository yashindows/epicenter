import { addDoc, collection } from "firebase/firestore"
import React, { useState } from "react"
import styles from "./createForm.module.css"
import db from "../../firebase"
import { imageDB } from "../../firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

function CreateForm() {
  const [imageUpload, setImageUpload] = useState()

  const uploadFile = (e) => {
    e.preventDefault()
    if (!imageUpload) return

    const imageRef = ref(imageDB, `files/${imageUpload.name}`)

    const formData = new FormData(e.target)

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const data = {
          title: formData.get("title"),
          description: formData.get("description"),
          price: formData.get("price"),
          image: url,
        }

        try {
          addDoc(collection(db, "services"), data)
        } catch (error) {
          console.error(error)
        }
      })
    })
  }
  // const [img, setImg] = useState("")
  // const [imgUrl, setImgUrl] = useState("")

  // const handleSubmit = async (e) => {
  // e.preventDefault()

  // const imgRef = ref(imageDB, `files/${v4()}`)
  // getDownloadURL(imgRef).then((url) => console.log(url))
  // uploadBytes(imgRef, img)

  // console.log(img)
  // list(ref(imageDB, "files/")).then((url) =>
  //   console.log(url.items.forEach((val) => console.log(val)))
  // )
  // console.log(imgRef)

  // try {
  //   // await addDoc(collection(db, "services"), data)
  // await getDownloadURL(imgRef).then((url) => console.log(url))
  // await listAll(ref(imageDB, "files/")).then((imgs) => {
  // imgs.items.forEach((img) => {
  // getDownloadURL(img).then((url) => {
  //   console.log(url)
  // })
  // })
  // console.log(imgs.items)
  // })
  // } catch (error) {
  // console.error(error)
  // }
  // }

  // useEffect(() => {
  // listAll(ref(imageDB, "files/")).then(function (imgs) {
  // console.log(imgs)
  // imgs.items.sort(function (a, b) {
  //   return a.metadata.timeCreated - b.metadata.timeCreated
  // })
  //     imgs.items.forEach((val) => {
  //       getDownloadURL(val).then((url) => {
  //         setImgUrl([...data], url)
  //       })
  //     })
  //   })
  // }, [])

  // console.log(imgUrl)

  return (
    <section className={styles.actionForm}>
      <div className={styles.container}>
        <form onSubmit={uploadFile}>
          <input type="text" name="title" placeholder="Название услуги" />
          <textarea
            type="text"
            name="description"
            placeholder="Описание"
          ></textarea>
          <input type="text" name="price" placeholder="Цена" />
          <input
            type="file"
            onChange={(e) => setImageUpload(e.target.files[0])}
          />
          <button className={styles.formBtn}>Создать</button>
        </form>
      </div>
    </section>
  )
}

export default CreateForm
