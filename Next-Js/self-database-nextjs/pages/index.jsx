import { getAll } from "@/services/service";
import React from "react";

export default async function Home() {
  const data = await getAll();
  if (!data) return <p>Loading...</p>;
  const productsList = data.map((product) => {
    <div key={product.id}>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>;
  });
  return (
    <>
      <div>
        <div>
          <h1>Add Product</h1>

          <div>
            <form action="">
              <input type="text" />
            </form>
          </div>
        </div>
        <div>
          <h1>Products List</h1>
          <div>
            {productsList}
          </div>
        </div>
      </div>
    </>
  );
}
