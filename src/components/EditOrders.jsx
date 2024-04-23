import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditOrders = () => {
  const params = useParams();

  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [items, setItems] = useState(null);
  const [details, setDetails] = useState(null);
  const [price, setPrice] = useState(null);
  const [orderID, setOrderID] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(null);
  const [country, setCountry] = useState(null);
  const [deliveryLocation, setDeliveryLocation] = useState(null);
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();

  const getOrder = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/order/${params.id}`
      );
      const data = await response.json();

      setName(data.name);
      setTitle(data.title);
      setItems(data.items);
      setDetails(data.details);
      setPrice(data.price);
      setOrderID(data.orderID);
      setOrderQuantity(data.orderQuantity);
      setCountry(data.country);
      setDeliveryLocation(data.deliveryLocation);
      setStatus(data.status);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const editedOrders = {
      name: name,
      title: title,
      items: items,
      details: details,
      price: price,
      orderQuantity: orderQuantity,
      orderID: orderID,
      country: country,
      deliveryLocation: deliveryLocation,
      status: status,
    };

    try {
      const response = await fetch(
        `http://localhost:4000/api/order/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          body: JSON.stringify(editedOrders),
        }
      );
      const data = await response.json();
      console.log(data);

      navigate("/order");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, [params.id]);

  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Update order
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
                  value={name}
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
                  value={title}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="w-full">
                <label
                  for="item"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Items
                </label>
                <input
                  type="text"
                  name="item"
                  id="item"
                  value={items}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product item"
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
                  value={price}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div class="w-full">
                <label
                  for="orderID"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  OrderID
                </label>
                <input
                  type="text"
                  name="orderID"
                  id="orderID"
                  value={orderID}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="hdj7898ds"
                  required=""
                  onChange={(e) => setOrderID(e.target.value)}
                />
              </div>
              <div class="w-full">
                <label
                  for="quantity"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Order Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={orderQuantity}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="12"
                  required=""
                  onChange={(e) => setOrderQuantity(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <select
                  id="category"
                  value={country}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option selected={country}>{country}</option>
                  <option value="GH">Ghana</option>
                  <option value="TG">Togo</option>
                  <option value="UK">UK</option>
                  <option value="CA">Canada</option>
                </select>
              </div>
              <div>
                <label
                  for="item-weight"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Details
                </label>
                <input
                  type="text"
                  name="item-weight"
                  id="item-weight"
                  value={details}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                  required=""
                  onChange={(e) => setDetails(e.target.value)}
                />
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
                  value={deliveryLocation}
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
                  value={status}
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
              Update Order
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
