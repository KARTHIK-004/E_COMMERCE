import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="contact_img" className="w-full md:max-w-[480px]"/>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-slate-600">Our Store</p>
          <p className=" text-xl text-slate-600">
            5555 Willms Station <br /> Suite 350, Washinton
          </p>
          <p className=" text-slate-600">Tel (455) 555-555 <br /> Email: admin@gmail.com</p>
          <p className="font-semibold text-xl text-slate-600"> Career at Lorem</p>
          <p className=" text-slate-600">Learn more about our teams and job openings</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
}

export default Contact;
