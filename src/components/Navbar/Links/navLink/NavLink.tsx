"use client";
import Link from "next/link";
import React from "react";
import classes from "./index.module.css";
import { usePathname } from "next/navigation";

type ItemType = {
  item: {
    title?: string;
    path?: string;
  };
};

const NavLink = ({ item }: ItemType) => {
  const pathName = usePathname();
  return (
    <Link
      key={item.title}
      href={item.path}
      className={`${classes.container} ${
        pathName === item.path && classes.active
      } `}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
