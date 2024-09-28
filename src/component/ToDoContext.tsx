import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { DropResult } from 'react-beautiful-dnd';

interface Task {
    text: string;
    completed: boolean;
}

// Define the shape of the context (array of tasks and the setTasks function)
type TaskContextType = {
    addTask: () => void;
    deleteTask: (index: number) => void; 
    editIndex: number | null;
    editText: string;
    handleOnDragEnd: (result: any) => void;
    handleEditTask: (index: number) => void;
    newTask: string;
    setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
    setEditText: React.Dispatch<React.SetStateAction<string>>;
    saveEditedTask: () => void;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>;
    tasks: Array<Task>;
    toggleTaskCompletion: (index: number) => void;
};
  
// Provide a default value
const defaultTaskContext: TaskContextType = {
    addTask: () => {},
    deleteTask: () => {},
    editIndex: null,
    editText: "",
    handleOnDragEnd: () => {},
    handleEditTask: () => {},
    newTask: "",
    setEditIndex: () => {},
    setEditText: () => {},
    saveEditedTask: () => {},
    setNewTask: () => {},
    setTasks: () => {},
    tasks: [],
    toggleTaskCompletion: () => {},
};

// Create a Context for tasks
export const TaskContext = createContext<TaskContextType>(defaultTaskContext);

// Define the props for TaskProvider, using PropsWithChildren
interface TaskProviderProps {
    children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps>  = ({children}) => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editText, setEditText] = useState<string>("");

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
            const savedTasks = localStorage.getItem("tasks");

            if (savedTasks) {
                setTasks(JSON.parse(savedTasks));
            }
        } catch (error) {
        console.error("Failed to load tasks from local storage:", error);
        }
    };

    // Function to save tasks to local storage
    const saveTasksToLocalStorage = (tasks: Task[]) => {
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
    const toggleTaskCompletion = (index: number) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(sortTasks(updatedTasks));
    };

    // Function to sort tasks (completed tasks at the bottom)
    const sortTasks = (tasks: Task[]) => {
        return tasks.sort((a, b) => Number(a.completed) - Number(b.completed));
    };

    // Delete a task
    const deleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(sortTasks(updatedTasks));
    };

    // Edit a task
    const handleEditTask = (index: number) => {
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
    const handleOnDragEnd = (result: DropResult) => {
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