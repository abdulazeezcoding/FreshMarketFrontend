import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import OrderDelete from "./OrderDelete";
import { RotatingLines } from "react-loader-spinner";
// import { toast } from "react-toastify";

export const OrderPage = () => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);

  //   const navigate = useNavigate();

  const getOrders = async () => {
    try {
      //   console.log(`${process.env.BACKEND_URI}/product`);
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_FRESH_MARKET_API}/api/order`);
      const data = await response.json();
      console.log(data);
      setOrders(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {loading === true ? (
        <div className="flex justify-center items-center h-screen">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div>
          <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 md:ml-64 min-h-screen">
          <h3 class="text-gray-700 text-3xl ml-6 mt-4 mb-4 font-medium">Orders</h3>

            <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
              {/* Start coding here  */}
              <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    {/* <Link to={"/order/add"}>
                      {" "}
                      <button
                        type="button"
                        class="flex items-center justify-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      >
                        Back
                      </button>
                    </Link> */}
                  </div>
                  <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <Link to={"/order/add"}>
                      {" "}
                      <button
                        type="button"
                        class="flex items-center justify-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      >
                        Add order
                      </button>
                    </Link>
                  </div>
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-4 py-3">
                          Order Name
                        </th>
                        <th scope="col" class="px-4 py-3">
                          Order title
                        </th>
                        <th scope="col" class="px-4 py-3">
                          Items
                        </th>

                        <th scope="col" class="px-4 py-3">
                          Price
                        </th>
                        <th scope="col" class="px-4 py-3">
                          Order ID
                        </th>
                        <th scope="col" class="px-4 py-3">
                          Details
                        </th>
                        <th scope="col" class="px-4 py-3">
                          Order Qty
                        </th>
                        <th scope="col" class="px-4 py-3">
                          Country
                        </th>
                        <th scope="col" class="px-4 py-3">
                          Delivery Location
                        </th>
                        <th scope="col" class="px-4 py-3">
                          Status
                        </th>
                        <th scope="col" class="px-4 py-3">
                          Edit
                        </th>
                        <th scope="col" class="px-4 py-3">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders !== null &&
                        orders.map((order) => {
                          return (
                            <tr class="border-b text-black dark:border-gray-700">
                              <td class="px-4 py-3">{order.name}</td>
                              <td class="px-4 py-3">{order.title}</td>
                              <td class="px-4 py-3">{order.items}</td>
                              <td class="px-4 py-3">{order.price}</td>
                              <td class="px-4 py-3">{order.orderID}</td>
                              <td class="px-4 py-3">{order.details}</td>
                              <td class="px-4 py-3">{order.orderQuantity}</td>
                              <td class="px-4 py-3">{order.country}</td>
                              <td class="px-4 py-3">
                                {order.deliveryLocation}
                              </td>
                              <td class="px-4 py-3">{order.status}</td>
                              <td class="px-4 py-3">
                                <Link to={`/order/${order._id}/edit`}>
                                  <MdEdit className="text-black text-xl" />
                                </Link>
                              </td>
                              <td class="px-4 py-3">
                                <OrderDelete orderId={order._id} />
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
