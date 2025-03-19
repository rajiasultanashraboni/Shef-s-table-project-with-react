import { useState } from "react"
import Banner from "./component/Banner"
import Navbar from "./component/Navbar"
import OurRecipies from "./component/OurRecipies"
import Recipies from "./component/Recipies"
import Sidebar from "./component/Sidebar"

function App() {
  const [cook,setCook]=useState([]);
  const [preaparing,setPreparing]=useState([])
  const [totalTime,setTotalTime]=useState(0)
  const [totalCalories,setTotalCalories]=useState(0)

  

  const handleCook = (newCook) => {
    const exists = cook.some((item) => item.recipe_id === newCook.recipe_id);
  
    if (exists) {
      alert("This recipe is already added!");
    } else {
      setCook([...cook, newCook]);
    }
  };
  const handleRemove=(id)=>{
    // find which recipe to remove 
    const deleteRecipe = cook.find(item=>item.recipe_id===id)

    // remove from want to cook table 
    const updatedRecipe= cook.filter(item=>item.recipe_id !==id)
    setCook(updatedRecipe)
    setPreparing([...preaparing,deleteRecipe])
  }

  const calculateTotalTimeandCalories=(time,calorie)=>{
    setTotalTime(prevTime => prevTime + parseInt(time, 10));
  setTotalCalories(prevCalories => prevCalories + parseInt(calorie, 10));

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
      <Sidebar preaparing={preaparing}
       cook={cook} 
       handleRemove={handleRemove}
       calculateTotalTimeandCalories={calculateTotalTimeandCalories}
       totalTime={totalTime}
       totalCalories={totalCalories}
       ></Sidebar>
    </section>
    </>
  )
}

export default App
