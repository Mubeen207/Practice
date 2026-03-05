import { getAll } from "@/services/service";
import React, { useState } from "react";

export default function Home({ products }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productsList, setProductsList] = useState(products);
  const productItems = productsList.map((product) => {
    return (
      <div key={product.id} className="border p-2 rounded-sm">
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <button
          onClick={() => handleDelete(product.id)}
          className="flex justify-center items-center cursor-pointer px-1 py-0.5 rounded-sm font-bold text-red-500 bg-red-200 text-sm hover:bg-red-500 hover:text-white transition-all"
        >
          Delete
        </button>
      </div>
    );
  });

  async function handleDelete(id) {
    await fetch(`/api/products?productId=${id}`, {
      method: "DELETE",
    });
    setProductsList((list) => list.filter((product) => product.id !== id));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        price,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newProduct = await response.json();

    setProductsList((list) => [...list, newProduct]);

    setTitle("");
    setPrice("");
    setDescription("");
  }
  return (
    <>
      <div className="m-2">
        <div>
          <h1 className="text-center py-5 text-2xl font-bold">Add Product</h1>

          <div>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                className="border px-2 py-1 rounded-sm"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="number"
                className="border px-2 py-1 rounded-sm"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                className="border px-2 py-1 rounded-sm"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button className="flex justify-center items-center cursor-pointer px-2 py-1 rounded-sm font-bold text-green-600 bg-green-200 text-sm hover:bg-green-500 hover:text-white transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
          <h1 className="text-center py-5 text-2xl font-bold">Products List</h1>
          <div className="grid grid-cols-3 gap-2">{productItems}</div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      products: getAll(),
    },
  };
}
