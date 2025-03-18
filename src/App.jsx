import Banner from "./component/Banner"
import Navbar from "./component/Navbar"
import OurRecipies from "./component/OurRecipies"
import Recipies from "./component/Recipies"
import Sidebar from "./component/Sidebar"

function App() {

  return (
    <> 
    <Navbar></Navbar>
    <Banner></Banner>
    <OurRecipies></OurRecipies>

    <section className="flex gap-6 w-[80%] mx-auto">
      {/* reciepies section */}
      <Recipies></Recipies>

      {/* want to cook  section */}
      <Sidebar></Sidebar>
    </section>
    </>
  )
}

export default App
