import { 
    Header, 
    Icon, 
    IconButton, 
    EditContainer, 
    EditButtonsContainer, 
    ListItem, 
    ListItemContainer, 
    Main, 
    StyledTextArea,
    TaskContainer, 
    TextAreaWrapper,
    Title 
} from "./styled-components";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import React, { useContext, useEffect } from "react";
import { TaskContext } from "./ToDoContext";
import AddButton from "./button/AddButton";
import SaveButton from "./button/SaveButton";
import CancelButton from "./button/CancelButton";


const ToDoTask = () => {
    const {
      addTask,
      background,
      deleteTask,
      editIndex,
      editText,
      handleEditTask,
      handleOnDragEnd,
      setNewTask,
      newTask,
      tasks,
      toggleTaskCompletion,
      saveEditedTask,
      setBackground,
      setEditIndex,
      setEditText,
    } = useContext(TaskContext);

    useEffect(() => {
        const hour = new Date().getHours();
    
        if (hour >= 5 && hour < 9) {
          // Sunrise: Early morning
          setBackground('linear-gradient(to top, #FFB347, #FFCC33, #FF9966)');
        } else if (hour >= 9 && hour < 17) {
          // Midday: Bright sky
          setBackground('linear-gradient(to bottom, #87CEEB, #00BFFF, #1E90FF)');
        } else if (hour >= 17 && hour < 20) {
          // Sunset: Evening
          setBackground('linear-gradient(to top, #FF4500, #FF6347, #FF7F50)');
        } else {
          // Night: Dark
          setBackground('linear-gradient(to bottom, #141E30, #243B55)');
        }
      }, [setBackground]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const handleKeyDownEdit = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
        saveEditedTask();  // Add task when Enter is pressed
      }
  }

  const isEditMode = editIndex !== null;

    return (
        <Main className='main-container' background={background}>
            <div>
                <Header className='header'>
                    <Icon><i className="far fa-calendar-plus"></i></Icon>
                    <Title>To-Do List</Title>
                </Header>
                <div className='task-content'>
                    {!isEditMode ? (
                        <TextAreaWrapper className='add-textarea-container'>
                            <StyledTextArea 
                                className='add-textarea'
                                placeholder="Add your task.." 
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                onKeyDown={handleKeyDown}
                                rows={4}
                            />
                            <AddButton addTask={addTask} />
                        </TextAreaWrapper>
                    ) :
                    (<EditContainer className='edit-container'>
                        <StyledTextArea
                            className='edit-textarea'
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={handleKeyDownEdit}
                        />
                        <EditButtonsContainer className='edit-buttons-container'>
                            <SaveButton saveEditedTask={saveEditedTask} />
                            <CancelButton setEditIndex={setEditIndex} />
                        </EditButtonsContainer>
                    </EditContainer>)
                    }
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="tasks">
                            {(provided) => (
                                    <ListItemContainer
                                        className='list-item-container'
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {tasks.map((task, index) => (
                                            <Draggable key={index} draggableId={`task-${index}`} index={index}>
                                                {(provided) => (
                                                    <ListItem
                                                        className='list-item'
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <TaskContainer className='task-container'>
                                                            <div
                                                                className='task'
                                                                    style={{
                                                                        textDecoration: task.completed ? "line-through" : "none",
                                                                    }}
                                                                    onClick={() => toggleTaskCompletion(index)}>
                                                                    {task.text}
                                                            </div>
                                                            <TextAreaWrapper className='edit-textarea-wrapper'>
                                                                <IconButton onClick={() => handleEditTask(index)}>
                                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                                </IconButton>
                                                                <IconButton onClick={() => deleteTask(index)}>
                                                                    <i className="fa-solid fa-trash-can"></i>
                                                                </IconButton>
                                                            </TextAreaWrapper>
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
                </div>
            </div>
        </Main>
    )
};

export default ToDoTask;