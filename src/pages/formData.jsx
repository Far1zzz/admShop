import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormData = () => {
  const navigate = useNavigate();
  const [, setFetch] = useState(true);
  const { idToko } = useParams();
  const [, setCurrentId] = useState(-1);
  const [input, setInput] = useState({
    category: "",
    produkName: "",
    codeProduk: "",
    brandProduk: "",
    hargaProduk: "",
    dateIn: "",
    stok: "",
  });

  const handleInput = (e) => {
    const data = e.target.name;
    const value = e.target.value;

    // kondisi input
    if (data === "category") {
      setInput({ ...input, category: value });
    } else if (data === "produkName") {
      setInput({ ...input, produkName: value });
    } else if (data === "codeProduk") {
      setInput({ ...input, codeProduk: value });
    } else if (data === "brandProduk") {
      setInput({ ...input, brandProduk: value });
    } else if (data === "hargaProduk") {
      setInput({ ...input, hargaProduk: value });
    } else if (data === "dateIn") {
      setInput({ ...input, dateIn: value });
    } else if (data === "stok") {
      setInput({ ...input, stok: value });
    }
  };

  const handlePost = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    let {
      category,
      produkName,
      codeProduk,
      brandProduk,
      hargaProduk,
      dateIn,
      stok,
    } = input;

    if (!idToko) {
      axios
        .post(
          `${process.env.REACT_APP_API_ADMIN}/admToko`,
          {
            category,
            produkName,
            codeProduk,
            brandProduk,
            hargaProduk,
            dateIn,
            stok,
          },
          { headers: { Authorization: token } }
        )
        .then((res) => {
          console.log(res);
          setFetch(true);
          navigate("/info");
        });
    } else {
      axios
        .put(
          `${process.env.REACT_APP_API_ADMIN}/admToko/${idToko}`,
          {
            category,
            produkName,
            codeProduk,
            brandProduk,
            hargaProduk,
            dateIn,
            stok,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setFetch(true);
          navigate("/info");
        });
    }
    setCurrentId(-1);

    setInput({
      category: "",
      produkName: "",
      codeProduk: "",
      brandProduk: "",
      hargaProduk: "",
      dateIn: "",
      stok: "",
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (idToko !== undefined) {
      axios
        .get(`${process.env.REACT_APP_API_ADMIN}/admtoko/${idToko}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log(res);
          const data = res.data.dataToko.data;

          setInput({
            category: data.category,
            produkName: data.produkName,
            codeProduk: data.codeProduk,
            brandProduk: data.brandProduk,
            hargaProduk: data.hargaProduk,
            dateIn: data.dateIn,
            stok: data.stok,
          });
        });
    }
  }, []);

  return (
    <>
      <div className="">
        <form
          onSubmit={handlePost}
          className="m-4 rounded-lg bg-gray-400 pt-10 pb-10 px-10"
        >
          <h1 className="text-xl font-bold italic text-center pb-10">
            DATA TOKO
            <hr className="my-1 mx-auto w-full h-1 bg-gray-800 rounded border-0 md:my-1 dark:bg-gray-700" />
          </h1>
          <div className="grid lg:grid-cols-6 gap-2">
            <div className="relative lg:col-start-2 lg:col-span-4 z-0 mb-6 w-full">
              <input
                onChange={handleInput}
                value={input.category}
                type="text"
                name="category"
                id="kategori"
                className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="kategori"
                className="after:content-['*'] after:ml-0.5 after:text-red-500 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-gray-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:font-medium peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Kategori Barang
              </label>
            </div>
          </div>
          <div className="grid lg:grid-cols-6 gap-2">
            <div className="relative lg:col-start-2 lg:col-span-2 z-0 mb-6 w-full group">
              <input
                onChange={handleInput}
                value={input.codeProduk}
                type="text"
                name="codeProduk"
                id="codeBar"
                className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="codeBar"
                className="after:content-['*'] after:ml-0.5 after:text-red-500 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-gray-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                kode Barang
              </label>
            </div>
            <div className="relative lg:col-start-4 lg:col-span-2 z-0 mb-6 w-full group">
              <input
                onChange={handleInput}
                value={input.produkName}
                type="text"
                name="produkName"
                id="namaBarang"
                className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="namaBarang"
                className="after:content-['*'] after:ml-0.5 after:text-red-500 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-gray-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Nama Barang
              </label>
            </div>
          </div>
          <div className="grid lg:grid-cols-6 gap-2">
            <div className="relative lg:col-start-2 lg:col-span-2 z-0 mb-6 w-full group">
              <input
                onChange={handleInput}
                value={input.hargaProduk}
                type="Number"
                name="hargaProduk"
                id="harga"
                className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="harga"
                className="after:content-['*'] peer-focus:font-medium after:ml-0.5 after:text-red-500 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-gray-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Harga
              </label>
            </div>
            <div className="relative lg:col-start-4 lg:col-span-2 z-0 mb-6 w-full group">
              <input
                onChange={handleInput}
                value={input.brandProduk}
                type="text"
                name="brandProduk"
                id="brand"
                className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="brand"
                className="after:content-['*'] peer-focus:font-medium after:ml-0.5 after:text-red-500 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-gray-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Brand Barang
              </label>
            </div>
          </div>
          <div className="grid lg:grid-cols-6 gap-2">
            <div className="relative lg:col-start-2 lg:col-span-2 z-0 mb-6 w-full group">
              <input
                onChange={handleInput}
                value={input.dateIn}
                type="date"
                name="dateIn"
                id="masuk"
                className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="masuk"
                className="after:content-['*'] peer-focus:font-medium after:ml-0.5 after:text-red-500 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-gray-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Tanggal Masuk
              </label>
            </div>
            <div className="relative lg:col-start-4 col-span-2 z-0 mb-6 w-full group">
              <input
                onChange={handleInput}
                value={input.stok}
                type="number"
                name="stok"
                id="stok"
                className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="stok"
                className="after:content-['*'] peer-focus:font-medium after:ml-0.5 after:text-red-500 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-gray-400 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Stok
              </label>
            </div>
          </div>

          <div className="grid lg:grid-cols-6 gap-2">
            <div className="relative lg:col-start-2 lg:col-span-2 z-0 mb-6 w-full group">
              <button
                type={"submit"}
                className="flex mb-6 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded"
              >
                {/* icon666.com - MILLIONS vector ICONS FREE */}
                <svg
                  id="Solid"
                  viewBox="0 0 502 502"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" mr-1 -ml-1 w-6 h-6"
                >
                  <path d="m272 384a96 96 0 1 0 96-96 96.108 96.108 0 0 0 -96 96zm40-8h48v-48a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16h-48v48a8 8 0 0 1 -16 0v-48h-48a8 8 0 0 1 0-16z" />
                  <path d="m272.6 442.613a111.947 111.947 0 0 1 71.217-167.976c-31.117-42.497-77.107-66.637-127.817-66.637-45.522 0-87.578 19.485-118.42 54.865-31.063 35.633-48.567 85.3-49.538 140.291 18.365 9.261 93.77 44.844 167.958 44.844a312.1 312.1 0 0 0 56.6-5.387z" />
                  <circle cx={216} cy={112} r={80} />
                </svg>
                Add Data
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default FormData;
