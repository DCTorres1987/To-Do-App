import { Button, Header, Icon, Input, Main, Title } from "./styled-components";



const ToDoTask = () => {

    return (
        <Main className='main'>
            <Header className='Header'>
                <Icon><i className="far fa-calendar-plus"></i></Icon>
                <Title>To-Do List</Title>
            </Header>
            <div>
                <Input type="text" id="myInput" placeholder="Add your task.." />
                <Button type='button'>Add +</Button>
            </div>
        </Main>
    )
}

export default ToDoTask;