const Sidebar = ({cook,handleRemove,preaparing,calculateTotalTimeandCalories,totalTime,totalCalories}) => {
    return (
        <div className="md:w-1/3">
            <h1 className="text-2xl font-bold text-center border-b border-b-gray-400">Want To Cook: {cook.length}</h1>
            {/* want to cook table  */}

            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {cook.map((item, index) => (
                <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item.recipe_name}</td>
                    <td>{item.preparing_time} min</td>
                    <td>{item.calories} kcal</td>
                    <td><button 
                    onClick={() => {
                        handleRemove(item.recipe_id); 
                        calculateTotalTimeandCalories(item.preparing_time, item.calories);
                    }} 
                    className="bg-green-300 rounded-full py-1 px-4 text-xl">
                    Preparing
                    </button></td>
                </tr>
                ))}
                </tbody>
            </table>
            </div>

            {/* preaparing table  */}
            <h1 className="text-2xl font-bold text-center mt-10">Currently cooking Table:{preaparing.length}</h1>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                </tr>
                </thead>
                <tbody className="hover">
                {preaparing.map((item, index) => (
                <tr  key={index}>
                    <th>{index + 1}</th>
                    <td>{item.recipe_name}</td>
                    <td>{item.preparing_time} min</td>
                    <td>{item.calories} kcal</td>
                </tr>
                ))}
                {/* display total time and calories  */}

                <tr>
                    <th></th>
                    <td></td>
                    <td>Total Time = {totalTime} min</td>
                    <td>Total Calories = {totalCalories} kcal</td>
                </tr>
                </tbody>
            </table>
            </div>

            

        </div>
    );
};

export default Sidebar;