"use client"
import React, { useEffect, useState } from "react";
import "./style.css";
import { ButtonSecondary } from "../../_components/Button/Button";
import { MainApi,Storage } from "@/app/utils/MainApi";

export default function WelcomeSection({data}) {
  return (
    <div
      className="relative oil-section h-screen overflow-hidden"
      style={{
        backgroundImage: data ? `url(${Storage + data.image})` : undefined,
      }}
    >
      <div className="relative z-20  container">
        <div className="grid md:grid-cols-2 md:gap-[100px] pb-[60px]">
          <h1 className="oil_gaz_front text-white">
            {data ? data.title : "Loading..."}
          </h1>
          <p className="text-white oil_gaz_paragraph">
            {data ? data.subtitle : ""}
          </p>
        </div>
        <div className="flex items-center md:hidden relative h-[200px]">
          {/* Background image is now handled by the parent div's style */}
          <ButtonSecondary link={'#get_in_touch'} text="Get in  touch" addClassName={' absolute bottom-[-30%] left-[50%] translate-x-[-50%] translate-y-[-50%] '} />
        </div>
        <ButtonSecondary text="Get in  touch" addClassName={'hidden-btn md:flex'} link={'#get_in_touch'} />
      </div>
      <div className="absolute bottom-[0px] right-[0px] w-full z-10 text-white md:py-[50px] flex items-center md:justify-center justify-start md:gap-[50px] text-[18px]  flex-col md:flex-row ">
        <span className="res-span">Drive innovation</span>
        <span className="res-span">Optimize efficiency</span>
        <span className="res-span">Ensure sustainability</span>
      </div>
    </div>
  );
}