import { Button } from "../styled-components"

const AddButton = (addTask) => {

    return (
        <Button 
        type='button' 
        onClick={addTask}>Add +
        </Button>

    )
}

export default AddButton;