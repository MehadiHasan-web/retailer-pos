const UserInventory = () => {

  const addStockData = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = form.addStock.value;
    console.log(data)
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 md:gap-1 lg:gap-2 mt-5">
        <div className=" p-2 flex flex-col justify-between rounded shadow-lg bg-slate-50">
          <img
            className="w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded"
            src=""
          ></img>
          <div className="p-2">
            <h2 className="text-sm sm:text-base md:text-sm lg:text-sm font-semibold mx-auto my-1 md:my-1 lg:my-2">Phone X</h2>
            <p className="text-sm sm:text-base md:text-sm">Stock : 20</p>
            <form onSubmit={addStockData}>
              <input name="addStock" type="number" className="border-2"></input><br></br>
              <input type="submit" className="bg-blue-500 text-white p-2 w-full my-2 rounded" value="update"></input>
            </form>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default UserInventory;
