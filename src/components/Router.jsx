import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import Banner from "./Banner/Banner"
import Slider from "./Slider/Slider"
import Actions from "./Actions/Actions"
import Footer from "./Footer/Footer"
import Catalog from "./Catalog/Catalog"
import Order from "./Order/Order"
import Admin from "./Admin/Admin"
import CreateForm from "./ActionForms/CreateForm"
import EditForm from "./ActionForms/EditForm"

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          element={
            <>
              <main className="main">
                <Banner />
                <Slider />
                <Actions />
              </main>
            </>
          }
          path="/"
        />
        <Route
          element={
            <>
              <main className="main">
                <Catalog />
              </main>
            </>
          }
          path="/services"
        />
        <Route
          element={
            <>
              <main className="main">
                <Admin />
              </main>
            </>
          }
          path="/admin"
        />
        <Route
          element={
            <>
              <main className="main"></main>
            </>
          }
          path="/contacts"
        />
        <Route
          element={
            <>
              <main className="main">
                <CreateForm />
              </main>
            </>
          }
          path="/create"
        />
        <Route
          element={
            <>
              <main className="main">
                <EditForm />
              </main>
            </>
          }
          path="/edit/:id"
        />
      </Routes>
      <Footer />
      <Order />
    </BrowserRouter>
  )
}

export default Router
