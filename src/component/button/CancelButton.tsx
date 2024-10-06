import React, { useEffect, useState } from "react"
import { ButtonStyle } from "../styled-components";

interface Props {
    setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const CancelButton: React.FC<Props>  = ({setEditIndex}) => {
    const [isNight, setIsNight] = useState(false);

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 17 || hour < 6) { // Set night time between 5 PM and 6 AM
            setIsNight(true);
        } else {
            setIsNight(false);
        }
    }, []);
    

    return (
        <ButtonStyle onClick={() => setEditIndex(null)} isNight={isNight}>
            <i className="fa-solid fa-xmark"></i>
        </ButtonStyle>
    )
};

export default CancelButton;