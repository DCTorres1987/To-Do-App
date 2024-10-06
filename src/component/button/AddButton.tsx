import React, { useEffect, useState } from 'react';
import { ButtonStyle } from '../styled-components';
import styled from 'styled-components';

interface Props {
    addTask: () => void;
};

const AddButtonContainer = styled.div`
    margin-left: 8px;

`;

const AddButton: React.FC<Props> = ({ addTask }) => {
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
        <AddButtonContainer>
            <ButtonStyle 
                type='button'
                onClick={addTask}
                isNight={isNight} >
                    <i className="fa-solid fa-plus"></i>
            </ButtonStyle>
        </AddButtonContainer>

    )
}

export default AddButton;