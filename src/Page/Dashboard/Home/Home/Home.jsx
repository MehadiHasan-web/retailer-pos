// import { useEffect } from 'react';
import "./Home.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";

import {
  FaChevronLeft,
  FaChevronRight,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { useCallback, useContext, useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import { GrSubtractCircle } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import bottol from "../../../../../public/bottol.png";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Form from "../Form/Form";

// swiper slider functionality
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import WaitingList from "./WaitingList";



const Home = () => {
  const [products, setProducts] = useState([]);
  const { baseURL, searchData } = useContext(AuthContext);
  const initialCardTable = JSON.parse(localStorage.getItem("wishlist")) || [];
  const [wishlist, setWishlist] = useState(initialCardTable);
  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("All");
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [size, setSize] = useState('');
  console.log(size)



  // search function 
  useEffect(() => {

    const findSearchData = products.filter(product =>
      product.name.toLowerCase().includes(searchData.toLowerCase())
    );
    if (findSearchData?.length > 0) {
      setSelectedProduct(findSearchData);
      console.log(findSearchData);
      setActiveButton('All');
    }
  }, [searchData, products, setSelectedProduct, setActiveButton]);



  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  //get all categories
  const getAllCategories = useCallback(() => {
    axios
      .get(`${baseURL}/catagorylist/`)
      .then((response) => {
        setCategories(response.data);
        console.log("All Category:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [])


  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);


  //get all Products
  useEffect(() => {
    axios
      .get(`${baseURL}/itemlist/`)
      .then((response) => {
        setProducts(response.data);
        console.log("All Products:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [baseURL]);

  // add  to card or increment functionality
  const cardData = (product, event) => {
    event.preventDefault();
    const quantity = event.target.elements.quantity.value;
    console.log(wishlist);


    const filterItem = wishlist.find((value) => value.id === product.id);
    if (filterItem) {
      if (quantity > 1) {
        console.log('product acha')
        const updatedCardTable = wishlist.map((item) =>
          item.id === product.id ? { ...item, quantity: parseInt(item.quantity) + parseInt(quantity) } : item
        );
        setWishlist(updatedCardTable);
      } else {
        const updatedCardTable = wishlist.map((item) =>
          item.id === product.id ? { ...item, quantity: parseInt(item.quantity) + 1 } : item
        );
        setWishlist(updatedCardTable);
      }
    } else {
      console.log('product nai')
      if (!quantity) {
        const newData = {
          id: product.id,
          name: product.name,
          quantity: 1,
          // price: product.price * product.quantity,
        };
        setWishlist([...wishlist, newData]);
      }
    }
  };

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
        alert("Quantity cannot be negative.");
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
        quantity: parseInt(updatedProducts[index].quantity) + 1,
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
        alert("Quantity cannot be negative.");
      }
    } else {
      console.log("Product not found");
    }
  }
  // Remove Wishlist Items
  function removeWishList(id) {
    const updatedWishlist = wishlist.filter((product) => product.id !== id);
    setWishlist(updatedWishlist);
  }
  //  Total price show
  function calculateTotalPrice() {
    return wishlist.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
  //selected category click function
  const handleButtonClick = (category) => {
    setActiveButton(category.name);
    console.log("Category ID:", category.id);

    const filteredProducts = products.filter((product) => {
      return product.catagory === category.id;
    });
    setSelectedProduct(filteredProducts);

    console.log("Filtered Products:", filteredProducts);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  bg-slate-100">
        <div className="col-span-2 px-5 ">
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
          <WaitingList></WaitingList>
          {/* waiting list section end */}
          {/* medicines section start */}
          <div className="my-5">
            <ul className="flex justify-between items-center">
              <li className="text-2xl font-semibold">Products</li>
              <li className="text-lg font-bold text-green-500 border-b-green-500 border-b-2">
                See all
              </li>
            </ul>
            {/* products  list*/}
            <div className="mt-4">
              {/* categories  */}
              <div className="flex gap-2 items-center">
                <button
                  className={
                    activeButton === "All"
                      ? "category-button category-button-selected px-5 py-2 font-bold"
                      : "category-button  px-5 py-2 bg-white text-black font-bold  rounded-full"
                  }
                  onClick={() => handleButtonClick({ id: null, name: "All" })}
                >
                  All
                </button>
                <Swiper
                  slidesPerView={6}
                  spaceBetween={5}
                  loop={true}
                  navigation={true}
                  modules={[Navigation, Pagination]}
                  className="mySwiper text-center"
                  breakpoints={{
                    768: {
                      slidesPerView: 4,
                    },
                    640: {
                      slidesPerView: 3,
                    },
                    320: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                      <button
                        className={
                          activeButton === category.name
                            ? "category-button category-button-selected px-5 py-2 font-bold"
                            : "category-button  px-5 py-2 bg-white text-black font-bold  rounded-full"
                        }
                        onClick={() => handleButtonClick(category)}
                      >
                        {category.name}
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* categories end */}
              {/* products  */}
              <div className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Item 1  */}
                  {(selectedProduct.length > 0
                    ? selectedProduct
                    : products
                  ).map((product) => (
                    <div
                      className=" bg-base-100 shadow-xl p-3 rounded-md"
                      key={product.id}
                    >
                      <div className="flex justify-between items-center">
                        <div className="w-1/4">
                          <figure>
                            <img
                              className="w-60 h-40"
                              src={bottol}
                              alt="Movie"
                            />
                          </figure>
                        </div>
                        <div className="w-3/4">
                          <h2 className="text-xl font-bold">{product.name}</h2>
                          <p className="text-xs">{product.description}</p>
                          <ul className="flex items-start justify-between mt-2">
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

                      <form onSubmit={(event) => cardData(product, event)}>
                        <div className="flex justify-between items-center mt-2 gap-4">
                          {/* <div className=" flex items-center justify-center">
                          <sup className="text-green-600 font-bold">$</sup>
                          <p className="text-center">
                            <span className="text-2xl font-bold">
                              {product.price}
                            </span>
                            <span className="text-gray-500">/Bottle</span>
                          </p>
                        </div> */}
                          <div className="w-full flex items-center gap-2">
                            <div className="flex-2">
                              <p className="text-lg font-bold">Price: $20</p>
                            </div>
                            <ul className=" flex-1 rounded-full w-full">
                              {/* <li className="flex items-center">
                              <button
                                onClick={() => decreaseQuantity(product.id)}
                              >
                                <FaCircleMinus className="text-white text-xl"></FaCircleMinus>
                              </button>
                            </li> */}
                            
                              <li className="w-full"><input name="quantity" type="number" className="p-1 w-full rounded-full text-center bg-slate-200" min={1} max={30} placeholder="Write Quantity" /></li>
                              {/* <li className="flex items-center ">
                              <button
                                onClick={() => updateQuantity(product.id)}
                                className="m-0 p-0"
                              >
                                <FaCirclePlus className="text-green-600 text-xl"></FaCirclePlus>
                              </button>
                            </li> */}
                            </ul>
                          </div>
                          <button
                            className=" bg-green-500 py-1 font-bold rounded-full w-2/5 text-white"
                          >
                            Add
                          </button>
                        </div>
                      </form>
                    </div>
                  ))}
                </div>
              </div>
              {/* products end */}
            </div>
          </div>
        </div>

        {/* wishlist add to card  */}
        <div className="hidden lg:block  p-4 bg-white  ">
          <div className="flex justify-between ">
            <h3 className="text-xl text-black font-medium">Whitelist</h3>
            <p className="text-xl font-bold text-black">
              A1<span className="text-slate-100">#12910</span>
            </p>
          </div>
          <p className="text-bold font-medium my-2">
            Detail Products <span className="text-green-500">{wishlist.length}</span>
          </p>
          <div className="bg-slate-100 rounded-lg p-4 w-full h-32 overflow-auto touch-auto">
            <ul className=" max-w-none h-auto">
              <li className="text-sm text-slate-400 flex justify-between">
                <h5>Name</h5> <span>Quantity</span>
              </li>
              {wishlist.map((item) => (
                <li
                  key={item.id}
                  className="font-bold flex justify-between mt-2"
                >
                  <h5>{item.name}</h5>{" "}
                  <span className="text-slate-500 text-sm">{item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-b-2 my-5"></div>
          <div className="w-full h-60 overflow-auto touch-auto">
            {wishlist.length === 0 ? (
              <div>
                <h2 className="text-center font-bold">No Products Found</h2>
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
                        {/* <button onClick={() => removeWishList(item.id)}>
                          <MdDelete className="inline-block border-2 text-3xl p-1 rounded-lg shadow bg-white text-red-500" />
                        </button> */}
                      </p>
                      <div className="flex justify-between items-center mt-7">
                        {/* <h4 className="font-bold">
                          <span className="text-green-500">$</span>
                          {item.price * item.quantity}
                        </h4> */}
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
                        <button onClick={() => removeWishList(item.id)}>
                          <MdDelete className="inline-block border-2 text-3xl p-1 rounded-lg shadow bg-white text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-5">
            <Form wishlist={wishlist} setWishlist={setWishlist}></Form>
          </div>
        </div>
      </div>

      {/* mobile wishlist  */}
      <div
        className={`block lg:hidden case-in duration-500 w-full h-full fixed top-16 pt-10 bottom-0 z-30 overflow-auto touch-auto bg-slate-200 pb-20 ${open ? "right-2" : "-right-[800px]"
          }`}
      >
        <div className="fixed top-2/4 -right-6 z-10">
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
            <div
              className=" lg:hidden md:col-span-1 p-4 bg-white "

            >
              <div className="flex justify-between ">
                <h3 className="text-xl text-black font-medium">Whitelist</h3>
                <p className="text-xl font-bold text-black">
                  A1<span className="text-slate-100">#12910</span>
                </p>
              </div>
              <p className="text-bold font-medium my-2">
                Detail Prescription <span className="text-green-500">{wishlist.length}</span>
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
                {wishlist.length === 0 ? (
                  <div>
                    <p className="text-center">You have no products</p>
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
                            <button onClick={() => removeWishList(item.id)}>
                              <MdDelete className="inline-block border-2 text-3xl p-1 rounded-lg shadow bg-white text-red-500" />
                            </button>
                          </p>
                          <p className="flex justify-between items-center mt-7">
                            <h4 className="font-bold">
                              <span className="text-green-500">$</span>
                              {item.price * item.quantity}
                            </h4>
                            <span className="bg-white border-2 shadow-inner rounded-full flex px-1 gap-2 items-center">
                              <button
                                onClick={() =>
                                  decreaseWishlistQuantity(item.id)
                                }
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
                  <span>Subtotal</span>{" "}
                  <span className="font-bold">${calculateTotalPrice()}</span>
                </p>
                <p className="flex justify-between mt-3 text-sm">
                  <span>Discount</span>{" "}
                  <span className="font-bold">$ 2.00</span>
                </p>
                <p className="border-b-2 border-dashed mt-2"></p>
                <p className="flex justify-between mt-3 font-bold">
                  <span>Total</span> <span>$ {calculateTotalPrice()}</span>
                </p>
              </div>
              <div className="mt-5">
                <Form wishlist={wishlist} setWishlist={setWishlist}></Form>
              </div>
            </div>
            {/* table section end */}
            <div className="fixed top-2/4 -left-4 z-10">
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
