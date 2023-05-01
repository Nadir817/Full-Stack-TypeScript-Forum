import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const RightMenu = () => {
    const {height} = useWindowDimensions();
    if (height < 768) return null;
    return (<div className="rightmenu">RightMenu</div>)
}

export default RightMenu;