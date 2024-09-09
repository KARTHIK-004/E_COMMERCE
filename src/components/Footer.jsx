import React from "react";
import { assets } from "../assets/assets.js";

function Footer() {
  return (
    <>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div className="">
        <img src={assets.logo} alt="logo" className="mb-5 w-32" />
        <p className="w-full md:w-2/3 text-slate-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          iusto dolor hic eaque, cumque quibusdam ducimus atque ipsa, enim
          nostrum distinctio consequatur architecto porro fuga possimus illo.
          Veritatis, iusto optio.
        </p>
      </div>
    <div>
      <p className="text-xl font-medium mb-5">COMPANY</p>
      <ul className="flex flex-col gap-1 text-slate-600">
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    <div>
      <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
      <ul className="flex flex-col gap-1 text-slate-600">
        <li>+123456</li>
        <li>Contact@gmail.com</li>
      </ul>
    </div>

    
    </div>
    <div className="">
    <hr />
    <p className="py-5 text-sm text-center">Copyright 2024 -All Right Reserved</p>
  </div>
</>
  );
}

export default Footer;
