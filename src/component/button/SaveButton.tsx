import React, { useEffect, useState } from 'react';
import { ButtonStyle } from "../styled-components"

interface Props {
    saveEditedTask: () => void;
};

const SaveButton: React.FC<Props> = ({saveEditedTask }) => {
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
    <ButtonStyle
        onClick={saveEditedTask} isNight={isNight} >
        <i className="fa-solid fa-floppy-disk"></i>
    </ButtonStyle>
)};

export default SaveButton;