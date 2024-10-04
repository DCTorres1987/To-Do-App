import React from 'react';
import { ButtonStyle } from "../styled-components"

interface Props {
    saveEditedTask: () => void;
};

const SaveButton: React.FC<Props> = ({saveEditedTask}) => {

return (
    <ButtonStyle 
        onClick={saveEditedTask}>
        <i className="fa-solid fa-floppy-disk"></i>
    </ButtonStyle>
)};

export default SaveButton;