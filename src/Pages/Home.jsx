import React from "react";
import useProducts from "../Hook/useProducts";
import { PiOrange } from "react-icons/pi";
import { NavLink } from "react-router";
const Home = () => {
  const { products } = useProducts();

  const sliceProduct = products.slice(0, 9);
  console.log(sliceProduct);

  return (
    <div className="container">
      <div className="flex justify-between items-center my-6 border-b pb-3">
        <div className="font-bold text-2xl text-gray-800 flex items-center gap-2">
          <h1 className="text-black-600">Products</h1>
          <span className="text-white bg-gray-400 px-4 py-1.5 rounded-full text-lg">
            {sliceProduct.length}
          </span>
        </div>

        <div>
          <NavLink
            to={"/product"}
            className="text-black-600 font-semibold hover:text-white  border border-gray-300 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
          >
            See All Products →
          </NavLink>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {sliceProduct.map((product) => (
          <div key={product.id} className="card bg-base-100 w-full shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
