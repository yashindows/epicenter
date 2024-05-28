import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import Banner from "./Banner/Banner"
import Slider from "./Slider/Slider"
import Actions from "./Actions/Actions"
import Footer from "./Footer/Footer"
import Catalog from "./Catalog/Catalog"
import Order from "./Order/Order"

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
      </Routes>
      <Footer />
      <Order />
    </BrowserRouter>
  )
}

export default Router
