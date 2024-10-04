import React from "react"
import { ButtonStyle } from "../styled-components";

interface Props {
    setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const CancelButton: React.FC<Props>  = ({setEditIndex}) => {


    return (
        <ButtonStyle onClick={() => setEditIndex(null)}>
            <i className="fa-solid fa-xmark"></i>
        </ButtonStyle>
    )
};

export default CancelButton;