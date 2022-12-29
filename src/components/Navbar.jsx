import React, { useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Avatar, Dropdown } from "flowbite-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [, setToken] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    navigate("/login");
  };

  const data = JSON.parse(localStorage.getItem("user"));

  return (
    <React.Fragment>
      <nav className="bg-current border-gray-200 dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl md:px-0 py-2.5">
          <span href="" className="flex items-center">
            <Link className="text-white hover:text-blue-500 dark:hover:text-white">
              {/* icon666.com - MILLIONS vector ICONS FREE */}
              <svg
                fill="currentColor"
                className="w-11 h-11"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="-3 0 70 65"
              >
                <path d="M63.98676,20.36877a2.044,2.044,0,0,0-.40766-1.0968L57,10.81311V3.5a2.0001,2.0001,0,0,0-2-2H9a2.0001,2.0001,0,0,0-2,2v7.31311L.4209,19.272A2.162,2.162,0,0,0,0,20.5v7a7.00818,7.00818,0,0,0,7,7v24H5a2,2,0,0,0,0,4H59a2,2,0,0,0,0-4H57v-24a7.00818,7.00818,0,0,0,7-7v-7C64,20.45508,63.98969,20.413,63.98676,20.36877ZM11,5.5H53v4H11Zm-1.02148,8h44.043l3.88965,5H6.08887ZM45,58.5H35v-16H45Zm8,0H49v-18a2.0001,2.0001,0,0,0-2-2H33a2.0001,2.0001,0,0,0-2,2v18H11V33.24066a7.00849,7.00849,0,0,0,1-.84125,7.001,7.001,0,0,0,10,0,7.001,7.001,0,0,0,10,0,7.001,7.001,0,0,0,10,0,7.001,7.001,0,0,0,10,0,7.00316,7.00316,0,0,0,1,.84143Zm7-31a3.0004,3.0004,0,0,1-5.48828,1.67676,3.03518,3.03518,0,0,0-5.02246-.00147,3.02123,3.02123,0,0,1-4.97754.00147,3.03518,3.03518,0,0,0-5.02246-.00147,3.02123,3.02123,0,0,1-4.97754.00147,3.03518,3.03518,0,0,0-5.02246-.00147,3.02123,3.02123,0,0,1-4.97754.00147,3.03518,3.03518,0,0,0-5.02246-.00147,3.02123,3.02123,0,0,1-4.97754.00147,3.03518,3.03518,0,0,0-5.02246-.00147A3.00039,3.00039,0,0,1,4,27.5v-5H60Z" />
                <path d="M16.99832,38.5a2.00169,2.00169,0,1,0,2.0015,2.00169A2.00735,2.00735,0,0,0,16.99832,38.5Z" />
              </svg>
            </Link>

            <a
              href="https://www.tokopedia.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="pl-1 text-white self-center text-2xl font-bold whitespace-nowrap dark:text-blue hover:text-blue-500"
            >
              zenTech
            </a>
          </span>
          <div className="flex items-center">
            {localStorage.getItem("token") && (
              <div className="z-40 px-5 text-white self-center text-xl font-bold whitespace-nowrap  ">
                <Dropdown
                  label={
                    <Avatar
                      alt="User settings"
                      img="https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="
                      rounded={true}
                    />
                  }
                  arrowIcon={false}
                  inline={true}
                >
                  <div className="pl-4 pr-2 pb-3">
                    <p className="block text-sm">{data.nama}</p>
                    <p className="block truncate text-sm font-medium">
                      {data.email}
                    </p>
                  </div>
                  <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
            )}
          </div>
        </div>
      </nav>
      {localStorage.getItem("token") && (
        <nav className="sticky top-0 z-10 bg-gray-700 dark:bg-gray-700">
          <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
            <div className="flex items-center">
              <ul className="flex flex-row mt-1 mr-6 space-x-8 text-sm font-medium">
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/");
                    }}
                    className="text-gray-200 dark:text-white hover:text-blue-500"
                    aria-current="page"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/info");
                    }}
                    className="text-gray-200 dark:text-white hover:text-blue-500"
                  >
                    INFO
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/inputData");
                    }}
                    className="text-gray-200 dark:text-white hover:text-blue-500"
                  >
                    INPUT DATA
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/contact");
                    }}
                    className="text-gray-200 dark:text-white hover:text-blue-500"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
