import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const SideBar = () => {
    const {height} = useWindowDimensions();
    if (height < 768) return null;
    return (<div className="sidebar">SideBar</div>)
}

export default SideBar;