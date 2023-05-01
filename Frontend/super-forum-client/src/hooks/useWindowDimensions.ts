import { useState, useEffect } from 'react';

export interface WindowDimension {
    width: number,
    height: number
}

export const useWindowDimensions = (): WindowDimension => {
    const [dimension, setDimension] = useState<WindowDimension>({
        width: 0,
        height: 800
    });

    const handleRize = () => {
        setDimension({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener("resize", handleRize);

        return () => {
            window.removeEventListener("resize", handleRize);
        };
    }, []);

    return dimension;
};