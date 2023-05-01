import React, {useState, useEffect} from "react";
import { getCategories } from "../services/DataService";
import Category from "../models/Category";
import { useWindowDimensions } from "../hooks/useWindowDimensions";


const LeftMenu = () => {
    const {height} = useWindowDimensions();
    const [categories, setCategories] = useState<JSX.Element>(<div>Left Menu</div>);

    useEffect(()=> {
        getCategories().then((categories: Array<Category>) => {
            const cats = categories.map(cat => <li key={cat.id}>{cat.name}</li>);
            setCategories(<ul className="category">{cats}</ul>)
        }).catch(err => console.log(err))
    }, [])
    if (height < 768) return null;
    return (<div className="leftmenu">{categories}</div>)
}

export default LeftMenu;