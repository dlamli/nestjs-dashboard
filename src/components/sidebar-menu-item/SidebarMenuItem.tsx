"use client";

import { ISidebarMenuItem } from "@/libs";
import { usePathname } from "next/navigation";

export const SidebarMenuItem = ({
  icon,
  title,
  subTitle,
  path,
}: ISidebarMenuItem) => {
  const pathName = usePathname();

  return (
    <a
      href={path}
      className={`${
        pathName === path && "bg-blue-800"
      } w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </a>
  );
};
