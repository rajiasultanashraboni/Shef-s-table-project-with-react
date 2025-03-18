import { useEffect, useState } from "react";
import Recipie from "./Recipie";

const Recipies = () => {
    const [recipies,setRecipes]=useState([])
    useEffect(()=>{
        fetch('Recipeis.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
    return (
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                recipies.map((recipie,idx)=><Recipie key={idx} recipie={recipie}></Recipie>)
            }
        </div>
    );
};

export default Recipies;