import React from 'react';
import { ButtonStyle } from '../styled-components';

interface Props {
    addTask: () => void;
};

const AddButton: React.FC<Props> = ({ addTask }) => {

    return (
        <ButtonStyle 
            type='button'
            onClick={addTask}>
                <i className="fa-solid fa-plus"></i>
        </ButtonStyle>

    )
}

export default AddButton;