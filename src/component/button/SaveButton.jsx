import { Button } from "../styled-components"

const SaveButton = (saveEditedTask) => {

return (
    <Button 
        onClick={saveEditedTask}>
        Save
    </Button>
)};

export default SaveButton;