import React from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import SideBarMenus from "./SideBarMenus";

const SideBar = () => {
  const { height } = useWindowDimensions();
  if (height < 768) return null;
  return (
    <div className="sidebar">
      <SideBarMenus />
    </div>
  );
};

export default SideBar;
