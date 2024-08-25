import styled from "styled-components";

const Main = styled.div`
        background: white;
        border-radius: 25px;
        height: 600px;
        justify-content: center;
        margin: auto;
        max-width: 50%
`;

const Header = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    padding-left: 30px
`;

const Title = styled.h1`
    padding: 15px;
`;

const Icon = styled.span`
    font-size: 30px;
`;

const Input = styled.input`
    border-radius: 8px;
    height: 30px;
    margin-left: 30px;
    width: 300px;
`;

const ToDoTask = () => {

    return (
        <Main className='main'>
            <Header className='Header'>
                <Icon><i className="far fa-calendar-plus"></i></Icon>
                <Title>To-Do List</Title>
            </Header>
            <Input type="text" id="myInput" placeholder="Add your task.." />
        </Main>
    )
}

export default ToDoTask;