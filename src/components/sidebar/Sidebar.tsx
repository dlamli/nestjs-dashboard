import Image from "next/image";
import React from "react";
import { RiNextjsLine } from "react-icons/ri";
import { SlCalculator } from "react-icons/sl";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CgPokemon } from "react-icons/cg";
import { SidebarMenuItem } from "@/components";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <MdOutlineSpaceDashboard size={25} />,
    title: "Dashboard",
    subTitle: "Visualize your data",
  },
  {
    path: "/dashboard/counter",
    icon: <SlCalculator size={25} />,
    title: "Counter",
    subTitle: "Counter client site",
  },
  {
    path: "/dashboard/pokemons",
    icon: <CgPokemon size={25} />,
    title: "Pokemons",
    subTitle: "Static Generation",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-72 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
          <RiNextjsLine className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full size-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="Avatar"
              width={32}
              height={32}
            />
          </span>
          <span className="text-sm md:text-base font-bold">User</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
