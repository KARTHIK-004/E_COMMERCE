import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex md:flow-row gap-16">
        <img
          src={assets.about_img}
          alt="about_img"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 to-slate-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quae incidunt consequuntur ab numquam officiis quasi magni suscipit
            ipsum soluta reiciendis veniam necessitatibus aliquam cupiditate,
            maxime similique, esse rerum mollitia. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quae incidunt consequuntur ab numquam officiis quasi magni suscipit
            ipsum soluta reiciendis veniam necessitatibus aliquam cupiditate,
            maxime similique, esse rerum mollitia. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <b className="text-slate-800"> Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            repudiandae eos, repellendus dolore odit tenetur amet illo officiis
            exercitationem excepturi id consectetur velit cupiditate vitae
            magnam deserunt in porro nulla.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-slate-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            possimus blanditiis earum quasi, rem, reprehenderit beatae fugiat
            natus, illo libero laudantium? Odio velit, quas enim amet nobis
            recusandae similique pariatur.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-slate-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            possimus blanditiis earum quasi, rem, reprehenderit beatae fugiat
            natus, illo libero laudantium? Odio velit, quas enim amet nobis
            recusandae similique pariatur.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Expcetional Customer Service:</b>
          <p className="text-slate-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            possimus blanditiis earum quasi, rem, reprehenderit beatae fugiat
            natus, illo libero laudantium? Odio velit, quas enim amet nobis
            recusandae similique pariatur.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
}

export default About;
