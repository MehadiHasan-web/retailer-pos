

function AddInventoryProduct() {
    return (
        <div>
            <div className="bg-[#d9efee] h-screen  flex justify-center">
                <div className=" flex flex-col justify-center items-center border bg-black w-96">
                    <h1 className="text-white text-2xl font-bold mb-4">Jaber</h1>
                    <p className="text-white text-lg mb-6">
                        Manage your freelance business with us!
                    </p>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="input input-bordered input-sm w-64 mb-2"
                    />
                    <input
                        name="fullName"
                        type="text"
                        placeholder="Full name"
                        className="input input-bordered input-sm w-64 mb-2"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="input input-bordered input-sm w-64 mb-4"
                    />
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Get started
                    </button>
                    <p className="text-white text-sm mt-4">
                        By signing up, you agree to our:
                        <br />
                        Terms and Conditions
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AddInventoryProduct
