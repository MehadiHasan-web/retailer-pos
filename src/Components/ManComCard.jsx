/* eslint-disable react/prop-types */
const ManComCard = ({ selectItem }) => {
  
  const addStockData = (event) => {
    event.preventDefault();
    const form = event.target;
    const id = form.id.value;
    const unit = form.unit.value;
    const transportationCost = form.transportationCost.value;
    const otherCost = form.otherCost.value;
    const inventoryCost = form.inventoryCost.value;
    const productCost = form.productCost.value;
    const mrp = form.mrpValue.value;
    const updateData = {
      unit: unit,
      transportationCost: transportationCost,
      otherCost: otherCost,
      inventoryCost: inventoryCost,
      productCost: productCost,
      mrp: mrp,
    };
    console.log(updateData);
    // axios.put(`https://rpos.pythonanywhere.com/api/v1/inventory/${id}/`, updateData, {
    //   headers: { 'Authorization': 'token ' + token }
    // })
    //   .then(response => {
    //     console.log('Response:', response.data);
    //     toast.success("Successfully Updated");
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     toast.error(`${error.message} .Try again`);
    //   });
  };

  return (
    <div>
      <div className="grid grid-cols-1 mt-5">
        <div className=" p-4">
          <div className=" flex flex-col justify-between rounded shadow-lg bg-slate-50 mb-6 ">
            {/* <img
              className="w-full h-[250px]  rounded"
              src={selectItem?.invImage}
            ></img> */}
            <img className='w-full h-[250px]  rounded' src={'https://rpos.pythonanywhere.com/' + selectItem?.invImage}></img>
            <div className="p-2">
              <h2 className="text-sm sm:text-base md:text-sm lg:text-sm font-semibold mx-auto my-1 md:my-1 lg:my-2">
               {selectItem.itemName}
              </h2>
              <p className="text-sm sm:text-base md:text-sm">Stock : {selectItem.unit}</p>
              <form onSubmit={addStockData} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span>Transportation Cost:</span>
                  <input
                    name="transportationCost"
                    type="text"
                    placeholder="Type here"
                    defaultValue={selectItem?.transportationCost}
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Other Cost:</span>
                  <input
                    name="otherCost"
                    type="text"
                    defaultValue={selectItem?.otherCost}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Inventory Cost:</span>
                  <input
                    name="inventoryCost"
                    type="text"
                    defaultValue={selectItem?.inventoryCost}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Product Cost:</span>
                  <input
                    name="productCost"
                    type="text"
                    defaultValue={selectItem?.productCost}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Update Stock:</span>
                  <input
                    name="unit"
                    type="text"
                    defaultValue={selectItem?.unit}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>MRP:</span>
                  <input
                    name="mrpValue"
                    type="number"
                    defaultValue={selectItem?.mrp}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <input name="id" type="number" value="id" className="hidden" />
                <button
                  type="submit"
                  className="bg-green-500 text-white  w-full my-2 btn btn-md uppercase rounded-full "
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManComCard;
