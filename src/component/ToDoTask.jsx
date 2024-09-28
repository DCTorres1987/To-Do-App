import { Button, Header, Icon, IconButton, Input, ListItem, ListItemContainer, Main, TaskContainer, Title } from "./styled-components";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import React, { useContext } from "react";
import { TaskContext } from "./ToDoContext";


const ToDoTask = () => {
    const {
      tasks,
      newTask,
      editIndex,
      editText,
      setNewTask,
      addTask,
      toggleTaskCompletion,
      deleteTask,
      handleEditTask,
      handleOnDragEnd,
      saveEditedTask,
      setEditIndex,
      setEditText,
    } = useContext(TaskContext);


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();  // Add task when Enter is pressed
    }
  };

  const handleKeyDownEdit = (event) => {
    if (event.key === 'Enter') {
        saveEditedTask();  // Add task when Enter is pressed
      }
  }

  const isEditMode = editIndex !== null;

    return (
        <Main className='main'>
            <Header className='Header'>
                <Icon><i className="far fa-calendar-plus"></i></Icon>
                <Title>To-Do List</Title>
            </Header>
            {!isEditMode ? (<div>
                <Input 
                    placeholder="Add your task.." 
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <Button 
                    type='button' 
                    onClick={addTask}>Add +
                </Button>
            </div>) :
            (<div>
                <Input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleKeyDownEdit}
                />
                <Button onClick={saveEditedTask}>Save</Button>
                <Button onClick={() => setEditIndex(null)}>Cancel</Button>
            </div>)
            }
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="tasks">
                    {(provided) => (
                            <ListItemContainer
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {tasks.map((task, index) => (
                                    <Draggable key={index} draggableId={`task-${index}`} index={index}>
                                        {(provided) => (
                                            <ListItem 
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <TaskContainer className='taskContainer'>
                                                    <div className='taskName'>
                                                        <span
                                                            style={{
                                                                textDecoration: task.completed ? "line-through" : "none",
                                                            }}
                                                            onClick={() => toggleTaskCompletion(index)}
                                                        >
                                                            {task.text}
                                                        </span>
                                                    </div>
                                                    <div className ='iconContainer'>
                                                        <IconButton onClick={() => handleEditTask(index)}>
                                                            <i class="fa-solid fa-pen-to-square"></i>
                                                        </IconButton>
                                                        <IconButton onClick={() => deleteTask(index)}>
                                                            <i class="fa-solid fa-trash-can"></i>
                                                        </IconButton>
                                                    </div>
                                                </TaskContainer>
                                            </ListItem>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                            </ListItemContainer>
                        )}
                </Droppable>
            </DragDropContext>
        </Main>
    )
};

export default ToDoTask;