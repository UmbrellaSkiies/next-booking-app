"use client";

import React from "react";

import { Search } from "@/components/home/search";
import { Benefits } from "@/components/home/benefits";
import { Featured } from "@/components/home/featured";
import { Suggestions } from "@/components/home/suggestions";

const Home = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Search />
      <Benefits />
      <Featured />
      <Suggestions />
    </div>
  );
};

export default Home;