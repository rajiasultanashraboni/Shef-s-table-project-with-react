const Sidebar = ({cook}) => {
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
        <button onClick={()=>handleCooking()} className="bg-green-300 rounded-full py-1 px-4 text-xl">Preparing</button>
      </tr>
      ))}
    </tbody>
  </table>
</div>

            {/* preaparing table  */}
        </div>
    );
};

export default Sidebar;