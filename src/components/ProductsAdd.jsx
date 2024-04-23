import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductsAdd = () => {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [qty, setQty] = useState(null);
  const [category, setCategory] = useState(null);

  const [image, setImage] = useState();

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: name,
      description: description,
      price: price,
      qty: qty,
      category: category,
      image: image,
    };

    try {
      const response = await fetch("http://localhost:4000/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        body: JSON.stringify(newProduct),
      });

      const data = await response.json();
      console.log(data);

      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section class="bg-gray-300 dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <form onSubmit={onSubmitHandler}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="w-full">
                <label
                  for="setQuantityInStock"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quantity in stock
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product brand"
                  required=""
                  onChange={(e) => setQty(e.target.value)}
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
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option selected="">Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="8"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div class="mx-auto w-full max-w-xs">
                <label
                  for="example1"
                  class="mb-1 block text-sm font-medium text-gray-700"
                >
                  Upload file
                </label>
                <input
                  id="example1"
                  type="file"
                  class="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-700 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
