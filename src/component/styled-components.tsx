import styled from "styled-components";
import React, { forwardRef }  from 'react';

export const Main = styled.div`
        background: #efefef;
        border-radius: 25px;
        height: 600px;
        justify-content: center;
        margin: auto;
        max-width: 36%
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
    width: 300px;
`;

export const Button = styled.button`
    height: 30px;
    width: 55px;
    margin-left: 8px;
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