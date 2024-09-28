import { Button, Header, Icon, IconButton, Input, ListItem, ListItemContainer, Main, TaskContainer, Title } from "./styled-components";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import React, { useContext } from "react";
import { TaskContext } from "./ToDoContext";
import AddButton from "./button/AddButton";
import SaveButton from "./button/SaveButton";


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


  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const handleKeyDownEdit = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
                <AddButton addTask={addTask} />
            </div>) :
            (<div>
                <Input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleKeyDownEdit}
                />
                <SaveButton saveEditedTask={saveEditedTask} />
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
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </IconButton>
                                                        <IconButton onClick={() => deleteTask(index)}>
                                                            <i className="fa-solid fa-trash-can"></i>
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