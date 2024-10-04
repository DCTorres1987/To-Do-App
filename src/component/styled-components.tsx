import styled from "styled-components";
import React, { forwardRef }  from 'react';

export const Main = styled.div`
        background: #efefef;
        border-radius: 25px;
        height: 600px;
        justify-content: center;
        margin: auto;
        max-width: 36%;

        @media (max-width: 768px) {
            max-width: 80%;
        }

        @media (max-width: 480px) {
            max-width: 95%;
        }
`;

export const Header = styled.div`
    align-items: center;
    background: white;
    border-bottom: solid darkgrey;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    padding: 15px;
`;

export const Icon = styled.span`
    font-size: 30px;
`;

export const Input = styled.input`
    border-radius: 8px;
    height: 30px;
    margin-left: 40px;
    min-width: 74%;
    position: static;
/* 
    @media (max-width: 768px) {
        max-width: 74%;
        margin-left: 40px;
    }

    @media (max-width: 480px) {
        min-width: 74%;
    } */
`;

export const EditContainer = styled.div`
    display: flex;
`

export const  EditButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 39%;

    @media (max-width: 768px) {
            right: 27%;
        }

    @media (max-width: 465px) {
        right: 21%;
    }
`

export const ButtonStyle = styled.button`
    background-color: transparent;
    border: unset;
    height: 30px;
    margin-top: 4px;
    padding-right: 5px;
    right: 39%;

    @media (max-width: 768px) {
            right: 27%;
        }

    @media (max-width: 465px) {
        right: 21%;
    }
`;

export const IconButton = styled.button`
    background-color: transparent;
    border: none;
`;

export const TaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ListItem = styled.div`
    background-color: white;
    border: solid lightgrey;
    border-radius: 10px;
    padding: 9px;
    width: 78%;
`

const StyledListItemContainer = styled.div`
  list-style-type: unset;
  margin: 10px 0 0 40px;
`;

// Define the props for your ListItemContainer
interface ListItemContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

// Forward ref component with correct types
export const ListItemContainer = forwardRef<HTMLDivElement, ListItemContainerProps>(
  (props, ref) => (
    <StyledListItemContainer ref={ref} {...props} />
  )
);