import React from 'react';
import { Button } from "../styled-components"

interface Props {
    saveEditedTask: () => void;
};

const SaveButton: React.FC<Props> = ({saveEditedTask}) => {

return (
    <Button 
        onClick={saveEditedTask}>
        Save
    </Button>
)};

export default SaveButton;