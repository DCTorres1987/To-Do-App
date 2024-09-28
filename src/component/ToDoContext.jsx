import React, { createContext, useState, useEffect } from "react";

// Create a Context for tasks
export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");

    // Load tasks from local storage when the component mounts
    useEffect(() => {
        loadTasksFromLocalStorage();
    }, []);

    // Save tasks to local storage whenever tasks state changes
    useEffect(() => {
        saveTasksToLocalStorage(tasks);
    }, [tasks]);

    // Function to load tasks from local storage
    const loadTasksFromLocalStorage = () => {
        try {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (savedTasks) {
            setTasks(savedTasks);
        }
        } catch (error) {
        console.error("Failed to load tasks from local storage:", error);
        }
    };

    // Function to save tasks to local storage
    const saveTasksToLocalStorage = (tasks) => {
        try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        } catch (error) {
        console.error("Failed to save tasks to local storage:", error);
        }
    };

    // Add a new task
    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks(sortTasks([...tasks, { text: newTask, completed: false }]));
        setNewTask("");
    };

    // Toggle the completion status of a task
    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(sortTasks(updatedTasks));

    };

    // Function to sort tasks (completed tasks at the bottom)
    const sortTasks = (tasks) => {
        return tasks.sort((a, b) => a.completed - b.completed);
    };

    // Delete a task
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(sortTasks(updatedTasks));
    };

    // Edit a task
    const handleEditTask = (index) => {
        setEditIndex(index);
        setEditText(tasks[index].text)
    }

    const saveEditedTask = () => {
        const updatedTasks = tasks.map((task, i) => 
            i === editIndex ? {...task, text: editText } : task
        );
    
        setTasks(sortTasks(updatedTasks));
        setEditIndex(null); // exit edit mode
        setEditText(''); // clear edit input field
    }

    // Function to handle drag end
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
    
        const reorderedTasks = Array.from(tasks);
        const [movedTask] = reorderedTasks.splice(result.source.index, 1);
        reorderedTasks.splice(result.destination.index, 0, movedTask);
        setTasks(reorderedTasks);
    };
    
    
    return (
        <TaskContext.Provider
        value={{
            addTask,
            editIndex,
            editText,
            deleteTask,
            handleEditTask,
            handleOnDragEnd,
            newTask,
            saveEditedTask,
            setTasks,
            setNewTask,
            setEditIndex,
            setEditText,
            tasks,
            toggleTaskCompletion,
        }}
        >
        {children}
        </TaskContext.Provider>
    )

}