// import { useEffect } from 'react';
import "./Home.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import logo from "../../../../../public/logo.png";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";
import { GrSubtractCircle } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import bottol from "../../../../../public/bottol.png";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { MdDelete } from "react-icons/md";

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const { baseURL } = useContext(AuthContext);
  const initialCardTable = JSON.parse(localStorage.getItem("wishlist")) || [];
  const [wishlist, setWishlist] = useState(initialCardTable);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/public/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // add  to card or increment functionality
  const cardData = (product) => {
    const cardTableItem = wishlist.find((value) => value.id === product.id);
    if (cardTableItem) {
      const updatedCardTable = wishlist.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setWishlist(updatedCardTable);
    } else {
      const newData = {
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price * product.quantity,
      };
      setWishlist([...wishlist, newData]);
    }
  };

  useEffect(() => { }, [wishlist]);

  console.log(wishlist);
  console.log();
  // updateQuantity
  function updateQuantity(id) {
    const index = products.findIndex((product) => product.id === id);

    if (index !== -1) {
      const updatedProducts = [...products];

      updatedProducts[index] = {
        ...updatedProducts[index],
        quantity: updatedProducts[index].quantity + 1,
      };

      setProducts(updatedProducts);
    } else {
      console.log("Product not found");
    }
  }
  // decreaseQuantity
  function decreaseQuantity(id) {
    const index = products.findIndex((product) => product.id === id);

    if (index !== -1) {
      const updatedProducts = [...products];
      let quantity = updatedProducts[index].quantity;
      if (quantity > 1) {
        updatedProducts[index] = {
          ...updatedProducts[index],
          quantity: updatedProducts[index].quantity - 1,
        };
        setProducts(updatedProducts);
      } else {
        alert('Quantity cannot be negative.')
      }

    } else {
      console.log("Product not found");
    }
  }

  // Update wishlist Quantity 
  function updateWishlistQuantity(id) {
    const index = wishlist.findIndex((product) => product.id === id);

    if (index !== -1) {
      const updatedProducts = [...wishlist];

      updatedProducts[index] = {
        ...updatedProducts[index],
        quantity: updatedProducts[index].quantity + 1,
      };

      setWishlist(updatedProducts);
    } else {
      console.log("Product not found");
    }
  }
  // decrease wishlist Quantity 
  function decreaseWishlistQuantity(id) {
    const index = wishlist.findIndex((product) => product.id === id);

    if (index !== -1) {
      const updatedProducts = [...wishlist];
      // let quantity;
      let quantity = updatedProducts[index].quantity;
      if (quantity > 1) {
        updatedProducts[index] = {
          ...updatedProducts[index],
          quantity: updatedProducts[index].quantity - 1,

        };
        setWishlist(updatedProducts);
      } else {
        alert('Quantity cannot be negative.')
      }
    } else {
      console.log("Product not found");
    }
  }
  // Remove Wishlist Items 
  function removeWishList(id) {
    const updatedWishlist = wishlist.filter(product => product.id !== id);
    setWishlist(updatedWishlist);
  }
  //  Total price show 
  function calculateTotalPrice() {
    return wishlist.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto bg-slate-100">
        <div className="md:col-span-2 px-5 ">
          {/* subscription section start */}
          {/* <div className="flex justify-between items-center h-32 titleCon p-5 rounded-2xl opacity-90">
            <div>
              <h3 className="text-2xl font-bold text-slate-300 flex items-center gap-3">
                Your subscription is almost expired{" "}
                <span className="text-base font-normal flex items-center gap-1">
                  <MdOutlineWatchLater></MdOutlineWatchLater> 7 days left
                </span>
              </h3>
              <p className="text-gray-400">
                Upgrade your plane to superior to enjoy various additional
                benefits
              </p>
            </div>
            <div>
              <button className="btn btn-success font-bold text-lg text-white">
                Upgrade Plane
              </button>
            </div>
          </div> */}
          {/* subscription section end */}
          {/* waiting list section start */}
          <div className="my-5">
            <ul className="flex justify-between items-center">
              <li className="text-2xl font-semibold">Waiting List</li>
              <li className="text-lg font-bold text-green-500 border-b-green-500 border-b-2">
                See all
              </li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
              {/* item 1 */}
              <div className="card card-side bg-base-100 shadow-xl">
                <figure className="p-3">
                  <img src={logo} alt="Movie" className="rounded w-20 h-20" />
                </figure>
                <div className="card-body p-2">
                  <ul className="bg-black p-1 rounded-lg flex justify-between items-center">
                    <li>
                      <GoDotFill className="text-green-500 text-sm"></GoDotFill>
                    </li>
                    <li>
                      <span className="text-white text-sm">#1234</span>
                    </li>
                  </ul>
                  <ul>
                    <li className="flex gap-5 items-center">
                      <span>
                        <IoPerson className="text-sm"></IoPerson>
                      </span>
                      <span className="text-lg font-semibold">Yuda Rahmat</span>
                    </li>
                    <li className="flex gap-5 items-center">
                      <span>
                        <FaLongArrowAltRight className="text-sm"></FaLongArrowAltRight>
                      </span>
                      <span className="text-base text-gray-500">3 Items</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* item 1 */}
              {/* item 2 */}
              <div className="card card-side bg-base-100 shadow-xl">
                <figure className="p-3">
                  <img
                    src={logo}
                    alt="Movie"
                    className="rounded-2xl w-20 h-20"
                  />
                </figure>
                <div className="card-body p-2">
                  <ul className="bg-black p-1 rounded-lg flex justify-between items-center">
                    <li>
                      <GoDotFill className="text-gray-500 text-sm"></GoDotFill>
                    </li>
                    <li>
                      <span className="text-white text-sm">#1234</span>
                    </li>
                  </ul>
                  <ul>
                    <li className="flex gap-5 items-center">
                      <span>
                        <IoPerson className="text-sm"></IoPerson>
                      </span>
                      <span className="text-lg font-semibold">Angel Girl</span>
                    </li>
                    <li className="flex gap-5 items-center">
                      <span>
                        <FaLongArrowAltRight className="text-sm"></FaLongArrowAltRight>
                      </span>
                      <span className="text-base text-gray-500">3 Items</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* item 2 */}
              {/* item 3 */}
              <div className="card card-side bg-base-100 shadow-xl">
                <figure className="p-3">
                  <img
                    src={logo}
                    alt="Movie"
                    className="rounded-2xl w-20 h-20"
                  />
                </figure>
                <div className="card-body p-2">
                  <ul className="bg-black p-1 rounded-lg flex justify-between items-center">
                    <li>
                      <GoDotFill className="text-gray-500 text-sm"></GoDotFill>
                    </li>
                    <li>
                      <span className="text-white text-sm">#1234</span>
                    </li>
                  </ul>
                  <ul>
                    <li className="flex gap-5 items-center">
                      <span>
                        <IoPerson className="text-sm"></IoPerson>
                      </span>
                      <span className="text-lg font-semibold">Prince Rani</span>
                    </li>
                    <li className="flex gap-5 items-center">
                      <span>
                        <FaLongArrowAltRight className="text-sm"></FaLongArrowAltRight>
                      </span>
                      <span className="text-base text-gray-500">3 Items</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* item 3 */}
            </div>
          </div>
          {/* waiting list section end */}
          {/* medicines section start */}
          <div className="my-5">
            <ul className="flex justify-between items-center">
              <li className="text-2xl font-semibold">Medicines</li>
              <li className="text-lg font-bold text-green-500 border-b-green-500 border-b-2">
                See all
              </li>
            </ul>
            <div className=" mt-5">
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                <TabList className="flex gap-5 items-center flex-wrap">
                  <Tab
                    style={{ flex: 1, textAlign: "center", cursor: "pointer" }}
                    className="bg-white text-black font-bold py-2 rounded-full"
                  >
                    All
                  </Tab>
                  <Tab
                    style={{ flex: 1, textAlign: "center", cursor: "pointer" }}
                    className="bg-white text-black font-bold py-2 rounded-full"
                  >
                    Tablet
                  </Tab>
                  <Tab
                    style={{ flex: 1, textAlign: "center", cursor: "pointer" }}
                    className="bg-white text-black font-bold py-2 rounded-full"
                  >
                    Capsule
                  </Tab>
                  <Tab
                    style={{ flex: 1, textAlign: "center", cursor: "pointer" }}
                    className="bg-white text-black font-bold py-2 rounded-full"
                  >
                    Suppository
                  </Tab>
                  <Tab
                    style={{ flex: 1, textAlign: "center", cursor: "pointer" }}
                    className="bg-white text-black font-bold py-2 rounded-full"
                  >
                    Eyedrops
                  </Tab>
                  <Tab
                    style={{ flex: 1, textAlign: "center", cursor: "pointer" }}
                    className="bg-white text-black font-bold py-2 rounded-full"
                  >
                    Bottle
                  </Tab>
                </TabList>
                <TabPanel className="mt-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Item 1  */}
                    {products.map((product) => (
                      <div
                        className=" bg-base-100 shadow-xl p-3 rounded-md"
                        key={product.id}
                      >
                        <div className="flex justify-between items-center">
                          <div className="w-[35%]">
                            <figure>
                              <img
                                className="w-60 h-40"
                                src={bottol}
                                alt="Movie"
                              />
                            </figure>
                          </div>
                          <div className="w-[65%]">
                            <h2 className="text-xl font-bold">
                              {product.name}
                            </h2>
                            <p className="text-xs">{product.description}</p>
                            <ul className="flex items-center gap-32 mt-2">
                              <li>
                                <p className="text-sm">Netto</p>
                                <p className="text-base font-bold">
                                  {product.net_weight}
                                </p>
                              </li>
                              <li>
                                <p className="text-sm">Stock</p>
                                <p className="text-base font-bold">
                                  {product.stock} Available
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className=" flex items-center justify-center">
                            <sup className="text-green-600 font-bold">$</sup>
                            <p className="text-center">
                              <span className="text-2xl font-bold">
                                {product.price}
                              </span>
                              <span className="text-gray-500">/Bottle</span>
                            </p>
                          </div>
                          <div className="w-[65%] ">
                            <ul className="flex justify-between items-center bg-slate-200 py-1 px-3 rounded-2xl">
                              <li>
                                <button
                                  onClick={() => decreaseQuantity(product.id)}
                                >
                                  <FaCircleMinus className="text-white text-xl"></FaCircleMinus>
                                </button>
                              </li>
                              <li>{product.quantity}</li>
                              <li>
                                <button
                                  onClick={() => updateQuantity(product.id)}
                                  className="m-0 p-0"
                                >
                                  <FaCirclePlus className="text-green-600 text-xl"></FaCirclePlus>
                                </button>
                              </li>
                            </ul>
                          </div>
                          <button
                            onClick={() => cardData(product)}
                            className="btn bg-green-500 py-[2px] px-3"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          {/* medicines section end */}
        </div>

        <div className="hidden lg:block md:col-span-1 p-4 bg-white">
          <div className="flex justify-between ">
            <h3 className="text-xl text-black font-medium">wishlist</h3>
            <p className="text-xl font-bold text-black">
              A1<span className="text-slate-100">#12910</span>
            </p>
          </div>
          <p className="text-bold font-medium my-2">
            Detail Prescription <span className="text-green-500">3</span>
          </p>
          <div className="bg-slate-100 rounded-lg p-4 w-full h-32 overflow-auto touch-auto">
            <ul className=" max-w-none h-auto">
              <li className="text-sm text-slate-400 flex justify-between">
                <h5>Name</h5> <span>Amount</span>
              </li>
              {wishlist.map((item) => (
                <li
                  key={item.id}
                  className="font-bold flex justify-between mt-2"
                >
                  <h5>{item.name}</h5>{" "}
                  <span className="text-slate-500 text-sm">${item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-b-2 my-5"></div>
          <div className="w-full h-52 overflow-auto touch-auto">
            {wishlist.length === 0 ? (
              <div>
                <p className="text-center">You have no products</p>
                <img className="w-full p-4" src="https://icon-library.com/images/new-item-icon/new-item-icon-19.jpg" alt="" />

              </div>

            ) : (
              <div className=" max-w-none h-auto ">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-5 mt-5 max-w-none h-auto p-2 shadow"
                  >
                    <div className="w-1/4 p-2 bg-slate-100 rounded-lg">
                      <img
                        src="https://media.istockphoto.com/id/1304186549/vector/automatic-spring-ballpoint-pen-in-black-case-vector-illustration.jpg?s=612x612&w=0&k=20&c=R_yPawneqKX8J-NeiKmNXuYx36tCoPSCFEHx0Bd4dEg="
                        alt=""
                        className="w-3/4 mx-auto "
                      />
                    </div>
                    <div className="w-3/4  ">
                      <p className="flex justify-between items-center">
                        <h4 className="font-bold">{item.name}</h4>{" "}
                        <button onClick={() => removeWishList(item.id)}><MdDelete className="inline-block border-2 text-3xl p-1 rounded-lg shadow bg-white text-red-500" /></button>
                      </p>
                      <p className="flex justify-between items-center mt-7">
                        <h4 className="font-bold">
                          <span className="text-green-500">$</span>
                          {item.price * item.quantity}
                        </h4>
                        <span className="bg-white border-2 shadow-inner rounded-full flex px-1 gap-2 items-center">
                          <button
                            onClick={() => decreaseWishlistQuantity(item.id)}
                            className="m-0 p-0"
                          >
                            <GrSubtractCircle className="text-red-500 cursor-pointer" />
                          </button>

                          {item.quantity}
                          <button
                            onClick={() => updateWishlistQuantity(item.id)}
                            className="m-0 p-0"
                          >
                            <FaCirclePlus className="text-green-600 text-xl"></FaCirclePlus>
                          </button>
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-5 ">
            <h2 className="text-2xl font-semibold mt-3">Summary</h2>
            <p className="flex justify-between mt-3 text-sm">
              <span>Subtotal</span> <span className="font-bold">
                ${
                  calculateTotalPrice()
                }
              </span>
            </p>
            <p className="flex justify-between mt-3 text-sm">
              <span>Discount</span> <span className="font-bold">$ 2.00</span>
            </p>
            <p className="border-b-2 border-dashed mt-2"></p>
            <p className="flex justify-between mt-3 font-bold">
              <span>Total</span> <span>$ {calculateTotalPrice()}</span>
            </p>
          </div>
          <div className="mt-5">
            <button className="btn w-full bg-green-500 text-white rounded-xl">
              Print Bill
            </button>
          </div>
        </div>
      </div>
      <div
        className={`block md:hidden case-in duration-500 w-full h-full fixed top-16 pt-10 bottom-0 z-30 overflow-auto touch-auto bg-slate-200 ${open ? "right-2" : "-right-[800px]"
          }`}
      >
        <div className="fixed top-64 -right-6 z-10">
          {open && open ? (
            <span
              className="hidden"
              onClick={() => {
                setOpen(false);
              }}
            >
              <FaChevronRight className="h-14 w-14 bg-slate-300 p-2 rounded-full"></FaChevronRight>
            </span>
          ) : (
            <span
              onClick={() => {
                setOpen(true);
              }}
            >
              <FaChevronLeft className="h-12 w-12 bg-slate-300 p-2 rounded-full"></FaChevronLeft>
            </span>
          )}
        </div>
        <div className="pl-12">
          <div className=" top-20 p-2 ">
            {/* table section start */}
            <div className=" md:col-span-1 p-4 bg-white rounded-xl mb-14">
              <div className="flex justify-between ">
                <h3 className="text-xl text-black font-medium">wishlist</h3>
                <p className="text-xl font-bold text-black">
                  A1<span className="text-slate-100">#12910</span>
                </p>
              </div>
              <p className="text-bold font-medium my-2">
                Detail Prescription <span className="text-green-500">3</span>
              </p>
              <div className="bg-slate-100 rounded-lg p-4 w-full h-32 overflow-auto touch-auto">
                <ul className=" max-w-none h-auto">
                  <li className="text-sm text-slate-400 flex justify-between">
                    <h5>Name</h5> <span>Amount</span>
                  </li>
                  {wishlist.map((item) => (
                    <li
                      key={item.id}
                      className="font-bold flex justify-between mt-2"
                    >
                      <h5>{item.name}</h5>{" "}
                      <span className="text-slate-500 text-sm">
                        ${item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-b-2 my-5"></div>
              <div className="w-full h-52 overflow-auto touch-auto">
                <div className=" max-w-none h-auto ">
                  {wishlist.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-5 mt-5 max-w-none h-auto p-2"
                    >
                      <div className="w-1/4 p-2 bg-slate-100 rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/1304186549/vector/automatic-spring-ballpoint-pen-in-black-case-vector-illustration.jpg?s=612x612&w=0&k=20&c=R_yPawneqKX8J-NeiKmNXuYx36tCoPSCFEHx0Bd4dEg="
                          alt=""
                          className="w-3/4 mx-auto "
                        />
                      </div>
                      <div className="w-3/4  ">
                        <p className="flex justify-between items-center">
                          <h4 className="font-bold">{item.name}</h4>{" "}
                          <CiEdit className="inline-block border-2 text-3xl p-1 rounded-lg shadow-inner bg-white" />
                        </p>
                        <p className="flex justify-between items-center mt-7">
                          <h4 className="font-bold">
                            <span className="text-green-500">$</span>
                            {item.price * item.quantity}
                          </h4>
                          <span className="bg-white border-2 shadow-inner rounded-full flex px-1 gap-2 items-center">
                            <GrSubtractCircle className="text-red-500 cursor-pointer" />
                            {item.quantity}
                            <button
                              onClick={() => updateQuantity(item.id)}
                              className="m-0 p-0"
                            >
                              <FaCirclePlus className="text-green-600 text-xl"></FaCirclePlus>
                            </button>
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 ">
                <h2 className="text-2xl font-semibold mt-3">Summary</h2>
                <p className="flex justify-between mt-3 text-sm">
                  <span>Subtotal</span>{" "}
                  <span className="font-bold">$ 12.00</span>
                </p>
                <p className="flex justify-between mt-3 text-sm">
                  <span>Discount</span>{" "}
                  <span className="font-bold">$ 2.00</span>
                </p>
                <p className="border-b-2 border-dashed mt-2"></p>
                <p className="flex justify-between mt-3 font-bold">
                  <span>Total</span> <span>$ 10.00</span>
                </p>
              </div>
              <div className="mt-5">
                <button className="btn w-full bg-green-500 text-white rounded-xl">
                  Print Bill
                </button>
              </div>
            </div>
            {/* table section end */}
            <div className="absolute top-44 -left-4 z-10">
              {open && open ? (
                <span
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <FaChevronRight className="h-12 w-12 bg-slate-300 p-2 rounded-full"></FaChevronRight>
                </span>
              ) : (
                <span
                  className="hidden"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <FaChevronLeft className="h-12 w-12 bg-white p-2 rounded-full"></FaChevronLeft>
                </span>
              )}
            </div>
            {/* form section start */}

            {/* form section end */}
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
