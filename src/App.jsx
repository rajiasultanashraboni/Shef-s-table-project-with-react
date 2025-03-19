import { useState } from "react"
import Banner from "./component/Banner"
import Navbar from "./component/Navbar"
import OurRecipies from "./component/OurRecipies"
import Recipies from "./component/Recipies"
import Sidebar from "./component/Sidebar"

function App() {
  const [cook,setCook]=useState([]);

  const handleCook = (newCook)=>{
    setCook([...cook,newCook])
  }

  return (
    <> 
    <Navbar></Navbar>
    <Banner></Banner>
    <OurRecipies></OurRecipies>

    <section className="flex gap-6 w-[90%] mx-auto">
      {/* reciepies section */}
      <Recipies handleCook={handleCook}></Recipies>

      {/* want to cook  section */}
      <Sidebar cook={cook}></Sidebar>
    </section>
    </>
  )
}

export default App
