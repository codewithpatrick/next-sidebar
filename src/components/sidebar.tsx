"use client";

import {
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from "lucide-react";

import { useMediaQuery } from "usehooks-ts";

import { SidebarItems } from "@/types";
import SidebarButton from "./sidebar-button";
import SidebarDesktop from "./sidebar-desktop";
import SidebarMobile from "./sidebar-mobile";

const sidebarItems: SidebarItems = {
  links: [
    {
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      label: "Messages",
      href: "/item/messages",
      icon: Mail,
    },
    {
      label: "Lists",
      href: "/item/lists",
      icon: List,
    },
    {
      label: "Bookmarks",
      href: "/item/bookmarks",
      icon: Bookmark,
    },
    {
      label: "Communities",
      href: "/item/communities",
      icon: Users,
    },
    {
      label: "Profile",
      href: "/item/profile",
      icon: User,
    },
  ],
  extras: (
    <div className="flex flex-col gap-2">
      <SidebarButton icon={MoreHorizontal} className="w-full">
        More
      </SidebarButton>
      <SidebarButton
        className="w-full justify-center text-white"
        variant="default"
      >
        Tweet
      </SidebarButton>
    </div>
  ),
};

export function Sidebar() {
  const isDesktop = useMediaQuery("(min-width: 640px)", {
    initializeWithValue: false,
  });

  if (isDesktop) return <SidebarDesktop sidebarItems={sidebarItems} />;

  return <SidebarMobile sidebarItems={sidebarItems} />;
}
