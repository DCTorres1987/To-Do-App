import React from 'react';
import { Button } from "../styled-components";

interface Props {
    addTask: () => void;
};

const AddButton: React.FC<Props> = ({ addTask }) => {

    return (
        <Button 
            type='button'
            onClick={addTask}>
                Add +
        </Button>

    )
}

export default AddButton;