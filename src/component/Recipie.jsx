const Recipie = ({recipie,handleCook}) => {
    const {calories,preparing_time,ingredients,short_description,recipe_name,recipe_id,recipe_image,} = recipie;
    return (
        <div className="">
            <div className="card bg-base-100 shadow-sm ">
            <figure>
                <img className="w-full h-52 rounded-lg object-cover"
                src={recipe_image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p className="border-b border-b-gray-400 ">{short_description}</p>
                <h3 className="text-2xl font-bold">Ingredients:{ingredients.length}</h3>
                <ul className="list-disc px-6">
                    {
                        ingredients.map((ingredient,idx)=><li key={idx}>{ingredient}

                        </li>)
                    }
                </ul>
                <div className="flex gap-4">
                    <div className="flex gap-2 items-center">
                    <i class="fa-solid fa-clock"></i>
                    <p>{preparing_time} minutes</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <i class="fa-solid fa-fire-flame-curved"></i>
                    <p>{calories} Calories</p>
                    </div>

                </div>
                <div className="card-actions">
                <button onClick={()=>handleCook(recipie)} className="bg-green-300 rounded-full py-1 px-4 text-xl">Want to cook</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Recipie;