import React from 'react';
import { AddButtonStyle } from '../styled-components';

interface Props {
    addTask: () => void;
};

const AddButton: React.FC<Props> = ({ addTask }) => {

    return (
        <AddButtonStyle 
            type='button'
            onClick={addTask}>
                <i className="fa-solid fa-plus"></i>
        </AddButtonStyle>

    )
}

export default AddButton;