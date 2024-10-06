import styled from "styled-components";
import React, { forwardRef }  from 'react';

export const Main = styled.div<{ background: string }>`
    background: ${(props) => props.background};
    border-radius: 25px;
    height: auto; // Changed to auto to adjust with content height
    min-height: 600px; // Ensures a minimum height
    justify-content: center;
    margin: 50px auto; /* Center the app horizontally */
    width: 100%; /* Takes full width of the viewport */
    max-width: 600px; /* Limit the max width to 600px for large screens */
    padding: 20px; /* Added padding for spacing */
    display: flex;
    flex-direction: column; /* Vertically aligns content */
    align-items: center; /* Centers the content horizontally */
    position: relative;
    transition: background 0.5s ease;

    /* Adding stars for the night background */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        pointer-events: none;
        z-index: 1;
    }

    /* Nighttime background star effect */
    ${(props) =>
        props.background.includes('#141E30') &&
        `
        &::after {
        background-image: radial-gradient(2px 2px at 20% 30%, white, transparent),
                            radial-gradient(1.5px 1.5px at 60% 70%, white, transparent),
                            radial-gradient(2px 2px at 80% 40%, white, transparent),
                            radial-gradient(1px 1px at 90% 80%, white, transparent),
                            radial-gradient(2.5px 2.5px at 30% 50%, white, transparent),
                            radial-gradient(1px 1px at 50% 90%, white, transparent),
                            radial-gradient(2px 2px at 40% 80%, white, transparent);
        }
    `}

    /* Responsive adjustments */
    @media (max-width: 768px) {
        max-width: 90%; /* Adjust width on tablets */
        padding: 15px; /* Reduce padding for smaller screens */
    }

    @media (max-width: 480px) {
        max-width: 95%; /* Adjust width for mobile screens */
        padding: 10px; /* Further reduce padding on mobile */
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

export const EditContainer = styled.div`
    display: flex;
    margin-bottom: 15px;
`

export const  EditButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;

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
    margin-bottom: 5px;
    padding: 9px;
    width: 400px; /* Take full width of the container */
    box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Soft shadow for neatness */
    word-wrap: break-word; /* Ensure long text breaks properly */

    @media (max-width: 768px) {
        width: 90%; /* Adjust width for tablets */
    }

    @media (max-width: 480px) {
        width: 100%; /* Full width for mobile */
    }
`;

const StyledListItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style-type: unset;
  width: 100%;
`;

// Define the props for your ListItemContainer
interface ListItemContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

// Forward ref component with correct types
export const ListItemContainer = forwardRef<HTMLDivElement, ListItemContainerProps>(
  (props, ref) => (
    <StyledListItemContainer ref={ref} {...props} />
  )
);


export const StyledTextArea = styled.textarea`
    border: 1px solid #ccc;
    border-radius: 8px;  // Curved corners
    height: auto;
    font-size: 16px;
    outline: none;
    padding: 10px;
    resize: none;  // Disable resizing by the corner
    width: 90%; /* Take 90% of the wrapper's width, leaving space for the button */

    &:focus {
        border-color: #007BFF;
        outline: none;
    }

    @media (max-width: 768px) {
        width: 85%; /* Adjust width for tablets */
    }

    @media (max-width: 480px) {
        width: 85%; /* Adjust width for mobile */
        font-size: 14px; /* Reduce font size on mobile */
    }
`;

export const TextAreaWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    margin-bottom: 15px; /* Space between textarea and tasks */
`;

export const ButtonStyle = styled.button<{ isNight: boolean }>`
    background-color: ${(props) => (props.isNight ? 'white' : 'black')}; /* Dynamic based on time */
    color: ${(props) => (props.isNight ? 'black' : 'white')}; /* Contrast text color */
    border: none;
    border-radius: 30%; /* Round button */
    height: 40px; /* Initial size */
    width: 40px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.isNight ? '#f0f0f0' : '#333')}; /* Hover effect */
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        width: 35px;
        height: 35px; /* Adjust button size for tablets */
    }

    @media (max-width: 480px) {
        width: 30px;
        height: 30px; /* Adjust button size for mobile */
    }
`;