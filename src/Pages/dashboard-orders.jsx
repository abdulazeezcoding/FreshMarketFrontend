import React from "react";
import flag from "../assets/images/ghana-flag.svg";
import { BsCart3 } from "react-icons/bs";
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { OrderPage } from "../components/OrderPage";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";



export default function DashboardOrders() {
  return (
    <>
    <div className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4">
      <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
        <img src={flag} alt="" className="w-7 h-7 rounded object-cover"/>
        <span className="text-white text-lg font-bold ml-3">Fresh Market</span>
      </a>
      <ul className="mt-4">
          <li className="mb-2">
              <Link to="/dashboard" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <MdDashboard className="mr-3 text-lg " />
                <span className="text-sm  font-bold">DASHBOARD</span>
              </Link>
          </li>
          <li className="mb-2">
              <Link to="/orders" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <BsCart3 className="mr-3 text-lg " />
                <span className="text-sm  font-bold">ORDERS</span>
              </Link>
          </li>
          <li className="mb-2">
              <Link to="/products" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <FaBasketShopping className="mr-3 text-lg " />
                <span className="text-sm  font-bold">PRODUCTS</span>
              </Link>
          </li>
          <li className="mb-2">
              <Link to="/users" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                <FaUser className="mr-3 text-lg " />
                <span className="text-sm  font-bold">USERS</span>
              </Link>
          </li>
          <li className="mb-2">
              <Link
                to="/"
                className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"
              >
                <FaUser className="mr-3 text-lg " />
                <span className="text-sm  font-bold">
                  <Logout />
                </span>
              </Link>
            </li>
      </ul>
    </div>
    <OrderPage />
    </>
  );
}