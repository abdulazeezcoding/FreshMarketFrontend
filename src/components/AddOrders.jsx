import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddOrders = () => {
  const [name, setName] = useState(null);
  const [items, setItems] = useState(null);
  const [title, setTitle] = useState(null);
  const [details, setDetails] = useState(null);
  const [price, setPrice] = useState(null);
  const [orderID, setOrderID] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(null);
  const [country, setCountry] = useState(null);
  const [deliveryLocation, setDeliveryLocation] = useState(null);
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const newOrder = {
      name: name,
      items: items,
      title: title,
      details: details,
      price: price,
      orderID: orderID,
      orderQuantity: orderQuantity,
      country: country,
      deliveryLocation: deliveryLocation,
      status: status,
    };

    try {
      const response = await fetch("http://localhost:4000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        body: JSON.stringify(newOrder),
      });

      const data = await response.json();
      console.log(data);

      navigate("/order");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new order
          </h2>
          <form onSubmit={onSubmitHandler}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="w-full">
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Items
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product brand"
                  required=""
                  onChange={(e) => setItems(e.target.value)}
                />
              </div>
              <div class="w-full">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div class="w-full">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  OrderID
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                  onChange={(e) => setOrderID(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="item-weight"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Details
                </label>
                <input
                  type="number"
                  name="item-weight"
                  id="item-weight"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="12"
                  required=""
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>
              <div class="w-full">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Order Quantity
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                  onChange={(e) => setOrderQuantity(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="country"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <select
                  id="country"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option selected="">Ghana</option>
                  <option value="TV">Togo</option>
                  <option value="PC">France</option>
                  <option value="GA">Canada</option>
                  <option value="PH">Austria</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Delivery Location
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Status
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Order
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
